



const rewardMessages = [
    "Strong work. Now keep raising the bar.",
    "That’s how you build momentum. Stay on it.",
    "Execution matters. You delivered.",
    "Solid effort. Now aim even higher.",
    "Consistency wins. Keep showing up.",
    "Results speak. Yours are looking sharp.",
    "Another win. Let’s stack more.",
    "You handled that. Now, what’s next?",
    "Good work. Push for excellence every time.",
    "Success is built one task at a time. Keep going.",
    "Your discipline is showing—keep proving yourself.",
    "Every task completed is a step closer to mastery.",
    "You’re sharpening your edge—stay relentless.",
    "Results don’t lie, and yours speak volumes.",
    "You handled that like a pro—now keep refining.",
    "Every win builds your reputation. Make it count.",
    "Consistency isn’t flashy, but it’s what wins.",
    "That’s the kind of execution that leads to bigger things.",
    "You showed up and delivered. That’s the difference-maker.",
    "Momentum is built in moments like this. Keep stacking.",
    "Precision and effort—two things you just proved.",
    "The way you work now sets the standard for later.",
    "Keep solving problems, and soon you’ll lead the way.",
    "Competence compounds—this is how you gain an edge.",
    "You followed through. That’s what separates the best.",
    "This level of focus will take you places. Keep at it.",
    "One step ahead today means miles ahead tomorrow.",
    "You’re proving reliability—don’t let up.",
    "Standards rise every time you execute like this.",
    "No shortcuts, no excuses—just results. Keep going.",
    "The best stay sharp by doing exactly what you just did.",
    "Success isn’t accidental. Keep making it happen.",
    "You’re building credibility with every task done right.",
    "This is how you establish a track record of excellence.",
    "Your future self will thank you for showing up today.",
    "The small things separate amateurs from pros—you handled it.",
    "You owned it. Now keep raising the bar.",
    "You just made progress. Stack more of these.",
    "The more you do this, the more unstoppable you become.",
    "Work ethic like this gets noticed—keep going.",
    "What you finished today could be someone else’s excuse.",
    "Strong moves. Keep making them.",
    "Excellence isn’t occasional. Make this your default.",
    "You’re proving that you can be counted on. That matters.",
    "What you accomplished today is proof of what’s possible.",
    "One more win in the bank. What’s next?",
    "You took control of the task. That’s leadership in action.",
    "It wasn’t just done—it was done right. That’s the difference.",
    "Keep this pace up, and you’ll outgrow expectations.",
    "Another challenge met, another reason to trust your process.",
    "You delivered. That’s how you build trust and momentum.",
    "This is what progress looks like—keep pushing forward.",
    "You showed up, you executed, and it paid off.",
    "Your work ethic speaks louder than words.",
    "Another task handled. Another reason to bet on yourself.",
    "Great work. Now channel this energy into the next challenge.",
    "The best don’t wait for motivation—they build discipline. You did that.",
    "Every time you complete a task, you’re leveling up.",
    "Consistency beats talent when talent doesn’t show up. You showed up.",
    "Your focus is paying off. Keep sharpening your skills.",
    "Success follows those who prove they can be counted on.",
    "That’s another win. Make it a habit.",
    "You’re proving that effort compounds into excellence.",
    "Today’s results are tomorrow’s reputation. Keep making it solid.",
    "What you accomplished today gets you one step closer to mastery.",
    "Your standards define you. Today, you raised them.",
    "This is what personal growth looks like in real time.",
    "You just set the tone for how you handle challenges.",
    "Another step forward. The next one is waiting.",
    "Results come from execution, and you’re executing well.",
    "You just moved the needle. Small steps create big change.",
    "Effort like this isn’t common. That’s why it stands out.",
    "Today’s discipline leads to tomorrow’s opportunities.",
    "You’re building a reputation for reliability—keep reinforcing it.",
    "Greatness is built on consistency, not luck. You proved that today.",
    "You handled it, no excuses, no shortcuts—just execution.",
    "Every win builds momentum. Stack more of them.",
    "You didn’t just check a box—you delivered results.",
    "Solid execution. That’s what separates professionals from amateurs.",
    "Another challenge down, another reason to trust yourself.",
    "You’re writing your own success story—one task at a time.",
    "Your ability to execute is setting you apart.",
    "The best don’t wait for perfect conditions. They execute. Like you just did.",
    "Your actions today set the tone for what’s next. Keep it sharp.",
    "This is how you stay ahead—by consistently showing up.",
    "Momentum is on your side. Keep pushing forward.",
    "You’re proving that you don’t just start—you finish.",
    "This is what self-discipline looks like in action.",
    "People who get results work like this. Keep doing it.",
    "You took the challenge and handled it. That’s leadership.",
    "The way you executed today? That’s how pros operate.",
    "Every task completed is a commitment kept. Keep building that trust.",
    "When you commit to excellence, results follow. Like today.",
    "You made it happen today. Tomorrow, do it again.",
    "This is the type of work ethic that earns respect.",
    "You just proved that progress is always a choice.",
    "You’re setting a new standard for yourself. Keep raising it.",
    "That wasn’t just work—it was a step toward something bigger.",
    "Your time was well spent. Now, what’s next?",
    "This is the kind of execution that turns goals into reality.",
    "You locked in and delivered. That’s how success is built.",
    "Execution like this separates the committed from the comfortable.",
    "Another task down, another reason to trust your own discipline.",
    "The work speaks for itself. Today, it spoke loud and clear.",
    "Your ability to focus is becoming a real advantage.",
    "Momentum isn’t given. You just earned more of it.",
    "You handled business. Now keep stacking those wins.",
    "This is how consistency turns into expertise.",
    "You committed. You followed through. That’s the formula.",
    "Results like this don’t happen by accident. Keep it up.",
    "You showed up with intent today. That’s the difference-maker.",
    "Every time you push through, you’re reinforcing discipline.",
    "People who execute like this? They don’t stay in the same place for long.",
    "You didn’t just complete a task—you built your reputation.",
    "This kind of follow-through builds confidence in yourself and from others.",
    "It’s not about one great moment. It’s about stacking them. You did that.",
    "You didn’t wait for the right conditions—you made them.",
    "Your work today is proof that you’re in control of your progress.",
    "Winners don’t just work hard—they work smart. You did both.",
    "This is how trust is built—by delivering again and again.",
    "The standard you set today will define your future results.",
    "You didn’t just do the work—you owned the outcome.",
    "This wasn’t just about finishing—it was about finishing strong.",
    "The real win is in the discipline you’re building. Stay with it.",
    "Your effort today set the bar. Now keep it there.",
    "Every time you push yourself, you’re making future success easier.",
    "Your actions today are creating opportunities tomorrow.",
    "This is how you build confidence—by proving you can execute.",
    "Your best work isn’t behind you. It’s in front of you. Keep going.",
    "What you did today? That’s how progress is built.",
    "You’re showing what reliability looks like. People notice that.",
    "You just raised the bar for yourself. Don’t lower it.",
    "This is the kind of effort that turns potential into results.",
    "You just made success less about luck and more about process.",
    "Your consistency is becoming your competitive edge.",
    "Every completed task is another reason to trust yourself.",
    "You just proved that discipline beats motivation every time.",
    "The way you showed up today? That’s how leaders operate.",
    "You’re not just working—you’re setting the tone for bigger things.",
    "You’re proving that good work creates its own momentum.",
    "Today was another step forward. Keep stacking progress.",
    "Your ability to execute is your biggest asset. Keep sharpening it.",
    "This kind of focus? It’s what gets noticed and rewarded.",
    "Another win secured. Now, go after the next one.",
    "You’re developing a skill most people lack—consistency.",
    "Your time today wasn’t spent. It was invested.",
    "Every task completed is proof that you follow through.",
    "This isn’t just about getting things done—it’s about getting them done right.",
    "You worked, you delivered, and now you own the result."
    
];

