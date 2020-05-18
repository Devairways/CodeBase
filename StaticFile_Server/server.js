const next = require("next");
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

// configs the server
dotenv.config()
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()


// Routes
app.prepare().then(() => {
    const server = express();
  
    // Middleware
    server.use(bodyParser.json());
    
    // requests
    server.get("/", (req, res) => {
      return app.render(req, res, "/Homepage", req.query);
    });
<<<<<<< HEAD
    server.get("/profile", (req, res) => {
      return app.render(req, res, "/Profilepage", req.query);
    });
=======
>>>>>>> 95e4404aea7869113cdd72684a38d1aeb5692b77
  
    // catch all others
    server.all("*", (req, res) => {
      return handle(req, res)
    });
    
   // Activate server
    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    });
  
  })