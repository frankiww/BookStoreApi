const express = require('express');

const app = express()
const port = 8000;

const itemsRoutes = require("./routes/itemsRoutes");
const errorHandler = require("./middleware/errorHandler");
const requestId = require("./middleware/requestId");
const logger = require("./middleware/logger");
const timing = require("./middleware/timing");

app.use(express.json());

app.use(requestId);
app.use(timing);
app.use(logger);
app.use('/api/items', itemsRoutes);
app.use(errorHandler);

app.listen(port, async() => {
    console.log(`Server is running on port ${port}`);
})