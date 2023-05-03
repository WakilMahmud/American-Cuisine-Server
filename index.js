const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const allChef = require("./data/allChef.json");
const chefRecipes = require("./data/chefRecipes.json");

app.use(cors());

// Define routes
app.get("/", (req, res) => {
	res.send(allChef);
});

app.get("/recipes/:id", (req, res) => {
	const id = req.params.id;
	const selectedRecipes = chefRecipes.find((recipe) => recipe.chef_id == id);
	res.send(selectedRecipes);
});

// Start server
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
