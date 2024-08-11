# ChatBot - AI Chat Assistant

## Overview

This project is an AI-powered ChatBot application built with Next.js and integrated with OpenAI's API. It includes user authentication (login and registration), chat history tracking, and a responsive UI designed using Material-UI (MUI). The backend is supported by MongoDB for storing user data and chat history. The application offers real-time chat functionality with the AI assistant, providing a seamless experience across devices.

**[Live Preview](https://ai-chat-support-rho.vercel.app/)**

## Features

- **User Authentication**: Secure login and registration functionality.
- **Chat History Tracking**: Users can view, organize, and continue their past conversations. Conversations can be categorized into folders, allowing users to drag and drop chats for better organization.
- **Real-Time Messaging**: Interaction with the AI assistant happens in real-time with streaming responses, ensuring a fast and responsive user experience.
- **Responsive Design**: Optimized for both desktop and mobile devices using Material-UI.
- **Secure Data Handling**: User credentials and chat history are securely managed and stored in MongoDB.
- **OpenAI API Integration**: Utilizes OpenAI API for generating responses to user queries.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **React**: Frontend library for building user interfaces.
- **Material-UI (MUI)**: React components for faster and easier web development.
- **MongoDB**: NoSQL database for storing user credentials and chat history.
- **OpenAI API**: Provides the AI capabilities for the chat assistant.

## Setup Instructions

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB (local instance or MongoDB Atlas)
- An OpenAI API key

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/vivekvardhank/ai-chat-support/
   cd ai-chat-support
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env.local` file in the root directory and add the following:

   ```bash
   MONGODB_URI=your_mongodb_connection_string
   OPENAI_API_KEY=your_openai_api_key
   JWT_SECRET=your_jwt_secret
   ```

   Replace `your_mongodb_connection_string`, `your_openai_api_key`, and `your_jwt_secret` with your actual credentials.

4. **Run the application**:
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

### Usage

1. **Register an account**: Navigate to the register page to create a new account.
2. **Login**: Use your credentials to log in.
3. **Start a chat**: Begin interacting with the AI assistant. Your chat history will be saved and can be accessed in future sessions.

### Project Structure

```bash
.
├── components
│   ├── ChatBox.js
│   ├── ChatInput.js
│   ├── HistorySidebar.js
│   └── ...
├── pages
│   ├── api
│   │   ├── auth
│   │   │   ├── login.js
│   │   │   ├── register.js
│   │   │   ├── getHistory.js
│   │   │   └── updateHistory.js
│   │   └── chat.js
│   ├── index.js
│   ├── login.js
│   ├── register.js
│   └── ...
├── public
│   └── ...
├── styles
│   └── ...
├── .env.local
├── package.json
├── README.md
└── ...
```

### Deployment

For deployment, consider using platforms like Vercel or Heroku. Ensure that the environment variables are properly set up in your deployment environment.

### Future Enhancements

- **Folder-Based Chat Organization**: Implement a feature allowing users to organize their chat history into folders and rename them as needed.
- **Drag-and-Drop Functionality**: Add the ability to drag and drop chats into different folders for better organization.
- **Faster Response Times**: Further optimize the integration with the OpenAI API to reduce response times and improve the overall chat experience.
