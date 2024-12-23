const express=require('express')
const app = express(); 
const PORT = 4000;
const add=require('./utils')
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World'); 
});

app.get('/add/:a/:b', (req, res) => {
    const { a, b } = req.params; 
    res.json({ sum: add(a, b) }); 
});


if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}
module.exports = app ;