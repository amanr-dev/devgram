import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [],
});

// ..................................System Design Overview
// System Design Overview
// Frontend (Client-Side):

// Next.js: Handles the UI and server-side rendering (SSR), providing fast load times and improved SEO.
// Tailwind CSS: For styling and responsive design, making it easier to create a visually appealing interface.
// Backend (Server-Side):

// Next.js API Routes: Use these routes to create the backend API. Next.js allows you to create API endpoints within the same codebase, which makes the development process more streamlined.
// Prisma ORM: Prisma will act as an ORM (Object-Relational Mapping) tool to interact with your MongoDB database. It simplifies database queries and manages the schema.
// MongoDB: The database where all the project data, user profiles, comments, etc., will be stored. MongoDB is a NoSQL database, which is flexible for handling various types of data.
// Authentication:

// NextAuth.js: For handling user authentication and session management. This can be integrated with various providers like Google, GitHub, etc.
// File Storage:

// Cloud Storage (e.g., AWS S3 or Cloudinary): To store images, files, or other media that users upload with their projects. These files can be stored in cloud storage, and URLs can be saved in MongoDB.
// Deployment:

// Vercel: Ideal for deploying Next.js applications due to seamless integration.
// MongoDB Atlas: A managed MongoDB service that allows you to deploy, operate, and scale your MongoDB databases with ease.
// Data Flow & Architecture
// User Interaction:

// Users interact with the frontend (Next.js) to browse, upload, and manage their projects.
// Tailwind CSS ensures a responsive and attractive UI/UX.
// API Requests:

// When a user submits a project, the frontend sends a request to the Next.js API route.
// The API route processes the request and uses Prisma to interact with the MongoDB database.
// Database Operations:

// Prisma manages the connection between the API and MongoDB. It performs CRUD (Create, Read, Update, Delete) operations on the database based on user actions.
// File Storage:

// If a project includes images or files, they are uploaded to a cloud storage service.
// The storage service returns a URL, which is then saved in MongoDB via Prisma.
// Authentication & Session Management:

// NextAuth.js handles the authentication flow. User sessions are managed securely, with options for OAuth, email/password, etc.
// User-related data is stored in MongoDB.

// Client (Next.js + Tailwind CSS)
//          |
//          v
// API Routes (Next.js API)
//          |
//          v
// Prisma ORM (for database operations)
//          |
//          v
// Database (MongoDB)
//          |
//          v
// Cloud Storage (for media)
