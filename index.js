const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 5000;

app.use(cors());

// Define routes
app.get("/", (req, res) => {
	res.send("Hello, World! Testing");
});

// Start server
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
