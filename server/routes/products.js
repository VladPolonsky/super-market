const SQL = require('../dbconfig')


const router = require ('express').Router()

router.get('/', async (req,res)=>{
    try {
        const products = await SQL ('SELECT * FROM product ')
        res.send(products)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})
router.post('/add', async (req, res) => {
    const { name, category, price, img } = req.body
    if (!name || !category || !price || !img) {
        return res.status(400).send({ err: "missing some info" })
    }
    try {
        await SQL(`INSERT INTO product (name,category,price,img) VALUES ('${name}','${category}','${price}','${img}')`)
        res.send({ msg: "product added" })
    } catch (err) {
        console.log(err);
        res.sendStatus(500)
    }
})


module.exports = router 
