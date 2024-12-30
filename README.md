WebFinal Project
This is a web application that implements a social media-like platform with features like user authentication, profiles, and a basic feed. Users can register, log in, view a home feed, interact with posts, follow/unfollow users, and view other users' profiles. This project is built with React for the frontend, utilizing react-router-dom for routing, Chakra UI for styling, and Vercel for deployment.(I was plannig to create full stack website,but i couldn't manage backend part.That's why parts of website not clickable and just for style)

Features
User Authentication:
Register and log in users.
Session management and protected routes.
Profile Management:
View user profiles.
Follow/unfollow other users.
Home Feed:
Display posts from other users.
Like posts, comment, and share.
Responsive Design:
Built to be responsive and adaptive across devices using Chakra UI's flexible grid system.
Technologies Used
Frontend:

React
react-router-dom
Chakra UI
Axios (for HTTP requests)
react-toastify (for toast notifications)
Backend (optional, if you were to implement it later):

REST API (e.g., with Node.js, Express)
Deployment:

Vercel (for hosting the frontend)
Project Setup
1. Clone the repository
To get started, clone the repository to your local machine:

bash

git clone https://github.com/301ken/webfinal.git
2. Install Dependencies
Navigate to the project directory and install the dependencies:

bash

cd myapp
npm install
3. Set Up Environment Variables
You will need to configure some environment variables (like API URLs and tokens). Create a .env file in the root directory and add any required environment variables:

bash

REACT_APP_API=http://localhost:5000/  # Update this to your backend API URL
4. Start the Development Server
Once the dependencies are installed, you can start the development server:

bash

npm start
This will run the application locally at http://localhost:3000.

Routing Overview
Home Page (/home): Displays posts and allows interaction (like, comment, share).
Profile Page (/profile/:id): Displays the user profile page with their posts, followers, and following list.
Login Page (/login): A form for users to log in.
Register Page (/register): A form for users to register an account.
Components Breakdown
1. Navbar
Displays navigation links to different sections (Home, Profile, etc.).
Contains options for logging out, user settings, etc.
2. PostCard
Represents a single post.
Allows users to interact with posts by liking, commenting, or sharing.
3. UserCard
Displays user profile details like name, followers, and following.
Allows users to follow or unfollow other users.
4. ProtectedRoute
Ensures that only logged-in users can access certain pages, such as the Home and Profile pages.
Redirects unauthenticated users to the login page.
Deployment
This project is deployed on Vercel, allowing users to access the app directly via the following link:

App Link: https://webfinalproject-46fj.vercel.app/
Testing and Development Notes
Login and Registration: The app assumes basic user authentication is in place. You can add real backend logic to authenticate users.
Protected Routes: The app redirects unauthenticated users to the login page when accessing restricted routes.
Responsive Design: The app uses Chakra UI's built-in responsive utilities to ensure a seamless experience across devices.
