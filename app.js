// Import the express module
import express from 'express';
import mysql2 from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
}).promise();

// Create an instance of an Express application
const app = express();

// Define the port number where our server will listen
const PORT = 3002;
const contacts = [];

//Enable static file serving
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs');

//TEST CODE
app.get('/db-test', async(req, res) => {
    try {
        const [orders] = await pool.query('SELECT * FROM contacts')
        res.send(orders);
    } catch(err) {
        console.error('Database err: ', err);
        res.status(500).send('Database error occured.')
    } 
});

// Define a default "route" ('/')
// req: contains information about the incoming request
// res: allows us to send back a response to the client
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/contact-form', (req, res) => {
    res.render('contact-form');
});

app.post('/confirm', (req,res) => {
    const contact = req.body;
    contact.timestamp = new Date();
    console.log(contact);   

    //add contact to contacts array
    contacts.push(contact);
    console.log(contacts);      

    res.render('confirm', {contact})
});

app.get('/admin', (req, res) => {
    res.render('admin', {contacts})
})

// Start the server and listen on the specified port 
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
}); 
