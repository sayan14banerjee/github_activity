# 📡 GitHub Activity CLI

A simple command-line tool to fetch and display recent GitHub activity for any user — built using **Node.js** and **Python**, with **no external libraries**.

---

## 🚀 Features

- Fetch recent public GitHub activity  
- Pure **Node.js (`https`)** and **Python (`urllib`)**  
- No external dependencies  
- User-friendly CLI  
- Handles errors (invalid username, API failures, missing fields)  
- Supports multiple event types (Push, Issues, Stars, Forks, PRs, Create events, etc.)

---

## 📦 Installation

### **Node.js Version**
#### Run directly with Node:

```bash
node github_activity.js <username>
Python Version
Run using Python:
```
```bash
python github_activity.py <username>
Optionally make both files executable (Mac/Linux):
```
```bash
chmod +x github_activity.js
chmod +x github_activity.py
```
## 🕹️ Usage
### Node.js Example
```bash
node github_activity.js sayan14banerjee
```
### Python Example
```bash
python github_activity.py sayan14banerjee
```
### Example Output

Recent activity by sayan14banerjee:

- Created a new branch in sayan14banerjee/github_activity
- Pushed 0 commits to sayan14banerjee/Sayan-event-talks-app
- Created a new branch in sayan14banerjee/Sayan-event-talks-app
- Pushed 0 commits to sayan14banerjee/movie-Recommendation-System
- Pushed 0 commits to sayan14banerjee/movie-Recommendation-System
- Pushed 0 commits to sayan14banerjee/movie-Recommendation-System
- Pushed 0 commits to sayan14banerjee/movie-Recommendation-System
- Pushed 0 commits to sayan14banerjee/movie-Recommendation-System
- Pushed 0 commits to sayan14banerjee/edochub
- opened a pull request in Rick01bhatta/edochub
- Created a new branch in sayan14banerjee/edochub
- Forked sayan14banerjee/edochub
- Pushed 0 commits to sayan14banerjee/codveda-python-tasks

## 🛠️ Technologies Used
1.  Node.js Implementation
    - Built using https (native module)
    - Safe JSON parsing

    - Handles API rate limit & missing fields gracefully

2. Python Implementation
    - Uses built-in urllib.request

    - JSON parsing with standard library json

    - Robust error handling

    - 🔗 GitHub API Endpoint
This tool uses the public GitHub events API:
```bash 
https://api.github.com/users/<username>/events
 ```
Example:

 
https://api.github.com/users/sayan14banerjee/events

### ⚠️ Error Handling
The CLI handles common errors, including:

- ❌ User not found

- ❌ API Error — Status: 403

- ❌ Error: GitHub returned invalid JSON

- Network errors

- Missing GitHub event fields

### 📁 Project Structure
```bash
 
github_activity/
│
├── github_activity.js      # Node.js CLI
├── github_activity.py      # Python CLI
└── README.md               # Documentation
```
### 💡 Future Improvements (Optional)
- Global CLI installation via npm / pip

- Colorful output

- Pagination for more than 30 events

- Configurable output format

- Fetch starred repos, commits, PR details

### Project URL:
    https://github.com/sayan14banerjee/github_activity

### 🧑‍💻 Author
Sayan Banerjee
GitHub: https://github.com/sayan14banerjee

#### ⭐️ Support
If you like this project, don't forget to star the repo!
