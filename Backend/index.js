const express = require("express");
const cors = require("cors");
require("./connection")
const BlogModel = require("./model")
const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());


app.post("/add", async (req, res) => {
  try {
    await BlogModel(req.body).save()
    res.send({ message: "data added" })
  } catch (error) {
    console.log(error);
  }
})

app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

app.delete("/del/:id", async (req, res) => {
    try {
        var del = await BlogModel.findByIdAndDelete(req.params.id)
        res.send({ message: "Deleted" })

    } catch (error) {
        console.log(error);

    }
})

app.put("/update/:id", async (req, res) => {
    try {
        var update = await BlogModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send({ message: "Updated", data: update })

    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error updating data" })
    }
})


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
