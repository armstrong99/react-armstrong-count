const Clarifai = require('clarifai')
const express = require( 'express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
      
const clarifai = new Clarifai.App({
          apiKey: 'd8fa04a683684f27b53a5a4ea08fba2d'
        });

app.post('/api/getData/', async (req, res) => {
    
    //  console.log(req.body.img)
     const getData = async () => {
        try {
            let apiRes =  await clarifai.models.predict(Clarifai.DEMOGRAPHICS_MODEL, req.body.img)
        
            console.log(apiRes['outputs'][0]['data']['regions'][0]['data']['concepts'])
            
            res.json(apiRes['outputs'][0]['data']['regions'][0]['data']['concepts'])
            
        } 
        catch (error) {
            res.json({err: 'error'})
        //   console.log(error.message)
        }
                  
                }
            
          getData()
                 
})

       

 
   



let port = 5050;

 app.listen(port, () => console.log('Server is listening on ' + port))

 