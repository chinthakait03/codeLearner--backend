const express = require("express");
const app = express();
const db = require("./database.js");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const HTTP_PORT = 7000;

app.listen(HTTP_PORT, () => {
    console.log("Server running on port", HTTP_PORT);
});


app.get("/api/codebook/:codebookNumber", (req, res, next) => {
    try {
        const { codebookNumber } = req.params;
        const sql = `SELECT * FROM codebook${codebookNumber}`;
        const params = [];

        db.all(sql, params, (err, rows) => {
            if (err) {
                res.status(400).json({ error: err.message });
                return;
            }

            res.json({

                data: rows
            });
        });
    } catch (err) {
        res.status(400).send(err);
    }
});
