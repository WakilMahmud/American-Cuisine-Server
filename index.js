const express = require("express");
const app = express();
// const port = process.env.PORT || 3000;
const port = 3000;

// Define routes
app.get("/", (req, res) => {
	res.send("Hello, World!");
});

// Start server
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
