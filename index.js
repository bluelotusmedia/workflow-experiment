const express = require('express');
const app = express();
const path = require('path');

// Create a new HTML page
const indexHtml = `
<!DOCTYPE html>
<html>
<head>
<title>My Website</title>
</head>
<body>
<h1>Welcome to my website!</h1>
</body>
</html>
`;

// Write the HTML page to the public folder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Listen for requests on port 3000
app.listen(3000);
