const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const data = {};

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/get", (req, res) => {
	res.status(200).type("text/plain").send(data);
});

app.post("/store", (req, res) => {
	try {
		data[req.body.i] = req.body.content;
		res.status(200).send(req.body.content);
	} catch {
		res.status(500).send("ERROR");
	}
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
