const express = require("express");

const routes = require("./routes");

const port = 3333;

require("./database/index")


const app = express();
app.use(express.json());

app.use(routes);

app.listen(port,() => console.log(`Server runnig on ${port}`));