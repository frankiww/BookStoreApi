const express = require('express');

const app = express()
const port = 8000;

const itemsRoutes = require("./routes/itemsRoutes");
const errorHandler = require("./middleware/errorHandler");

app.use(express.json());
app.use('/api/items', itemsRoutes);
app.use(errorHandler);

app.listen(port, async() => {
    console.log(`Server is running on port ${port}`);
})