// 🔹 Function to Log Task Completion and Reward
function logTaskCompletion() {
    const ledger = document.getElementById('ledger');
    taskCount++; // Increase task count
    const now = new Date().toLocaleTimeString();

    // 🔹 Create Task Entry
    const entry = document.createElement("div");
    entry.classList.add("task-entry");
    entry.innerHTML = `
        <p><strong>✅ Completed at ${now}</strong></p>
        <p><strong>Efficiency Report:</strong> ${rewardMessages[Math.floor(Math.random() * rewardMessages.length)]}</p>
        <p class="completion-seal">✔ Task Logged</p>
    `;
    
    ledger.appendChild(entry);

    // 🔹 Apply Smooth Animations
    entry.style.opacity = "0";
    entry.style.transform = "translateY(10px)";
    setTimeout(() => {
        entry.style.opacity = "1";
        entry.style.transform = "translateY(0)";
    }, 300);

    // 🔹 Check for Milestone Reward
    if (taskCount % 5 === 0) {
        showMilestoneReward(taskCount);
    }
}

// 🔹 Milestone Reward Function
function showMilestoneReward(count) {
    const ledger = document.getElementById('ledger');
    const milestone = document.createElement("div");
    milestone.classList.add("milestone-divider");
    milestone.innerHTML = `<p>🌟 Milestone: ${count} Tasks Completed! Keep Going!</p>`;

    ledger.appendChild(milestone);

    // 🔹 Apply Smooth Appearance
    milestone.style.opacity = "0";
    milestone.style.transform = "translateY(10px)";
    setTimeout(() => {
        milestone.style.opacity = "1";
        milestone.style.transform = "translateY(0)";
    }, 300);
}