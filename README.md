Employee Management Service
Overview
This project is a full-stack employee management application built using React for the frontend and Spring Boot for the backend. The application allows users to manage employee data efficiently, including adding, updating, and deleting employee records. It demonstrates the integration of modern frontend and backend technologies to deliver a seamless user experience.

Features
* Frontend (React Vite):
o Interactive user interface for managing employee records.
o Form validation for employee details (e.g., name, email).
o Responsive design for desktop and mobile screens.
* Backend (Spring Boot):
o RESTful API for CRUD operations.
o Database integration for persistent data storage.
* Full-Stack Integration:
o Fetch and display employee data dynamically.
o Real-time communication between frontend and backend.

Technologies Used
Frontend:
* React (Vite)
* Axios for HTTP requests
* React Router for navigation
* Bootstrap for styling
Backend:
* Spring Boot
* Spring MVC for REST APIs
* Spring Data JPA for database operations

Database:
* H2 (development) / MySQL (production)

API Endpoints
Employee APIs
* GET /api/employee: Get all employees
* GET /api/employee/{id}: Get employee by ID
* POST /api/employee: Add a new employee
* PUT /api/employee/{id}: Update employee details
* DELETE /api/employee/{id}: Delete an employee

