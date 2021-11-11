const ex = require("express");
const morgan = require("morgan");


const instance_ex = ex();

const PORT = process.env.PORT || 3000

instance_ex.listen(PORT, () => {
    console.log("SERVER READY TO RECIEVE & RESPONSE");
  
});

morgan.token("user", function (req, res) {
  return req.hostname;
  
});

instance_ex.use(morgan(":method :user :date  :url "));

instance_ex.get("/todo", (req, res) => {
  res.send("GET request recieved for todo");
});

instance_ex.post("/post/todo", (req, res) => {
  res.send("POST request recieved for todo");
});

instance_ex.put("/put/todo", (req, res) => {
  
  
    res.send("PUT request recieved for todo");
    
  });

instance_ex.delete("/delete/todo", (req, res) => {
  res.send("Delete request recieved for todo");
});

