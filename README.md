# ⚡ QuestIQ

A modern and responsive quiz application built with **React** that lets users test their knowledge across multiple categories. QuestIQ features timed quizzes, animated UI, answer review, and a local leaderboard for tracking scores.

---

## 📸 Preview

<img width="100%" alt="QuestIQ Preview" src="/src/assets/Preview.png">

---

## 🌐 Live Demo

https://quest-iq-kohl.vercel.app/

---

## ✨ Features

- 🎯 Interactive multiple-choice quizzes
- 📚 Multiple quiz categories
- 💻 Custom Web Development quizzes (HTML, CSS, JavaScript & React)
- 🌍 Live trivia questions fetched from an API
- 🔄 Loading and retry support for API quizzes
- ⏱ 15-second timer for every question
- 📊 Live progress indicator
- 👤 Player name before starting a quiz
- ✅ Instant score calculation
- 📝 Review correct and selected answers after every quiz
- 🏆 Persistent leaderboard using Local Storage
- ✨ Animated floating background icons
- 🎨 Modern glassmorphism UI
- 📱 Fully responsive design

---

## 📖 Quiz Categories

### Custom Categories

- HTML
- CSS
- JavaScript
- React

### API Categories

- General Knowledge
- Science
- History
- Movies
- Sports
- Music
- Gaming

---

## 🛠 Tech Stack

- React
- React Router DOM
- React Icons
- JavaScript (ES6)
- HTML5
- CSS3
- Vite
- The Trivia API

---

## 📂 Project Structure

```text
src/
│
├── assets/
│
├── components/
│   ├── CategoryCard.jsx
│   ├── Footer.jsx
│   ├── NameModal.jsx
│   ├── Navbar.jsx
│   └── Timer.jsx
│
├── data/
│   ├── categories.jsx
│   └── questions.js
│
├── pages/
│   ├── Home.jsx
│   ├── Categories.jsx
│   ├── Quiz.jsx
│   ├── Result.jsx
│   └── Leaderboard.jsx
│
├── services/
│   └── api.js
│
├── App.jsx
├── App.css
└── main.jsx
```

---

## 🚀 Getting Started

Clone the repository

```bash
git clone https://github.com/Bhavish193/QuestIQ.git
```

Go to the project folder

```bash
cd QuestIQ
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Open

```text
http://localhost:5173
```

---

## 🎮 How It Works

1. Choose a quiz category.
2. Enter your name.
3. Answer each question within **15 seconds**.
4. View your final score.
5. Review every question with the correct and your selected answer..
6. Compare your score on the leaderboard.

---

## 🏆 Leaderboard

QuestIQ stores scores in **Local Storage**, allowing users to compare previous attempts without requiring an account.

---

## 💡 Future Improvements

- 🔐 User Authentication
- 🌐 Online Database Leaderboard
- 🎚 Difficulty Levels
- 📈 Quiz Statistics Dashboard
- 🌙 Dark Mode
- 🔊 Sound Effects
- 🏅 Achievements & Badges
- ❤️ Favorite Categories
- 🔀 Random Mixed Quiz Mode

---

## 👨‍💻 Author

**Bhavish Singh**

GitHub: https://github.com/Bhavish193

---

## 📄 License

This project is licensed under the MIT License.