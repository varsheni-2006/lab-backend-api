const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb+srv://varsheni:varsheni2006@cluster0.zudsl8p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=>console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));
const itemRoutes = require('./routes/itemRoutes');
app.use('/api/items', itemRoutes);
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});