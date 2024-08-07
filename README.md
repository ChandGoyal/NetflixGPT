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
