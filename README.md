# 🎬 CineStream - Professional Movie Discovery Platform

CineStream is a high-performance, industry-standard movie discovery application built with **React.js** and powered by the **TMDB API**. This project demonstrates advanced frontend concepts including performance optimization, global state management, and seamless user experiences.

## 📸 Preview
![Project Preview](./src/assets/Preview.png) 

## 📺 Project Demo
[![Watch the video](https://img.shields.io/badge/Watch-Video-red?style=for-the-badge&logo=youtube)](https://youtu.be/ggbIT-b4U2Q?si=VOfnGfEPRtMPfjUN)

## ✨ Key Features

* **🚀 Infinite Scroll (Level 2 Requirement)**: Implemented using the **Intersection Observer API**. The app automatically fetches the next page of results as the user scrolls to the bottom, eliminating the need for traditional pagination buttons.
* **⏱️ Optimized Search with Debouncing**: Custom `useDebounce` hook ensures that API calls are only made 500ms after the user stops typing, significantly reducing server load and improving client-side performance.
* **❤️ Persistent Favorites List**: Users can save movies to their favorites using a "Heart" icon. Data is persisted using **LocalStorage** and managed globally via the **React Context API**.
* **🔔 Dynamic Badge Counter**: The navigation bar features a real-time notification badge that displays the current count of favorited movies.
* **🎨 Premium Dark UI**: A sleek, responsive interface built with **Tailwind CSS**, featuring glassmorphism effects, hover scales, and a Netflix-inspired grid system.
* **🛠️ Robust API Integration**: Centralized **Axios** configuration for clean, reusable, and scalable API calls to the TMDB database.

## 🛠️ Tech Stack

* **React.js**: Functional components and modern Hooks (`useCallback`, `useMemo`, `useRef`).
* **Tailwind CSS**: For utility-first professional styling and responsiveness.
* **React Router Dom**: For seamless client-side navigation between Home and Favorites.
* **Context API**: For global state management of the favorites list.
* **Lucide React**: For high-quality, consistent iconography.
* **TMDB API**: Serving as the backend for real-time movie data.

## 🚀 Getting Started

### Prerequisites
* Node.js (Latest LTS)
* TMDB API Key (Available at [themoviedb.org](https://themoviedb.org))

### Installation

1.  **Clone the repository**:
    ```bash
    git clone [https://github.com/your-username/cine-stream.git](https://github.com/your-username/cine-stream.git)
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Setup Environment Variables**:
    Create a `.env` file in the root directory and add your credentials:
    ```env
    VITE_TMDB_KEY=your_api_key_here
    VITE_TMDB_BASE_URL=[https://api.themoviedb.org/3](https://api.themoviedb.org/3)
    VITE_TMDB_IMAGE_BASE=[https://image.tmdb.org/t/p/w500](https://image.tmdb.org/t/p/w500)
    ```

4.  **Launch the Application**:
    ```bash
    npm run dev
    ```

## 📱 Project Roadmap
* **Level 1**: Core logic, API setup, basic search, and grid layout. ✅
* **Level 2**: Performance Mastery: Infinite Scroll, Debouncing, and Context-based Favorites. ✅
* **Level 3 (Upcoming)**: AI-Powered Mood Matcher using Gemini API & advanced Framer Motion animations. ⏳

---
**Developed for React Internship Assignment | Focus on Performance & Scalability**