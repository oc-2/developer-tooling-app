const http = require("http");

const hostname = "0.0.0.0";
const port = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "no-cache");
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Developer Tooling Template</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background: #f5f5f5;
        }
        .container {
            background: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333;
            margin-top: 0;
        }
        .feature {
            padding: 10px;
            margin: 10px 0;
            background: #f0f9ff;
            border-left: 4px solid #3b82f6;
            border-radius: 4px;
        }
        code {
            background: #e5e7eb;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'Courier New', monospace;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 Developer Tooling Template</h1>
        <p>This is a blank starter repository configured with modern JavaScript development tools.</p>
        
        <h2>Configured Tools</h2>
        <div class="feature">
            <strong>✓ ESLint</strong> - Code linting with React hooks and React Refresh plugins
            <br>Run: <code>npm run lint</code>
        </div>
        <div class="feature">
            <strong>✓ Prettier</strong> - Code formatting
            <br>Run: <code>npm run format</code>
        </div>
        <div class="feature">
            <strong>✓ Commitlint</strong> - Conventional commit message enforcement
        </div>
        <div class="feature">
            <strong>✓ Husky</strong> - Git hooks for automated checks
        </div>
        <div class="feature">
            <strong>✓ Lint-staged</strong> - Run linters on staged files
        </div>
        
    </div>
</body>
</html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
