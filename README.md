# Zentry Website Replica

A modern, animated replica of the Zentry.com website showcasing cutting-edge web development techniques and smooth user interactions.

## 🚀 Features

- **Stunning Animations**: Powered by GSAP for smooth scroll-triggered animations
- **Modern Design**: Faithful recreation of Zentry's immersive gaming-themed interface
- **Responsive Layout**: Optimized for all device sizes with Tailwind CSS v4
- **Interactive Elements**: Dynamic video backgrounds, hover effects, and audio controls
- **Performance Optimized**: Built with Next.js 15 and Turbopack for lightning-fast development

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: JavaScript/JSX
- **Styling**: Tailwind CSS v4
- **Animations**: GSAP (GreenSock Animation Platform)
- **Icons**: React Icons
- **Fonts**: Custom font loading with Next.js

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and Tailwind configuration
│   ├── layout.jsx       # Root layout with font setup
│   └── page.jsx         # Main page component
└── components/
    ├── About.jsx        # About section with scroll animations
    ├── AnimatedTitle.jsx # Reusable animated title component
    ├── Button.jsx       # Custom button component
    ├── Contact.jsx      # Contact section
    ├── Features.jsx     # Features showcase with video cards
    ├── Footer.jsx       # Footer component
    ├── Hero.jsx         # Hero section with video switching
    ├── Navbar.jsx       # Navigation with scroll effects
    ├── RoundedCorners.jsx # Utility component
    └── Story.jsx        # Story section
```

## 🎨 Key Components

- **Hero Section**: Interactive video switching with smooth transitions
- **Animated Titles**: GSAP-powered text animations on scroll
- **Bento Grid**: Modern card layout for features showcase
- **Floating Navigation**: Dynamic navbar that responds to scroll direction
- **Audio Controls**: Interactive sound indicators with visual feedback

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd zentry
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 🎯 Original Design

This project is a replica of the official [Zentry.com](https://zentry.com) website, recreated to demonstrate modern web development skills and animation techniques.
