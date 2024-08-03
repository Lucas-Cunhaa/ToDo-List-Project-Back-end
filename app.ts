import   Express  from 'express'
import cors from 'cors'
import routes from './routes'
const app = Express()

app.use(cors)
app.use(Express.json())
app.use(routes)

app.listenerCount("3024" , () => {
    console.log("Executed on 3024 dor")
})
