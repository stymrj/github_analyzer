# GitHub Profile Analyzer

A backend service built with Node.js, Express.js, MySQL, and the GitHub Public API.

This project analyzes GitHub profiles by fetching public user data, generating useful insights from repositories, storing the results in a MySQL database, and exposing REST APIs to access the analyzed data.

## Features

- Fetch GitHub profile data using username
- Analyze repository statistics
- Store profile insights in MySQL
- Retrieve all analyzed profiles
- Retrieve a single analyzed profile
- RESTful API architecture
- Error handling and validation

## Tech Stack

- Node.js
- Express.js
- MySQL
- GitHub REST API
- Axios
- Dotenv

---

## Project Structure

```bash
github_analyzer/
│
├── controller/
│   └── profileController.js
│
├── routes/
│   └── profileRoutes.js
│
├── services/
│   └── githubService.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/stymrj/github_analyzer.git
cd github_analyzer
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the root directory:

```env
PORT=8080

DB_HOST=localhost
DB_USER=root
DB_PASS=your_password
DB_NAME=github_analyzer
```

### Start Server

```bash
npm run dev
```

Server will run on:

```bash
http://localhost:8080
```

---

## Database Schema

```sql
CREATE TABLE github_profiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE,
    name VARCHAR(255),
    followers INT,
    following INT,
    public_repos INT,
    total_stars INT,
    total_forks INT,
    top_repository VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## API Endpoints

### Analyze GitHub Profile

```http
GET /api/profile/:username
```

Example:

```http
GET /api/profile/torvalds
```

Response:

```json
{
  "success": true,
  "username": "torvalds",
  "totalStars": 12345,
  "totalForks": 6789
}
```

---

### Get All Profiles

```http
GET /api/profile
```

Returns all analyzed profiles stored in the database.

---

### Get Single Profile

```http
GET /api/profile/:username
```

Returns the analyzed data for a specific GitHub user.

---

## How It Works

1. User provides a GitHub username.
2. The application fetches profile data from the GitHub API.
3. Repository statistics are analyzed.
4. Insights are stored in MySQL.
5. APIs return stored analytics data.

---

## Future Improvements

- Pagination support
- Search and filtering
- Swagger API documentation
- GitHub Personal Access Token support
- Profile re-analysis endpoint
- Docker support
- Unit testing

---

## Author

Satyam Raj

GitHub: https://github.com/stymrj
LinkedIn: https://www.linkedin.com/in/satyamraj1/