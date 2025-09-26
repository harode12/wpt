const express = require('express')
const userData = require('./MOCK_DATA.json')
const path = require('path')
const PORT = 8080
const app = express()

app.get('/', (req, res) => {
    res.send("👋 Welcome to the world of Express JS 😊");
})
//get operation by users
app.get('/users', (req, res) => {
    res.json(userData);
})
//get operation by id only
app.get('/users/:id', (req, res) => {
    const userId = Number(req.params.id)
    const user = userData.find(
        user => user.id === userId
    )
    if (user) {
        res.json(user)
    }
    else {
        res.status(404).json({ error: "User not Found!!!!!!!!!!" })
    }
}).delete('/users/:id', (req, res) => {
    const delId = Number(req.params.id)
    const userdelID = userData.findIndex(
        userdelID => userdelID.id === delId
    )

    if ((userdelID === -1)) {
        return res.status(404).json({ error: "User not Found!!!!!!!!!!" });
    }

    const userDeletedData = userData.splice(userdelID, 1)[0]
    /*
        userData: [{ id: 1, name: "Ajay" }, { id: 3, name: "Charan" }]
        userDeletedData = { id: 2, name: "Ram" }
    */
    res.json({ message: "User deleted", userdelID: userDeletedData });

})
// get operation by id & email
app.get('/users/:id/:email', (req, res) => {
    const useriD = parseInt(req.params.id)
    const userEmail = req.params.email

    console.log('users');
    const user1 = userData.find(
        user1 => user1.id === useriD && user1.email === userEmail
    )
    if (user1) {
        res.json(user1)
    } else {
        res.status(404).json({ error: "User not Found!!!!!!!!!!" })
    }
})

app.get('/usersdata/:id/:email', (req, res) => {
    const useriD1 = parseInt(req.params.id)
    const userEmail1 = req.params.email
    const userById = userData.find(userById => userById.id === useriD1);
    const userByEmail = userData.find(userByEmail => userByEmail.email === userEmail1);
    console.log(userById);
    const result = {
        userById: userById || null,
        userByEmail: userByEmail || null
    }
    if (userById || userByEmail) {
        res.json(result)
    } else {
        res.status(404).json({ error: "User not Found!!!!!!!!!!" })
    }
})
// delete operation
//app.

app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
})