# brainly
A web-based project designed to provide a comprehensive platform where users can access all their needed links, tweets, videos, documents, and more, essentially replacing the self-chat feature in WhatsApp.

[![Website Status](https://img.shields.io/website?url=https%3A%2F%2Fbrainly-v1.vercel.app%2Fdashboard&label=Live%20Status)](https://brainly-v1.vercel.app/dashboard)

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [License](#license)

---

## Introduction
The **brainly** project is a modern web application that serves as an all-in-one platform for users to gather, organize, and access their important links, tweets, videos, documents, and other resources. The goal is to replace the self-chat feature in WhatsApp, allowing users to store and manage their content without cluttering their chats.

**Website Status**: [Live](https://brainly-v1.vercel.app/dashboard)

---

## Features
- Dynamic and responsive dashboard for easy navigation  
- Quick access to links, tweets, videos, and documents all in one place  
- Organize resources with categories and tags  
- User account creation and management  
- Lightweight and intuitive interface for efficient content management  

---

## Technologies Used
- **Frontend**: React, TypeScript (TSX)  
- **Backend**: Node.js (Express.js)  
- **Database**: MongoDB  
- **Hosting**: Vercel  

---

## Installation
1. Clone the repository:  
   `git clone https://github.com/SrinjayMitra/brainly.git`

2. Navigate into the project directory:  
   `cd brainly`

3. Install dependencies:  
   Ensure you have `npm` or `yarn` installed. Use the following command to install the required packages:  
   `npm install`  
   or  
   `yarn install`

4. Set up environment variables:  
   Create a `.env` file in the root directory and configure the following environment variables (adjust values as needed):
   
##### REACT_APP_API_URL=your_api_endpoint MONGO_URI=your_mongodb_connection_string SECRET_KEY=your_secret_key  
Replace `your_api_endpoint`, `your_mongodb_connection_string`, and `your_secret_key` with your actual configuration.

6. Start the development server:  
`npm start`  
or  
`yarn start`  
This will run the application in development mode. The default local server is `http://localhost:3000`.

7. Build for production (optional):  
To create an optimized production build, run:  
`npm run build`  
or  
`yarn build`  
The build output will be placed in the `build/` folder.

8. Deploying the build:  
Use a platform like Vercel or Netlify for hosting. Follow platform-specific deployment guides using the production build files from the `build/` folder.

---

## Usage
1. Visit the deployed website: [brainly Dashboard](https://brainly-v1.vercel.app/dashboard)  
2. Create or log into your account.  
3. Explore the dashboard and features, including adding and organizing your links, tweets, videos, documents, and more.

---

## Contributing
Contributions are welcome! Follow these steps to contribute:  
1. Fork the repository.  
2. Create a new branch (`feature/your-feature-name`).  
3. Commit your changes.  
4. Push to your forked repository.  
5. Open a pull request.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
