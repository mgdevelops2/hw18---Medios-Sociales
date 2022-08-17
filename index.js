const express = require('express');
const db = require('./config/connections');
const routes = express.Router();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended:true}));
app.use(express.join());
app.use(routes);

db.once('open', ()=> {
    app.listen(PORT, ()=> {
        console.log(`API server running on port ${PORT}`);
    });
});