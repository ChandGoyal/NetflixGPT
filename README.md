# Netflix GPT

- Create React App
- Configured Tailwind CSS
- Header
- Login Form
- Sign Up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying app to production
- Create SignUp User Account
- Implement Sign In User Api
- Created Redux Store with userSlice
- Implemented Sign Out
- Update Profile
- BugFix: Sign up user displayName and profile picture update
- BugFix: If the user is not logged in redirect to Login Page from Browse Page and vice-versa
- Unsubscribed to the onAuthStateChanged callback
- Register TMDB API & create an app & get access token
- Get Data from TMDB (Movie Lists -> Now Playing) API
- Create useNowPlayingMovies - Custom Hook for Now Playing Movies
- Create movieSlice
- Update Store with movies Data
- Planning for MainContainer & secondary container
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the Youtube video and make it autoplay and mute and on loop without controls
- useMovieTrailer - Custom Hook to display and play video in background
- Tailwind Classes to make Main Container look awesome
- Build Secondary Component
- Build Movies List with Scrolling horizontally based on vertical scroll functionality for Cards Container while disabling page scrolling when the cursor is inside the cards container
- Build Movie Card
- TMDB Image CDN URL
- Made the Browse page amazing with Tailwind CSS
- useMostPopularMovies, useTopRatedMovies, useUpcomingMovies Custom hooks for Most Popular, Top Rated and Upcoming Movies
- Add .env file to keep API Access Token Keys Hidden and add it to .gitignore to prevent API Key leaks
- GPT Search Page
- GPT Search Bar
- (BONUS) Multi-language Feature in our App in Search Bar
- Get Gemini AI Api Key
- Gpt Search API Call
- fetched gptMoviesSuggestions from TMDB
- created gptSlice added data
- Reused Movie List component to make movie suggestion container
- Memoization
- Error Handling for Gpt Search
- Footer
- Made our Site Responsive

# Features

- Login/Sign Up

  - Sign In/ Sign Up Form
  - Redirect to Browse Page

- Browse (after Authentication)

  - Header
  - Main Movie
    - Trailer in Background
    - Title and Description
    - Movie Suggestions
      - Movies List ⁕ N

- NetflixGPT
  - Search Bar
  - Movie Suggestion

# Steps for Firebase Deployment

0. Install firebase CLI using `npm install -g firebase-tools`
1. Firebase Login - `firebase login`
2. Initialize Firebase - `firebase init` - Configure carefully as per requirements
3. Deploy Command - `firebase deploy` 
