const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let lastFetch = "";

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/get", (req, res) => {
	res.status(200).type("text/plain").send(lastFetch);
});

app.post("/store", (req, res) => {
	try {
		lastFetch = req.body.content;
		res.status(200).send(req.body.content);
	} catch {
		res.status(500).send("ERROR");
	}
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
