# 🤖 AI Prompts Used - CineStream (Level 2)

1. **Project Foundation**: "Create a movie discovery app using React and Vite. Integrate the TMDB API to fetch 'Popular Movies' and display them in a responsive CSS grid with posters, titles, and ratings."

2. **Professional API Setup**: "Instead of using fetch everywhere, help me create a centralized Axios instance in a `src/api/tmdb.js` file. It should use environment variables for the API Key and Base URL."

3. **Performance Mastery (Debouncing)**: "I want to optimize the search bar. Create a custom hook called `useDebounce` that waits 500ms after the user stops typing before triggering the TMDB search API call."

4. **Level 2 - Infinite Scroll**: "Replace standard pagination buttons with Infinite Scroll. Use the Intersection Observer API in React to detect when the user reaches the last movie card and automatically fetch the next page of results."


5. **State Management (Context API)**: "Set up a `MovieContext` to manage a global 'Favorites' list. I want users to be able to click a heart icon on any movie card to add or remove it from their favorites."

6. **Data Persistence**: "Modify the Favorites logic so that the list is saved to `localStorage`. When the user refreshes the page, their favorited movies should still be there."

7. **Advanced UI Component**: "Build a `MovieCard` component that accepts an `innerRef`. This ref is crucial for the Intersection Observer to identify the last element in the grid for infinite scrolling."

8. **Navigation & Badge**: "Using `react-router-dom`, create a Navbar with links to 'Home' and 'Favorites'. Add a dynamic notification badge over the heart icon that shows the real-time count of favorited movies."

9. **UX Optimization**: "Handle the loading state professionally. Show a 'Loading more movies...' message or a spinner at the bottom of the grid only when new data is being fetched during an infinite scroll."

10. **Clean Code Refactoring**: "Refactor the fetching logic into a custom hook called `useMovies`. It should handle the page state, loading state, and the concatenation of new movie results into the existing list."