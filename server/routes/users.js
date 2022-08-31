const SQL = require('../dbconfig')


const router = require('express').Router()

router.post('/register', async (req, res) => {
    const { name,lname,username,id,password,street,city } = req.body
    if (!username || !password) {
        return res.status(400).send({ err: "missing username or password" })

    }
    try {
        const users = await SQL('SELECT * FROM users ')
        if (users.some(user => user.username == username)) {
            return res.status(400).send({ err: "username already taken" })
        } else {
            await SQL(`INSERT INTO users (name,lname,username,id,password,street,city,role) VALUES ('${name}','${lname}','${username}','${id}','${password}','${street}','${city}','0')`)

            res.status(200).send({ msg: "new user created" });

        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500)
    }
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
        return res.status(400).send({ err: "missing username or password" })
    }
    try {
        const users = await SQL('SELECT * FROM users ')
        let user = {}
        if ((user = users.find(u => u.username == username && u.password == password))) {
            req.session.username = user.username
            req.session.role = user.role[0]
          
            res.status(200).send({ msg: "Welcome and Happy shopping " + username, userrole:user.role })

        } else {
            res.status(400).send({ err: "wrong username or password" })
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500)
    }


})

module.exports = router