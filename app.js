const exprees = require('express');
const path = require('path');
const app = exprees();
const productRouterV3 = require ('./app/product_v3/routes');
const logger = require('morgan');

app.use(logger('dev'));
app.use(exprees.urlencoded ({extended: true}));
app.use(exprees.json());
app.use('/api/v3',productRouterV3);
app.use(express.static(path.join(__dirname, 'uploads')))
app.use((req, res ,next) =>{
    res.send({
        status:'failed',
        message:'Resource' + req.originalUr + 'not found'
    });
});
app.listen(3000, () => console.log ('Server: http://localhost:3000'))

