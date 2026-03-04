# 💰 Moneta — Personal Finance Tracker

> Your personal finance tracker. Built with Next.js, TypeScript, and a lot of learning along the way.

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![React](https://img.shields.io/badge/React-19.2.3-61dafb?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss)
![Recharts](https://img.shields.io/badge/Recharts-latest-ff6b6b?style=flat-square)

---

## 🌟 About

Moneta is a personal finance tracker that lets you log your income and expenses, visualize your spending habits, and keep track of your financial health — all in one clean dashboard.

This was my **first real Next.js project** after 7 months of learning to code from scratch — starting with HTML and working up through CSS, JavaScript, React, TypeScript and finally Next.js.. No tutorials followed from start to finish — just building, breaking things, figuring it out, and learning deeply along the way.

---

## ✨ Features

- ➕ **Add transactions** — log income or expenses with name, amount, category, and date
- 🗑️ **Delete transactions** — remove any transaction with a single click
- 📊 **Spending by Category** — pie chart showing where your money goes
- 📈 **Income vs Expenses** — bar chart showing the last 6 months at a glance
- 💳 **Dashboard summary cards** — total balance, income, expenses, and savings rate
- 💾 **localStorage persistence** — your data survives page refreshes
- 🗺️ **Multi-page routing** — Dashboard, Transactions, and Categories pages
- 🎨 **Custom dark theme** — warm dark palette with pumpkin spice accents

---

## 🛠️ Tech Stack

| Technology                  | Usage                                  |
| --------------------------- | -------------------------------------- |
| **Next.js 16** (App Router) | Framework, routing, server components  |
| **React 19**                | UI, hooks, Context API                 |
| **TypeScript**              | Type safety throughout the app         |
| **Tailwind CSS v4**         | Styling with custom theme variables    |
| **Recharts**                | Pie chart and bar chart visualizations |
| **Google Fonts**            | Montserrat, Nunito, Roboto Mono        |

---

## 📁 Project Structure

```
app/
├── layout.tsx               # Root layout with fonts, context, modal
├── page.tsx                 # Dashboard page
├── globals.css              # Tailwind v4 theme & custom CSS variables
├── context/
│   └── ContextProvider.tsx  # Global state with React Context API
├── types/
│   └── index.ts             # Shared TypeScript types
├── lib/
│   └── constants.ts         # Shared category colors and emojis
├── components/
│   ├── header/
│   │   ├── Header.tsx
│   │   └── AddTransactionButton.tsx
│   ├── sideBar/
│   │   └── SideNavBar.tsx
│   ├── ui/
│   │   ├── SumCards.tsx
│   │   └── DashboardCards.tsx
│   ├── form/
│   │   ├── Modal.tsx
│   │   └── TransactionForm.tsx
│   ├── charts/
│   │   ├── MyPieChart.tsx
│   │   └── MyBarChart.tsx
│   ├── categories/
│   │   ├── Spendings.tsx
│   │   ├── IncomeAndExpenses.tsx
│   │   └── RecentTransactions.tsx
│   └── footer/
│       └── Footer.tsx
├── transactions/
│   └── page.tsx
└── categories/
    └── page.tsx
```

---

## 🧠 What I Learned Building This

This project was a deep dive into real frontend development. Here are the key concepts I worked through:

**Next.js App Router**

- Server components vs client components — understanding when to use `"use client"` and pushing it as far down the tree as possible
- Async server components for data fetching (no `useEffect` needed on the server!)
- File-based routing with layouts

**React & State Management**

- Context API for global state — `createContext`, `useContext`, `Provider`
- `useEffect` for browser-side side effects like localStorage
- Understanding the difference between mounting, rendering, and re-rendering
- Why `useEffect` with `[]` runs once on mount vs `[dependency]` runs on every change

**TypeScript**

- Creating and exporting shared types
- `Record<string, string>` and `Record<string, number>` for dynamic objects
- `React.Dispatch<React.SetStateAction<T>>` for typed state setters
- Type narrowing with null guards instead of `as Type` assertions
- Proper typing for context, props, and event handlers

**Data Transformation**

- `.filter()` + `.reduce()` to group transactions by category
- `Object.entries()` to convert objects to arrays for mapping
- `Array.from({ length: n })` to generate last 6 months dynamically
- Transforming app state into the specific data shapes Recharts requires

**localStorage**

- Why you need two separate `useEffect`s — one to write, one to read
- `JSON.stringify` and `JSON.parse` for converting between arrays and strings
- The "notebook" mental model: localStorage is always there, you just have to open it

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/visionas9/moneta.git

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗺️ Pages

| Route           | Description                                            |
| --------------- | ------------------------------------------------------ |
| `/`             | Dashboard — summary cards, charts, recent transactions |
| `/transactions` | Full transaction list with delete functionality        |
| `/categories`   | Spending breakdown and income vs expenses charts       |
| `/settings`     | Coming soon                                            |

---

## 🎨 Color Palette

| Color         | Hex       | Usage                       |
| ------------- | --------- | --------------------------- |
| Ink Black     | `#050517` | Header & sidebar background |
| Coffee Bean   | `#1c1018` | Page background             |
| Surface       | `#2a1f26` | Card backgrounds            |
| Mint Cream    | `#f2f7f2` | Primary text                |
| Pumpkin Spice | `#f5853f` | Buttons & accents           |
| Deep Lilac    | `#6247aa` | Secondary accent            |
| Success       | `#4caf7d` | Income & positive values    |
| Danger        | `#e05c5c` | Expenses & negative values  |
| Warning       | `#f5c542` | Savings rate                |

---

## 👨‍💻 Built By

**Alperen** — self-taught developer, 7 months of consistent daily practice.

[![GitHub](https://img.shields.io/badge/GitHub-visionas9-181717?style=flat-square&logo=github)](https://github.com/visionas9)

---
