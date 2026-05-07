# Viva Questions + Answers

## Practical: **Create NodeJS Application Which Serves Static Website**

---

# 1. Basic Viva Questions

### Q1. What is Node.js?

Node.js is a JavaScript runtime environment used to run JavaScript outside the browser.

---

### Q2. Why is Node.js used?

* Fast execution
* Non-blocking I/O
* Event-driven architecture
* Good for scalable web applications

---

### Q3. What is npm?

npm (Node Package Manager) is used to install Node.js packages/modules.

---

### Q4. What is Express.js?

Express.js is a lightweight Node.js framework used for building web applications and APIs.

---

### Q5. What is a static website?

A static website contains fixed content like HTML, CSS, JS files that do not change dynamically.

---

### Q6. What is meant by serving static files?

Providing HTML, CSS, images, and JavaScript files directly to the browser.

---

### Q7. Which module is commonly used to serve static files?

`express.static()`

---

### Q8. What is middleware in Express?

Middleware is a function that executes between request and response.

---

### Q9. What is localhost?

Localhost refers to the current computer/server.
Usually runs on:

```bash
http://localhost:3000
```

---

### Q10. What is a port?

A communication endpoint used by the server.

Example:

```js
app.listen(3000)
```

---

# 2. Code Related Viva Questions

---

### Q11. Why do we use `require('express')`?

To import the Express module.

Example:

```js
const express = require('express');
```

---

### Q12. What does `app.listen()` do?

Starts the server and listens on a port.

Example:

```js
app.listen(3000);
```

---

### Q13. What is `__dirname`?

It gives the current directory path of the project.

---

### Q14. Why use `path.join()`?

To create proper file paths compatible with all operating systems.

---

### Q15. What does this code do?

```js
app.use(express.static('public'));
```

It serves static files from the `public` folder.

---

### Q16. What happens if index.html exists inside public folder?

It automatically opens when visiting:

```bash
localhost:3000
```

---

### Q17. Difference between GET and POST?

| GET            | POST            |
| -------------- | --------------- |
| Retrieve data  | Send data       |
| Visible in URL | Hidden from URL |

---

### Q18. What is package.json?

It stores:

* project details
* dependencies
* scripts

---

### Q19. How to initialize Node project?

```bash
npm init -y
```

---

### Q20. How to install Express?

```bash
npm install express
```

---

# 3. Practical Execution Questions

---

### Q21. Command to run Node app?

```bash
node server.js
```

---

### Q22. How to stop server?

Press:

```bash
CTRL + C
```

---

### Q23. How to check Node version?

```bash
node -v
```

---

### Q24. How to check npm version?

```bash
npm -v
```

---

### Q25. What folder usually stores static files?

```bash
public/
```

---

# 4. File Structure Questions

---

### Q26. Typical project structure?

```bash
project/
│
├── public/
│   ├── index.html
│   ├── style.css
│
├── server.js
├── package.json
```

---

### Q27. Why separate public folder?

To organize frontend static resources.

---

# 5. Error Based Viva Questions

---

### Q28. What happens if port already in use?

Server throws:

```bash
EADDRINUSE
```

---

### Q29. What if Express module not installed?

Error:

```bash
Cannot find module 'express'
```

---

### Q30. Solution for above error?

Install Express:

```bash
npm install express
```

---

# 6. Theory Questions

---

### Q31. Is Node.js single-threaded?

Yes, but uses event loop for concurrency.

---

### Q32. What is event-driven programming?

Execution based on events like requests and clicks.

---

### Q33. Advantages of Node.js?

* Fast
* Lightweight
* Scalable
* JavaScript everywhere

---

### Q34. What is backend development?

Server-side programming handling requests and responses.

---

### Q35. Difference between frontend and backend?

| Frontend       | Backend          |
| -------------- | ---------------- |
| User interface | Server logic     |
| HTML/CSS/JS    | Node.js/PHP/Java |

---

# 7. Important Code Questions

---

## Q36. Write code to create server

```js
const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log("Server running");
});
```

---

## Q37. Code to serve static website

```js
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
```

---

## Q38. HTML code example

```html
<!DOCTYPE html>
<html>
<head>
    <title>Static Website</title>
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>
```

---

# 8. Advanced Viva Questions

---

### Q39. What is REST API?

A method for communication between client and server using HTTP methods.

---

### Q40. What are HTTP methods?

* GET
* POST
* PUT
* DELETE

---

### Q41. Difference between synchronous and asynchronous?

| Synchronous | Asynchronous |
| ----------- | ------------ |
| Blocking    | Non-blocking |

---

### Q42. What is callback function?

Function executed after another function completes.

---

### Q43. What is middleware execution order?

Top to bottom.

---

# 9. Frequently Asked Examiner Questions

---

### Q44. Why use Express instead of pure Node.js?

Express simplifies routing and server creation.

---

### Q45. Can Node.js handle multiple users?

Yes, using asynchronous architecture.

---

### Q46. Which browser can open localhost?

Any browser:

* Chrome
* Safari
* Edge
* Firefox

---

### Q47. Why use `nodemon`?

Automatically restarts server after file changes.

Install:

```bash
npm install -g nodemon
```

Run:

```bash
nodemon server.js
```

---

### Q48. Difference between Node.js and JavaScript?

| JavaScript | Node.js             |
| ---------- | ------------------- |
| Language   | Runtime environment |

---

### Q49. What is routing?

Handling different URLs.

Example:

```js
app.get('/')
```

---

### Q50. Can Node.js connect database?

Yes:

* MongoDB
* MySQL
* PostgreSQL

---

# 10. MOST IMPORTANT LAST-MINUTE QUESTIONS

---

## Very Common Viva Questions

### 1. Why did you use Express?

To simplify server creation.

---

### 2. What is static content?

Fixed files like HTML/CSS/images.

---

### 3. What does `express.static()` do?

Serves static files.

---

### 4. Which port did you use?

Usually:

```bash
3000
```

---

### 5. How did you run project?

```bash
node server.js
```

---

### 6. Which command installs Express?

```bash
npm install express
```

---

### 7. What is package.json?

Project configuration file.

---

### 8. Difference between client and server?

| Client        | Server         |
| ------------- | -------------- |
| Sends request | Sends response |

---

# One Complete Working Code (Most Asked)

## server.js

```js
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
```

---

## public/index.html

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
</head>
<body>

<h1>Welcome to Static Website</h1>

</body>
</html>
```

---

# Important Commands

```bash
npm init -y
```

```bash
npm install express
```

```bash
node server.js
```

---

# SUPER IMPORTANT EXAM QUESTIONS

### Explain flow of working:

1. Browser sends request
2. Node server receives request
3. Express serves static files
4. Browser displays webpage

---

### Why Node.js is fast?

Because of:

* Event loop
* Non-blocking architecture

---

### Which protocol used?

HTTP protocol.

  
