const express=require('express')
const bodyParser=require('body-parser')
const app=express()
const cors=require('cors')
const bearertoken=require('express-bearer-token')


const PORT=5000
app.use(cors())//database bisa diakses oleh siapapun
app.use(bodyParser.json())//buat user kirim data ke server
app.use(bodyParser.urlencoded({extended:false}))//buat user kirim data ke server
app.use(express.static('public'))
app.use(bearertoken())

const {authRouters, testRouters } = require('./routers')

app.get('/',(req, res)=>{
    return res.send('<h1>Selamat Datang</h1>')
})

app.use('/users', authRouters)
app.use('/tester', testRouters)



app.listen(PORT, ()=>console.log('server jalan di '+PORT))