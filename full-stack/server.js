const   express         = require('express'),
        User            = require('./dbfiles/user'),
        dbOperation     = require('./dbFiles/dbOperation'),
        cors            = require('cors');


const API_PORT = process.env.PORT || 5000;
const app = express();

//variables required for mongoDB
let client;
let session;

//pass over the JSON from front to backend, so it may be deconstructed
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post('/api', async (req, res) => {
        console.log('Called API');
        const result = await dbOperation.getUsers(req.body);
        res.send(result.recordset);
});

app.post('/hello', async (req, res) => {
        await dbOperation.createUser(req.body);
        const result = await dbOperation.getUsers();
        console.log('Called Hello');
        res.send(result.recordset);
});

// let Maria = new User('Maria@Maria.com', '112233', 'operador');


//dbOperation.createUser(Maria);


app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));

