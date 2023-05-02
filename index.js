const express = require("express");
const app = express();
const cors = require("cors");
const allChef = require("./data/allChef.json");

const port = process.env.PORT || 5000;

app.use(cors());

// Define routes
app.get("/", (req, res) => {
	res.send("Chef Available");
});

app.get("/allChef", (req, res) => {
	res.send(allChef);
});

// Start server
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
