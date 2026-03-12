# Lendsqr Frontend Engineering Assessment

A pixel-perfect implementation of the Lendsqr Admin Console built with React, TypeScript, and SCSS.

🔗 **[Live Demo](#)** &nbsp;|&nbsp; 🎨 **[Figma Design](https://www.figma.com/design/ZKILoCoIoy1IESdBpq3GNC/Lendsqr-Frontend-Engineering-Assessment)**

---

## 📋 Overview

This project is a frontend assessment for Lendsqr, replicating key pages of their Admin Console. It demonstrates proficiency in React, TypeScript, SCSS, API integration, and responsive design.

---

## 📄 Pages Built

| Page | Route | Description |
|------|-------|-------------|
| Login | `/` | Authentication page |
| Dashboard | `/dashboard` | Overview with key metrics |
| Users | `/dashboard/users` | User list with 500 mock records |
| User Details | `/dashboard/users/:id` | Individual user profile |

---

## 🛠 Tech Stack

- **React** — UI library
- **TypeScript** — Type-safe JavaScript
- **SCSS** — Styling and design tokens
- **React Router** — Client-side routing

---

## ⚙️ Getting Started

### Prerequisites

- Node.js `>= 18.x`
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Victor-udenna/victor-lendsqr-fe-test.git

# Navigate into the project
cd victor-lendsqr-fe-test

# Install dependencies
npm install
```

### Running the App

```bash
# Start development server
npm run dev
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage
```

### Building for Production

```bash
npm run build
```

---

## 🗂 Project Structure

```
src/
├── assets/              # Images, icons, fonts
├── components/          # Reusable UI components
│   ├── layout/          # Layout components (Sidebar, Header, etc.)
│   └── ui/              # Base UI components (Button, Input, etc.)
├── lib/                 # Third-party library configs and utilities
├── pages/               # Page-level components
│   ├── Dashboard/
│   ├── Login/
│   ├── UserDetails/
│   └── Users/
├── providers/           # React context providers
├── store/               # State management
├── styles/              # Global SCSS variables and mixins
└── utils/               # Helper functions
```

---

### Data Persistence

User details are stored and retrieved using **localStorage** / **IndexedDB** so that individual user profile data persists across page navigations without re-fetching.

---

## 📱 Responsive Design

The application is fully mobile responsive, adapting layouts across:

- **Mobile** — `< 768px`
- **Tablet** — `768px – 1024px`
- **Desktop** — `> 1024px`

---

---

## 🎨 Design Decisions

- **SCSS Modules** used per component for scoped styles and zero class conflicts
- **Component-first architecture** — every UI element is broken into reusable, testable components

---

## 📝 Commit Convention

Commits follow the [Conventional Commits](https://www.conventionalcommits.org/) standard:

```
feat: add user details page
fix: correct pagination offset bug
chore: update dependencies
test: add login negative scenario tests
```

---

## 👤 Author

**Victor Udenna**
- GitHub: [@Victor-udenna](https://github.com/Victor-udenna)
