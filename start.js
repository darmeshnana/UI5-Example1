const port = 8080;

let express = require('express');
let app = express();

app.use(express.static(__dirname));             //__dir and not _dir
app.listen(port);