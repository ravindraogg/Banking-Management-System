# Banking Management System

## Overview

The Banking Management System is a secure web application designed to manage user accounts, transactions, and various banking services. Built using **Java** and **Spring Boot** for the backend, and **React** for the frontend, this system applies Object-Oriented Programming (OOP) principles, data structures, and operating systems concepts such as multithreading and process scheduling.

- The **backend** has been containerized using Docker and deployed on **Azure App Service**.
- The **frontend** is deployed on **Netlify**. 
```
https://pluto-banking.netlify.app/
```


## Table of Contents

1. [Features](#features)
2. [File Structure](#file-structure)
3. [Setup Instructions](#setup-instructions)
    - [Backend Setup](#backend-setup)
    - [Frontend Setup](#frontend-setup)
4. [Deployment](#deployment)
    - [Backend Deployment](#backend-deployment)
    - [Frontend Deployment](#frontend-deployment)
5. [Technologies Used](#technologies-used)
6. [Preview](#webapp-preview)
7. [How to Contribute](#how-to-contribute)
8. [License](#license)
9. [Contact](#contact)


## Features

- **User Registration & Login**: Allows customers to create accounts, log in, and manage their information securely.
- **Account Management**: Admins can create and manage user accounts, including setting account status and type.
- **Transaction Management**: Users can transfer funds, view transaction history, and manage transactions.
- **Loan Processing**: Admins can approve or reject loan applications using scheduling and multithreading.
- **Security**: Implements secure access control for both users and admins.


## File Structure

```plaintext
backend/
 ├── src/
 │    ├── main/
 │    │    ├── java/
 │    │    │    └── com/
 │    │    │        └── banking/
 │    │    │            ├── Application.java          # Spring Boot main application
 │    │    │            ├── controller/
 │    │    │            │    ├── AdminController.java # Admin-related endpoints
 │    │    │            │    ├── CustomerController.java # Customer-related endpoints
 │    │    │            ├── model/
 │    │    │            │    ├── Account.java         # Account details
 │    │    │            │    ├── Customer.java        # Customer details
 │    │    │            │    ├── Loan.java            # Loan details
 │    │    │            │    ├── Transaction.java     # Transaction details
 │    │    │            ├── repository/
 │    │    │            │    ├── AccountRepository.java
 │    │    │            │    ├── LoanRepository.java
 │    │    │            │    ├── TransactionRepository.java
 │    │    │            ├── service/
 │    │    │            │    ├── AccountService.java
 │    │    │            │    ├── LoanService.java
 │    │    │            │    ├── TransactionService.java
 │    │    │            ├── util/
 │    │    │            │    └── Scheduler.java       # Loan processing and multithreading
 │    │    │            ├── config/
 │    │    │                 └── SecurityConfig.java  # Security settings
 │    └── resources/
 │         └── application.properties                 # MongoDB connection details
 └── Dockerfile
 └── netlify.yml
 └── pom.xml                                          # Maven dependencies for backend

frontend/
src/
├── admin/                   # Admin-specific features
│   ├── components/          # Reusable components for Admin
│   │   ├── AdminHeader.jsx
│   │   ├── AdminSidebar.jsx
│   │   └── AdminFooter.jsx
│   ├── pages/               # Admin pages
│   │   ├── AdminDashboard.jsx
│   │   ├── ViewCustomers.jsx
│   │   ├── ManageBranches.jsx
│   │   └── ManageManagers.jsx
│   └── admin.css            # Admin-specific styles
├── user/                    # User-specific features
│   ├── components/          # Reusable components for User
│   │   ├── UserHeader.jsx
│   │   ├── UserSidebar.jsx
│   │   └── UserFooter.jsx
│   ├── pages/               # User pages
│   │   ├── UserDashboard.jsx
│   │   ├── AccountDetails.jsx
│   │   ├── TransferFunds.jsx
│   │   ├── TransactionHistory.jsx
│   │   ├── LoanApplication.jsx
│   │   └── ProfileUpdate.jsx
│   └── user.css             # User-specific styles
├── App.jsx                  # Main app file
├── index.css                # Global styles
└── main.jsx                 # Entry point
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

- **Backend**: Java, Spring-Boot, Docker, Azure
- **Frontend**: React, Netlify
- **Database**: MongoDB
- **CI/CD**: Azure Pipelines, Docker


## WebApp Preview
1. **Home Page**.
<img src="https://github.com/user-attachments/assets/84aff084-fe3d-4cb5-b021-0614a6722dd7" alt="homepage" style="border-radius: 3px; width: 100%; max-width: 600px;">

2. **Create Account Page**.
<img src="https://github.com/user-attachments/assets/a701f92a-62d0-4d72-b271-685526ee18a2" alt="account_create" style="border-radius: 3px; width: 100%; max-width: 600px;">

3. **User Dashboard**.
<img src="https://github.com/user-attachments/assets/a966c437-19a2-4c9c-927a-0fcc37326d50" alt="user_dashboard" style="border-radius: 3px; width: 100%; max-width: 600px;">

4. **Account Details Page**.
<img src="https://github.com/user-attachments/assets/2221c848-bd3f-45ea-ba70-b0ee38b8f91a" alt="account_details" style="border-radius: 3px; width: 100%; max-width: 600px;">

5. **Admin Loan Review Page**.
<img src="https://github.com/user-attachments/assets/7b5b5859-47c3-4e3e-b851-4ea03cd9195b" alt="admin_loan" style="border-radius: 3px; width: 100%; max-width: 600px;">


## How to Contribute

1. **Fork the repository**.
2. **Create a new branch** for your feature or bug fix.
3. **Make your changes** and commit them.
4. **Push your changes** to your fork.
5. **Open a pull request** to the `main` branch.


## Contributors

Thank you to the amazing contributors who made this project possible:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/ravindraogg">
        <img src="https://avatars.githubusercontent.com/u/149950829?v=4" width="100px;" alt="Ravindra S" style="border-radius: 50%; overflow: hidden;" />
        <br /><sub><b>Ravindra S</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/PanatiNitesh">
        <img src="https://avatars.githubusercontent.com/u/134051960?v=4" width="100px;" alt="Nitesh" style="border-radius: 50%; overflow: hidden;" />
        <br /><sub><b>Nitesh</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Pooja-CG">
        <img src="https://avatars.githubusercontent.com/u/144938646?v=4" width="100px;" alt="Pooja C G" style="border-radius: 50%; overflow: hidden;" />
        <br /><sub><b>Pooja C G</b></sub>
      </a>
    </td>
  </tr>
</table>


## License

This project is licensed under the [MIT License](LICENSE).


## Contact

For any inquiries or issues, please contact [ravindraogg](https://github.com/ravindraogg).
