const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://vidhuvishwak:vidhuvishwak@cluster0.hwrwzwz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
