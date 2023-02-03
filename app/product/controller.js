const connection = require('../../config/mysql');

const index = (req,res) =>{
    connection.query({
        sql:'SELECT = FROM products',
    }, _response(res));
}

const _response = (res) => {
    return (error,result) =>{
        if(error){
            res.send({
                status:'failed',
                response:'failed to fetch data'
            });
        }else({
            status:'succes',
            response:result
        });
    }
}
 
module.exports(
    index
)

