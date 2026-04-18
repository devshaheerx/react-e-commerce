# ⚡ Brand Shop

A modern, full-featured e-commerce web application built with React, powered by Clerk authentication and a live product API.

---

## 🚀 Live Demo

https://website-e-commerce-react.netlify.app/

---

## ✨ Features

- 🔐 **Authentication** — Secure login & signup via Clerk
- 🛍️ **Product Listing** — Browse all products with live data from DummyJSON API
- 🗂️ **Collections** — Products grouped and browsable by category
- 🔍 **Search & Filter** — Filter products by name, category, or tab
- 📄 **Product Detail** — Full product page with reviews, rating, shipping info
- 🛒 **Cart** — Add items to cart, persisted via localStorage
- 📬 **Contact Form** — Submit feedback with validation and toast notifications
- 🔔 **Auth Toasts** — Welcome and logout notifications using react-hot-toast
- 📱 **Fully Responsive** — Works on mobile, tablet, and desktop
- ❓ **404 Page** — Custom page not found screen

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Vite | Build tool & dev server |
| Tailwind CSS 4 | Styling |
| React Router v6 | Client-side routing |
| Clerk | Authentication |
| Axios | API requests |
| react-hot-toast | Toast notifications |
| Lucide React | Icons |
| DummyJSON API | Product & category data |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Card.jsx         # Product card component
│   ├── Navbar.jsx       # Top navigation bar
│   ├── Footer.jsx       # Footer
│   └── Tab.jsx          # Category tab filter
├── context/
│   └── Context.jsx      # Global state (products, cart, filters)
├── pages/
│   ├── Home.jsx         # Home page with filtered products
│   ├── Collections.jsx  # Products by category
│   ├── Detail.jsx       # Single product detail
│   ├── Cart.jsx         # Shopping cart
│   ├── About.jsx        # About page
│   ├── Contact.jsx      # Contact form
│   ├── Login.jsx        # Clerk login page
│   ├── Layout.jsx       # Shared layout (Navbar + Footer)
│   └── PageNotFound.jsx # 404 page
├── router/
│   └── Router.jsx       # All app routes
├── App.jsx              # Root component + auth listener
├── main.jsx             # App entry point
└── index.css            # Global styles
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/devhaheerx/brand-shop.git
cd brand-shop
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root of the project:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_PRODUCTS=https://dummyjson.com/products
VITE_CATEGORIES=https://dummyjson.com/products/categories
```

> ⚠️ Never commit your `.env` file. It is already added to `.gitignore`.  
> Use `.env.example` as a safe template to share with others.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔑 Environment Variables

| Variable | Description |
|---|---|
| `VITE_CLERK_PUBLISHABLE_KEY` | Your Clerk project's publishable key |
| `VITE_PRODUCTS` | Base URL for products API |
| `VITE_CATEGORIES` | URL for product categories API |

---

## 🔐 Authentication Flow

This app uses [Clerk](https://clerk.com) for authentication.

- Unauthenticated users are redirected to the **Login page**
- After login, Clerk redirects back to the app and a **welcome toast** is shown
- On logout, a **goodbye toast** is shown
- Auth state is tracked using `sessionStorage` to survive Clerk's page redirect during login

---

## 🛒 Cart Persistence

The cart is saved to **localStorage** so it persists across page refreshes and browser sessions. It is managed globally via React Context.

---

## 📦 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
```

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

---

## 📄 License

[MIT](LICENSE)

---

> Built with ❤️ in Karachi, Pakistan
