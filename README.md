# 📦 Subscription Box

A responsive and interactive subscription service website offering various themed boxes such as smart home gadgets, gaming gear, coding essentials, and more. The site showcases products in a clean card layout, with protected dynamic routes for product details, profile, and contact pages. Built using modern web development tools and animations.

## 🚀 Live Site

👉 [Visit the Live Website](https://subscription-box-edd92.web.app/)

## 🎯 Purpose

Subscription Box is a comprehensive service platform that enables users to:

- Discover and browse tech-themed subscription boxes
- View detailed product information
- Manage their account and profile
- Experience secure authentication
- Enjoy a fully responsive, animated interface
- Access protected routes for premium content

## ✨ Key Features

### 🔐 Authentication System

- Secure email/password login and registration
- Google Sign-In integration
- Persistent login state
- Password visibility toggle
- Form validation with error messages

### 🏠 Homepage Sections

- **Slider**: Showcasing 3 tech product images (DaisyUI)
- **Subscription Services**: 6 tech boxes in card layout
  - Thumbnail, name, category, price, frequency
  - "View More" buttons for details
- **Trusted Reviews**: 3 demo cards with user ratings
- **FAQ Section**: Accordion with expandable Q&A

### 🛡 Protected Routes

- Product Details Page
- User Profile Page
- Contact Us Page

### 🎨 UI/UX Features

- AOS scroll animations
- Responsive Tailwind CSS layout
- Toast notifications
- Dynamic page titles
- 404 Error page
- Consistent AuthLayout

## 📦 Tech Stack & Packages

### Frontend

- `react`- UI Library
- `react-router-dom`- Client-side routing
- `firebase`-Authentication & Hosting
- `tailwindcss`- Utility-first CSS
- `daisyui`- UI Components

- `aos` - Scroll animations
- `react-icons` - Icon library
- `react-toastify` - Notifications

## 🛠️ Local Development Setup

### 1. Clone the Repository:

```bash
git clone https://github.com/amirsayeed/Subscription-Box.git
```

### 2. Install Dependencies

```bash
cd Subscription-Box-Client
npm install
```

### 3. Create Environment File

Create a .env.local file in the directory root with the following:

```bash
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

🔐 These values are in Firebase Project Settings after creating firebase project.

### 4. Run the Development Server

```bash
npm run dev
```

The app will be running at: http://localhost:5173

Make sure Firebase project is properly configured with authentication enabled for full functionality.
