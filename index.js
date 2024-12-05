const express=require('express')
const app = express(); 

app.get('/', (req, res) => {
    res.send('Hello World'); 
});

function add(a, b) {
    if (isNaN(a)) return "Invalid Input";
    if (isNaN(b)) return "Invalid Input";
    return parseInt(a) + parseInt(b);
}

app.get('/add/:a/:b', (req, res) => {
    const { a, b } = req.params; 
    res.json({ sum: add(a, b) }); 
});


// const PORT = 4000; 
// app.listen(PORT, (req,res) => {
    //     console.log(`Server is running on http://localhost:${PORT}`);
    // });
    
    if (process.env.NODE_ENV !== 'test') {
        const PORT = 4000;
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    }
    module.exports = { add, app };