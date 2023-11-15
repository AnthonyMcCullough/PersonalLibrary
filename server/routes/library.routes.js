const Controller = require("../controllers/newBook.controller")

module.exports=app=>{

    app.post("/createBook",Controller.createBook)
    app.get("/getBooks",Controller.getBooks)
    app.post("/createComment",Controller.createComment)
    app.get("/getComments/:id",Controller.getComments)
    app.delete("/deleteBook",Controller.deleteBook)
    app.delete('/deleteAllBooks', Controller.deleteAllBooks)
    app.delete("/deleteAllComments",Controller.deleteAllComments)
}