## Show Me The Money

### Overview

The goal of this project is to build a simple one-page application that displays the Balance Sheet Report from Xero. The project consists of two main parts:

- Backend: Provides an API endpoint to fetch data from the Xero API for the frontend to use.
- Frontend: Displays the Balance Sheet data in a tabular format.

### Technologies Used

#### Frontend

- React (Next.js)
- TypeScript

#### Backend

- Node.js
- TypeScript

Project Structure

```javascript
show-me-money/
│
├── demyst-be/              # Backend application (Node.js, TypeScript)
│   ├── src/
│   ├── .gitignore
│   ├── package.json
│   └── ...
│
├── demyst-fe/              # Frontend application (React, Next.js, TypeScript)
│   ├── src/
│   ├── .gitignore
│   ├── package.json
│   └── ...
│
├── docker-compose.yml      # Docker Compose file to run the project
└── README.md 
```

## Getting Started

### Prerequisites

Ensure you have Docker installed on your machine. If not, you can download it from here.

### Running the Project

To build and run the project, execute the following command in the root directory:

`docker-compose up --build`

This will start both the backend and frontend services. The backend will be accessible at http://localhost:8000, and the frontend will be accessible at http://localhost:3001.

#### Backend

- The backend runs on port 8000 and provides an API endpoint that fetches the Balance Sheet Report data from the mock Xero API.
- As there is only one API endpoint, the logic is kept simple and not separated unnecessarily.

#### Frontend

- The frontend runs on port 3001 and displays the Balance Sheet data in a table.
- The frontend components are not broken down into smaller components unless necessary, as they are not reused multiple times. However, services, types, and components are organized into separate directories for better maintainability.

### Considerations

#### Backend

- Simplicity: Given that there is only a single API endpoint, the logic is straightforward and not separated into multiple modules unnecessarily.
- Error Handling: Basic error handling is implemented to ensure the application behaves predictably under different scenarios.
- Testing: Consideration for unit tests has been made, ensuring the backend is reliable.

#### Frontend

- Component Structure: Components are not broken down into smaller units unless necessary, as they are used only once.
- Code Organization: Services, types, and components are organized into separate directories to improve code readability and maintainability.
- Testing: The frontend is designed with testability in mind, with consideration for unit tests to ensure component reliability.

### Conclusion
This project demonstrates a simple yet effective way to display data from the Xero Balance Sheet API using React, Node.js, and TypeScript. The architecture prioritizes simplicity, maintainability, and testability.