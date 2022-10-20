import express from "express"
import { addNewFurniture , getAllFurnitures, findFurnitureByModel} from "./src/furniture.js"


const PORT = 3333
const app = express()
app.use(express.json())

app.get('/', (req, res) => res.send('working'))
app.post('/furniture', addNewFurniture)
app.get('/furniture', getAllFurnitures)
app.get('/furniture/:search', findFurnitureByModel)




app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}...`))