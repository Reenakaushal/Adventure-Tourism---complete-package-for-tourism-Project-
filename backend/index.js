// import
const express = require('express');
const cors = require('cors');

// initialize
const app = express();

const userRouter = require('./routers/userRouter');
const packageRouter = require('./routers/packageRouter');
const bookingRouter = require('./routers/bookingRouter');
const utilRouter = require('./routers/utils');

// middleware
app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json());
app.use('/user', userRouter);
app.use('/package', packageRouter);
app.use('/booking', bookingRouter);
app.use('/util', utilRouter);

const port = 5000;
 
app.use(express.static(' ./static/uploads '));

app.get('/', (req, res) => {
    res.send('response from express');
});

app.get('/add', (req, res) => {
    res.send('response from add route');
})

app.listen(port, () => { console.log('express server started now') });