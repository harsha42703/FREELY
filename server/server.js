require('dotenv').config();
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connect = require('./src/configs/db');
const PORT = 8080;

// Other Route files
const { userRoute, gigRoute, orderRoute, reviewRoute, authRoute } = require('./src/routes');

// App
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(compression());
app.use(cors({
    origin: ["https://freely-theta.vercel.app/","http://localhost:5173"],
    credentials: true
}));

// Other Routes
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/gigs', gigRoute);
app.use('/api/orders', orderRoute);
app.use('/api/reviews', reviewRoute);

// Routes
app.get('/', (request, response) => {
    response.send('Hello, Lokesh!');
});

app.get('/ip', (request, response) => {
    const list = request.headers['x-forwarded-for'] || request.socket.remoteAddress;
    const ips = list.split(',');

    return response.send({ ip: ips[0] });
})

app.listen(PORT, async () => {
    try {
        await connect();
        console.log(`Listening at http://localhost:${PORT}`);
    }
    catch ({ message }) {
        console.log(message);
    }
})