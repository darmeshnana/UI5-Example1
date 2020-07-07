const port = 8080;

let express = require('express');
let app = express();

app.use(express.static(__dirname + "/app"));             //__dir and not _dir
app.listen(port);