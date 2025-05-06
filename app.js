const express = require('express');
const app = express();
const PORT = 3000;


function hello(name) {
  return "Minu lemmik majustus on " + name + "!";
}

app.get('/', (req, res) => {
res.json({"text": hello("Terimisu")});
});

if (require.main === module) {
app.listen(PORT, () => {
console.log(`App listening at http://localhost:${PORT}`);
});
}
module.exports = { app, hello };
