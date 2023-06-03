const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

const indexHtml = `
<!DOCTYPE html>
<html>
<head>
  <title>My Node.js App</title>
</head>
<body>
  <h1>hello, this is just a test.</h1>
</body>
</html>
`;

fs.writeFile(path.join(publicDir, 'index.html'), indexHtml, (err) => {
  if (err) throw err;
  console.log('index.html file created successfully!');
});

