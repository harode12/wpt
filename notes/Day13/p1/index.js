const express= require('express');
const f = require('fs');
const p = require('path');
const data = require('./MOCK_DATA.json');
const port = 3000;
const app = express();


// app.get('/',(req,res)=>{
// res.send("Hello From Express");
// });

 app.get('/users', (req,res)=> {
    res.json(data);
});

app.get('/users/:id', (req,res) => {
    const id =Number(req.params.id);
   
   console.log(id);
   
    const user =data.find(
        user => user.id ===id
    )
    
   console.log(user.id);
    
    return res.json(user);
       

});

app.get('/users/:email', (req,res) => {
   
   const em =String(req.params.email);
   
    const user1 =data.find(
        user1 => user.email ===em
    )
   console.log(user.id);
    

        return res.json(user1);

});


//req param    string 
app.delete('/users/:id', (req, res) => {
    const id = Number(req.params.id);  // 15
     console.log(id);
    const userIndex = data.findIndex(
        user => user.id === id
    )
    if (userIndex === -1)
        return res.status(404).send('Data not found');

    const deletedItem = data.splice(userIndex, 1)[0];
    //return res.json("Kile");
    return res.json({ 
        message: 'User deleted successfully',
        deletedUser: deletedItem   
    });
});

 app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/adduser', (req, res) => {
    const data1 = req.body;// 
    console.log("data " + data1);
    data.push(
        { ...data1, id: data.length + 1 });
    f.writeFile('./MOCK_DATA.json',
        JSON.stringify(data), (err) => {
            console.log(err)
        });
   // return res.json("data added ");
    return res.json({
        message: 'User added successfully',
        
    });
})

app.get('/aboutus', (req, res) => {
    const t = p.join(__dirname, 'aboutus.html');
    console.log(t);
    res.sendFile(t);
});

    app.listen(port)
    console.log("from start script");



