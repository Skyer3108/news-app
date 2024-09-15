const expres=require('express')
const cors=require('cors')

const dotenv=require('dotenv')

dotenv.config()

const newsRouter = require('./router/newsRouter')
const app=expres()


const PORT=5005
app.use(expres.json())

app.use(cors({
    origin: 'http://localhost:3000' // Replace with your React app’s URL if different
  }));

app.use('/api',newsRouter)



app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING AT PORT ${PORT}`)
})