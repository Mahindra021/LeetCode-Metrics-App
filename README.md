📊 LeetCode Metrics App

A simple and interactive web application that fetches and displays LeetCode user statistics in a visual and easy-to-understand format using HTML, CSS, and JavaScript.

🚀 Features:-
🔍 Search LeetCode users by username
✅ Username validation before API call
📈 Circular progress indicators for:
Easy problems
Medium problems
Hard problems

📊 Detailed statistics cards including:
Total solved problems
Easy, Medium, Hard submissions
Acceptance rate
Contribution points
⚡ Real-time data fetching from LeetCode API
🧼 Clean UI updates without page reload


🛠️ Tech Stack:-
HTML – Structure
CSS – Styling & circular progress visualization
JavaScript (Vanilla JS) – Logic & API handling
API Used: LeetCode Stats API


🧠 How It Works:-
User enters a LeetCode username
Username is validated using a regular expression
App fetches user data from the LeetCode Stats API
Data is processed and displayed as:
Circular progress bars
Statistic cards
Errors are handled gracefully with user feedback


📂 Project Structure:-
LeetCode-Metrics-App/
│
├── index.html
├── style.css
├── script.js
└── README.md



⚙️ Setup & Usage:-
Clone the repository:
git clone https://github.com/Mahindra021/LeetCode-Metrics-App.git

Open index.html in your browser
(No additional setup required)

🔐 Username Validation Rules
Cannot be empty

Allowed characters:
Letters (a–z, A–Z)
Numbers (0–9)
Underscore _
Hyphen -

Maximum length: 15 characters
⚠️ Error Handling
Invalid username alerts
API failure messages
Disabled search button during fetch
Proper UI reset after request completion


📌 Future Enhancements:-
🌙 Dark mode support
📅 Daily / weekly progress tracking
🔄 Auto refresh metrics
👤 Profile details (ranking, badges, etc.)
📜 Disclaimer

This project uses a public LeetCode statistics API and is not officially affiliated with LeetCode.


👨‍💻 Author:-
Mahindra Choudhary
CSE Student | Web Developer

⭐ If you like this project, give it a star!