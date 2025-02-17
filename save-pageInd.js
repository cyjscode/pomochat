document.addEventListener("DOMContentLoaded", function() {

    const DB_NAME = "PageStateDB";
    const STORE_NAME = "PageStateStore";
    let db;

    // Open or create IndexedDB
    function openDB() {
        return new Promise((resolve, reject) => {
            let request = indexedDB.open(DB_NAME, 1);

            request.onupgradeneeded = function (event) {
                let db = event.target.result;
                if (!db.objectStoreNames.contains(STORE_NAME)) {
                    db.createObjectStore(STORE_NAME);
                }
            };

            request.onsuccess = function (event) {
                db = event.target.result;
                resolve(db);
            };

            request.onerror = function (event) {
                console.error("IndexedDB Error: ", event.target.error);
                reject(event.target.error);
            };
        });
    }

    // Save all elements with data-save
    function savePageState() {
        openDB().then(db => {
            let transaction = db.transaction(STORE_NAME, "readwrite");
            let store = transaction.objectStore(STORE_NAME);
            let state = {};

            // Save input fields, dropdowns, checkboxes
            document.querySelectorAll("[data-save]").forEach(el => {
                if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
                    state[el.id] = el.type === "checkbox" ? el.checked : el.value;
                } else if (el.tagName === "SELECT") {
                    state[el.id] = el.value;
                }
            });

            // Save the whole chatbox and reward box as HTML
            let chatbox = document.querySelector("#chat");
            let rewardBox = document.querySelector("#ledger");

            if (chatbox) state.chatboxContent = chatbox.innerHTML;
            if (rewardBox) state.rewardBoxContent = rewardBox.innerHTML;

            // Store in IndexedDB
            store.put(state, "pageState");

            //console.log("✅ Page state saved:", state);
        }).catch(error => console.error("❌ Save Error:", error));
    }



    // Load saved page state
    function loadPageState() {
        openDB().then(db => {
            let transaction = db.transaction(STORE_NAME, "readonly");
            let store = transaction.objectStore(STORE_NAME);
            let request = store.get("pageState");

            request.onsuccess = function () {
                let state = request.result;
                if (!state) return;

                document.querySelectorAll("[data-save]").forEach(el => {
                    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
                        el.value = state[el.id] || "";
                        if (el.type === "checkbox") el.checked = state[el.id] || false;
                    } else if (el.tagName === "SELECT") {
                        el.value = state[el.id] || el.options[0]?.value;
                    }
                });

                // Restore the whole chatbox
                let chatbox = document.querySelector("#chat");
                if (chatbox && state.chatboxContent) {
                    chatbox.innerHTML = state.chatboxContent;
                }

                // Restore the whole reward box
                let rewardBox = document.querySelector("#ledger");
                if (rewardBox && state.rewardBoxContent) {
                    rewardBox.innerHTML = state.rewardBoxContent;
                }

                console.log("✅ Page state loaded:", state);
            };

            request.onerror = function () {
                console.error("❌ Load Error:", request.error);
            };
        }).catch(error => console.error("❌ OpenDB Load Error:", error));
    }

    function clearChatRewards() {
        // Select chatbox and reward box
        let chatbox = document.querySelector("#chat");
        let rewardBox = document.querySelector("#ledger");

        // Clear their contents
        if (chatbox) chatbox.innerHTML = "";
        if (rewardBox) rewardBox.innerHTML = "";

        taskCount = 0;

        // Remove saved chat data from IndexedDB
        openDB().then(db => {
            let transaction = db.transaction(STORE_NAME, "readwrite");
            let store = transaction.objectStore(STORE_NAME);
            store.get("pageState").onsuccess = function (event) {
                let state = event.target.result;
                if (state) {
                    delete state.chatboxContent;
                    delete state.rewardBoxContent;
                    store.put(state, "pageState");
                    console.log("✅ Chat and reward messages cleared!");
                }
            };
        }).catch(error => console.error("❌ Error clearing chat:", error));
    }



    // Auto-save every 5 seconds
    setInterval(savePageState, 5000);

    // Restore state on page load
    window.addEventListener("load", loadPageState);

    // Manual Save Button (optional)
    document.getElementById("saveButton")?.addEventListener("click", savePageState);
});
