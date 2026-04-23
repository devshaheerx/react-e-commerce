# ⚡ Brand Shop

A modern, fully responsive e-commerce web application built with React, powered by Clerk authentication and a live product API.

## 🚀 Live Demo
🔗 https://website-e-commerce-react.netlify.app/

---

## ✨ Features

- 🔐 **Authentication** — Secure login & signup via Clerk with welcome/logout toast notifications
- 🛍️ **Product Listing** — Browse all products with live data from DummyJSON API
- 🗂️ **Collections** — Products grouped and browsable by category
- 🔍 **Search & Filter** — Global search bar that works from any page, redirects to Home and scrolls to top automatically. Filter by category tab
- 📄 **Product Detail** — Full product page with reviews, rating, shipping info, and in-page quantity controls
- 🛒 **Cart** — Add, increment, decrement items with quantity counter. Cart persists via localStorage. Duplicate-free — each product stored once with a quantity field
- 🧾 **Order Summary Sidebar** — Live subtotal, shipping calculation, and grand total in the cart page. Free shipping nudge when below threshold
- 📬 **Contact Form** — Submit feedback with field validation and toast notifications
- 📱 **Fully Responsive** — 2-column grid on mobile, flex-wrap on tablet, full layout on desktop. Every page optimized for all screen sizes
- ↑ **Scroll to Top** — Page always scrolls to top on every navigation
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


### File Descriptions

| File | Description |
|---|---|
| `Card.jsx` | Product card with quantity +/− controls |
| `Navbar.jsx` | Sticky navbar with global search & mobile menu |
| `Footer.jsx` | Footer |
| `Tab.jsx` | Horizontally scrollable category tab filter |
| `Context.jsx` | Global state — products, cart, filters, search |
| `Home.jsx` | Home page with 2-col mobile grid & search results |
| `Collections.jsx` | Products grouped by category |
| `Detail.jsx` | Single product detail with in-page cart controls |
| `Cart.jsx` | Cart page with order summary sidebar |
| `About.jsx` | About page |
| `Contact.jsx` | Contact form |
| `Login.jsx` | Clerk login page |
| `Layout.jsx` | Shared layout — Navbar, Footer, overflow guard |
| `PageNotFound.jsx` | 404 page |
| `Router.jsx` | All app routes |
| `App.jsx` | Root component + Clerk auth event listener |
| `main.jsx` | App entry point + ScrollToTop component |
| `index.css` | Global styles + scrollbar-hide utility |

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

This app uses Clerk for authentication.

- Unauthenticated users are redirected to the Login page
- After login, Clerk redirects back to the app and a welcome toast is shown
- On logout, a goodbye toast is shown
- Auth state is tracked using `sessionStorage` to survive Clerk's page redirect during login

---

## 🛒 Cart System

- Each product is stored **once** in the cart with a `quantity` field — no duplicates
- `+` increments quantity, `−` decrements it, trash icon removes the item when quantity reaches 1
- Quantity controls appear on product cards **site-wide** once an item is in the cart
- The Detail page shows inline quantity controls when the item is already in the cart
- Cart is saved to `localStorage` and persists across page refreshes and browser sessions
- Managed globally via React Context

---

## 🔍 Search Behavior

- The search bar is in the Navbar and works globally across all pages
- Typing from any page automatically redirects to Home and scrolls to top
- The search clears when clicking any nav link or the logo
- A clear `✕` button appears inside the search bar when text is present
- Results are filtered by both product title and category

---

## 📦 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
```

---

## 🌐 Deploying to Netlify

1. Push your code to GitHub
2. Connect your GitHub repo to Netlify
3. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Add all `.env` variables under **Site Configuration → Environment Variables**
5. Add a `public/_redirects` file with this line to fix React Router on refresh:

/*    /index.html    200

6. Push and Netlify will auto-deploy

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

---

## 📄 License

MIT

---

Built with ❤️ in Karachi, Pakistan
