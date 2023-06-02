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
  <h1>test.</h1>
</body>
</html>
`;

fs.writeFileSync(path.join(publicDir, 'index.html'), indexHtml);

console.log('Index.html file created successfully!');
