const express = require('express');
// const next = require('next');
// const axios = require('axios');
const cors = require('cors');
require('dotenv').config()

const { connectDatabase } = require('./db');
// const nextApp = next();
// const handle = next.getRequestHandler();
const app = express();

const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());

// app.get('/api/home',async (req, res) => {
//     const userdata = [
//         { id: 1, name: 'John' },
//         { id: 2, name: 'Jane' },
//         { id: 3, name: 'Doe' }
//       ];
//     try{
//         // const response = await axios.get('http://localhost:8080/api/home');
//         res.json({userdata});
//     }

//     catch(err){
//         console.log('Error fetching data :', err);

//         res.status(500).json({err:'Internal server error'})
//     }
// })


// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

connectDatabase()
    .then(database => {
        app.get('/',async (req, res) => {
            res.json({message:"home"});
        });

        app.get('/api/home', async (req, res) => {
            const collection = database.collection('Academics');
            const userdata = await collection.find().toArray();
            // console.log("userdata: " + userdata);
            res.json({userdata});
        });
        app.get('/api/projects', async (req, res) => {
            const ProjectCollection = database.collection('Projects');
            const ProjectData = await ProjectCollection.find().toArray();
            // console.log("ProjectData: " + ProjectData);
            res.json({ProjectData});
        });

        app.post('/api/add', (req, res) => {
            if (req.method === 'POST') {
                const { name, email } = req.body;
                // console.log("User: " + name, "Email", email);
        
                // user.push({ ...user, id: uuidv4() });
                
                res.send(`name : ${name} and email : ${email}`);
            } 
            else {
                res.status(405).json({error: 'Method not allowed' });
            }
        })







        // Start the server
        app.listen(PORT, () => {
            // console.log(`Server is running on port ${PORT}`);
            console.log(`Server is running at http://localhost:${PORT}`)
        });
    })

    .catch(error => {
        console.error('Error connecting to the database', error);
        res.status(500).json({err:'Internal server error'})
    });