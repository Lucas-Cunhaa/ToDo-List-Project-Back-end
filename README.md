# ToDo List API – Back-end
This is the back-end of a ToDo List application built with **TypeScript**, **Express**, and **Sequelize ORM**, using a **PostgreSQL** database.

## 📌 This API is responsible for managing core entities like users, lists, and tasks. It performs business logic and ensures data persistence between the front end and the database.

---

## 📦 Technologies & Dependencies

### Back-end
| Technology      | Version   | Description                                                      |
| --------------- | --------- | ---------------------------------------------------------------- |
| **Express**     | ^4.19.2   | Web framework for Node.js                                        |
| **Sequelize**   | ^6.37.3   | Promise-based ORM for Node.js and SQL databases                  |
| **pg**          | ^8.12.0   | PostgreSQL client for Node.js                                    |
| **pg-hstore**   | ^2.3.4    | Serializer for PostgreSQL JSON support in Sequelize              |
| **dotenv**      | ^16.4.5   | Loads environment variables from `.env` file                     |
| **cors**        | ^2.8.5    | Middleware for enabling CORS (Cross-Origin Resource Sharing)     |
| **router**      | ^1.3.8    | Lightweight routing module (note: consider using Express Router) |
| **@types/node** | ^20.14.11 | Type definitions for Node.js                                     |

### Development & Tooling
| Tool                 | Version  | Description                                           |
| -------------------- | -------- | ----------------------------------------------------- |
| **TypeScript**       | ^5.8.3   | Static typing for JavaScript                          |
| **ts-node**          | ^10.9.2  | Execute TypeScript files directly via Node.js         |
| **tsx**              | ^4.16.2  | Fast TypeScript runtime for development               |
| **nodemon**          | ^3.1.4   | Automatically restarts the app when files change      |
| **sequelize-cli**    | ^6.6.2   | Command-line tools for Sequelize (migrations, models) |
| **@types/express**   | ^4.17.21 | Type definitions for Express                          |
| **@types/cors**      | ^2.8.17  | Type definitions for CORS                             |
| **@types/sequelize** | ^4.28.20 | Type definitions for Sequelize                        |

---

## 📁 Project Structure

```bash
📦 root/
├── 📁 src/                         # Main source code of the API
│   ├── 📁 api/                     # Application logic layer
│   │   ├── 📁 controllers/         # HTTP request handlers (controllers)
│   │   │   ├── 📄 listController.ts       # Handles list-related endpoints
│   │   │   ├── 📄 taskController.ts       # Handles task-related endpoints
│   │   │   └── 📄 userController.ts       # Handles user-related endpoints
│   │   ├── 📁 lib/                # Utility and helper modules
│   │   │   ├── 📄 checkData.ts           # Data validation and response handling
│   │   │   ├── 📄 listData.ts            # Utilities for list data
│   │   │   ├── 📄 messages.ts            # Predefined response messages
│   │   │   ├── 📄 taskData.ts            # Utilities for task data
│   │   │   └── 📄 userData.ts            # Utilities for user data
│   ├── 📁 config/                # Configuration files
│   │   ├── 📄 config.js                 # Sequelize environment configuration
│   │   └── 📄 database.ts              # Initializes and exports database connection
│   ├── 📁 database/             # Database access and operations layer
│   │   ├── 📄 listQueries.ts           # Query logic for lists
│   │   ├── 📄 taskQueries.ts           # Query logic for tasks
│   │   └── 📄 userQueries.ts           # Query logic for users
│   ├── 📁 interface/            # TypeScript type definitions
│   │   └── 📄 models.ts                # Interface definitions for app entities
│   ├── 📁 migrations/           # Sequelize migration files (if present)
│   ├── 📁 models/               # Sequelize models
│   │   ├── 📄 index.js                 # Sequelize setup and model import/export
│   │   └── 📄 models.ts                # Model definitions using TypeScript
├── 📄 .env                         # Environment variables
├── 📄 .gitignore                   # Git ignored files and folders
├── 📄 .sequelizerc                 # Sequelize CLI configuration
├── 📄 app.ts                       # Entry point of the API application
├── 📄 package.json                 # Project metadata and dependencies
├── 📄 package-lock.json            # Dependency lock file
├── 📄 README.md                    # Project documentation
├── 📄 routes.ts                    # Route definitions and setup
├── 📄 testenvy.js                  # (Optional) Testing environment file
├── 📄 tsconfig.json                # TypeScript compiler options
```
## 🚀 How to Run locally

### Prerequisites

1. Make sure you have installed:
- Node.js (v16 or newer)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Lucas-Cunhaa/ToDo-List-Project-Back-end.git
```
2. Install all the dependencies:

```bash
npm install
```
3. Configure Environment Variables
Create a .env file in the root directory and configure your environment variables as needed. Example:

```bash
DB_HOST=localhost
DB_PORT=5432
DB_NAME=your_database
DB_USER=your_username
DB_PASSWORD=your_password
```

4. Run Migrations for setup the database (postgres)

```bash
npx sequelize-cli db:migrate
```

5. Start the Application
To run in development mode (with live reload using nodemon):

```bash
npm run dev
```

To run in production mode:

```bash
npm start
```

6. Access the API
By default, the server should be running at:

**http://localhost:3011**



