// import models->todo
const Todo = require('../models/todo')

// define route handler
async function createTodo(req,res){
    try{
        // extract "title" and "description" from request body
        const {title,description} = req.body;

        // create new TODO OBJECT and INSERT to DATABASE
        const response = await Todo.create({title,description})

        //send json response with success flag
        res.status(200).json({
            success : true,
            data : response,
            message: "Entry created successful",
        })
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            success: false,
            data: "internal server error",
            message: error.message,
        })
    }
}


module.exports = {createTodo};