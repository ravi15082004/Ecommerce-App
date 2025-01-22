import  express, { json, urlencoded } from 'express';
import productRoutes from './routes/products/index';

const port = 3000;
const app = express();

app.use(urlencoded({ extended: false }));
app.use(json());

app.get('/', (req,res) => {
    res.send("Hello World!");
})

app.use('/products', productRoutes);


app.listen(port, () => {
    console.log(`Example app is listening on port ${port}`);
} )