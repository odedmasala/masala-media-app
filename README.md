# Masala Media - Social Network

Welcome to Masala Media, a social networking platform built using the MERN (MongoDB, Express, React, Node.js) stack and following the MVC (Model-View-Controller) architecture.
## Screenshot
 ![masala-media](https://user-images.githubusercontent.com/105584185/204256264-fbd75a5b-05ae-4b75-a0a3-b2ca06fd9662.png)


 ## go live production https://masala-media-app.vercel.app/
 
## Project Description

This project was built as a personal learning exercise to gain experience in full-stack web development. The goal was to create a functioning social networking platform with features such as user authentication, posts and comments, and a feed of posts from friends.

To achieve this, the application was built using the MERN stack and following the MVC architecture. This allowed for a separation of concerns between the data (Model), user interface (View), and application logic (Controller). The server is built in a JS file named `server` and is built using the Express.js framework.

## Notable Features

- User authentication: Users are able to create accounts and log in to the application using formik and yup for form validation. To access the services on the server, JSON Web Tokens (JWT) are used for secure authentication.

- Posts and comments: Users are able to create posts and leave comments on other users' posts. This allows for the creation of a dynamic feed of content within the application.

- Feed of posts from friends: In addition to being able to view all posts within the application, users are also able to see a feed of posts from just their friends. This allows for a more personalized and relevant viewing experience.

## Design

The design of the application was created using Material UI, a popular
design framework for React applications. This provided a modern and cohesive look and feel throughout the application.

## Possible Improvements

There are always opportunities for improvement in any project. Some possible areas for improvement in Masala Media could include:

- Adding more features: There are many additional features that could be added to the application, such as the ability to send private messages, create groups, or have a more robust profile page.

- Improving performance: The application could be optimized for faster loading times and better overall performance. This could be achieved through techniques such as code optimization and the use of performance-enhancing tools.

- Adding tests: Adding automated tests to the application would allow for the detection of any issues or regressions as the codebase grows and evolves.

- Improving the design: The design of the application could be further improved and refined to provide a better user experience. This could involve iterating on the current design or exploring new design frameworks.

## Getting Started

To get started with Masala Media, you will need to have the following prerequisites installed on your machine:

- Node.js

In addition, you will need to have an account with MongoDB Atlas online to host the database for the application.

Once you have these prerequisites installed and an account set up with MongoDB Atlas, you can follow the steps below to set up the application:

1. Clone the repository to your local machine using `git clone https://github.com/odedmasala/masala-media-app.git`.
2. Navigate to the root directory of the project and install the dependencies for both the server and client using `npm install` in the `server` and `client` folders respectively.
4. Open a new terminal and split it, in each split terminal run one of the server and client files and run both files and start the application using `npm start`.
5. The application should now be running on `http://localhost:3000` and the server in `http://localhost:8001` or port you can Choose.

## Contributing

If you are interested in contributing to the Masala Media project, please follow these guidelines:

- Fork the repository and create a new branch for your changes.
- Make your changes and commit them to your branch.
- Open a pull request and provide a clear and concise description of your changes.
