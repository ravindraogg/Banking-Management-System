# Banking Management System

## Overview

The Banking Management System is a secure web application designed to manage user accounts, transactions, and various banking services. Built using **Java** and **Spring Boot** for the backend, and **React** for the frontend, this system applies Object-Oriented Programming (OOP) principles, data structures, and operating systems concepts such as multithreading and process scheduling.

- The **backend** has been containerized using Docker and deployed on **Azure App Service**.
- The **frontend** is deployed on **Netlify**. 
```
https://pluto-banking.netlify.app/
```

## Features

- **User Registration & Login**: Allows customers to create accounts, log in, and manage their information securely.
- **Account Management**: Admins can create and manage user accounts, including setting account status and type.
- **Transaction Management**: Users can transfer funds, view transaction history, and manage transactions.
- **Loan Processing**: Admins can approve or reject loan applications using scheduling and multithreading.
- **Security**: Implements secure access control for both users and admins.

## File Structure

```plaintext
banking-management-system/
├── backend/                          # Backend source code
│   ├── src/
│   │   ├── main/
│   │   │   └── java/
│   │   │       └── com/
│   │   │           └── yourpackage/
│   │   │               ├── Application.java         # Main entry point
│   │   │               ├── controller/
│   │   │               │   ├── AdminController.java # Admin API controller
│   │   │               │   ├── UserController.java  # User API controller
│   │   │               ├── model/
│   │   │               │   └── Account.java         # User account model
│   │   │               ├── service/
│   │   │               │   └── AccountService.java  # Service for business logic
│   │   │               ├── repository/
│   │   │               │   └── AccountRepository.java # Repository interface
│   │   │               ├── config/
│   │   │               │   └── WebConfig.java       # CORS and global configurations
│   ├── resources/
│   │   └── application.properties    # Database and application config
├── frontend/                         # Frontend source code
│   ├── src/
│   │   ├── components/
│   │   │   └── Login.js              # Login page component
│   │   ├── App.js                   # Main app component
│   │   ├── index.js                 # React entry point
│   │   └── styles/                  # CSS/SCSS files for styling
├── docker/                           # Docker files for containerization
│   ├── Dockerfile                    # Dockerfile for backend
│   ├── docker-compose.yml            # Docker Compose configuration
├── azure/                            # Azure configuration for deployment
│   ├── azure-pipelines.yml          # Azure Pipeline for CI/CD
├── netlify/                          # Netlify configuration for frontend
│   ├── netlify.toml                  # Netlify configuration file
├── .gitignore                        # Git ignore file
└── README.md                         # Project documentation
```

## Setup Instructions

### Backend Setup

1. **Clone the repository**:
    ```
    git clone https://github.com/ravindraogg/Banking-Management-System.git
    ```

2. **Navigate to the backend directory**:
    ```
    cd backend/osdsa/osdsa
    ```

3. **Build and run the backend using Docker**:
    ```
    docker build -t banking-backend .
    docker run -p 8080:8080 banking-backend
    ```
   - The backend will be available at `http://localhost:8080`.

### Frontend Setup

1. **Navigate to the frontend directory**:
    ```
    cd frontend
    ```

2. **Install the dependencies**:
    ```
    npm install
    ```

3. **Run the frontend locally**:
    ```
    npm start
    ```
   - The frontend will be available at `http://localhost:3000`.

## Deployment

### Backend Deployment

- The backend is deployed on **Azure App Service**.
- The backend Docker container is deployed via **CI/CD** pipelines.

### Frontend Deployment

- The frontend is hosted on **Netlify**.
- The build is automatically deployed after each commit to the repository.

## Technologies Used

- **Backend**: Java, Spring Boot, Docker, Azure
- **Frontend**: React, Netlify
- **Database**: MongoDB
- **CI/CD**: Azure Pipelines, Docker

## How to Contribute

1. **Fork the repository**.
2. **Create a new branch** for your feature or bug fix.
3. **Make your changes** and commit them.
4. **Push your changes** to your fork.
5. **Open a pull request** to the `main` branch.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries or issues, please contact [ravindraogg](https://github.com/ravindraogg).
