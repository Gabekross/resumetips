# Resume Seminar App

This is a React + Vite web app built for a seminar on **Crafting a Resume That Makes You Stand Out**.

## 🚀 Features

- 🧾 Resume Checklist
- 📝 Notes with Export to Word
- 💡 Downloadable Resume Template
- 📚 Resources
- 🎯 Quiz on Resume Best Practices
- ❓ Public Q&A Submission (Supabase backend)
- 🔐 Admin Dashboard for reviewing questions (with password + real-time updates)
- 🔁 Persistent admin login and logout support

## 🛠 Setup Instructions

1. **Clone or unzip the project**
2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env` file in the root**

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
VITE_ADMIN_TOKEN=your_secret_admin_password
```

4. **Start the app**

```bash
npm run dev
```

5. Open `http://localhost:5173` in your browser.

## 🧠 Admin Login

Navigate to `/admin/qna` and enter the admin token to view submitted questions. You’ll stay logged in until you log out.

## 📦 Tech Stack

- React + Vite
- Tailwind CSS
- Supabase (for real-time Q&A)
