require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const notesRoutes = require("./routes/Notes");
const PythonRoutes = require("./routes/Python_code");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB connected!"))
.catch(err => console.log("Error Connecting to MongoDB", err));

app.use(express.json());
app.use(cors());
app.use("/api/notes", notesRoutes);
app.use("/api/content", PythonRoutes);

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}!`);
});