const express = require('express');
const dbConnect = require('./database/index');
const { PORT } = require('./config/index'); 
const router = require('./routes/index');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Connect to Database
dbConnect();

// Routes
app.use('/api', router);

app.get('/', (req, res) => res.json({ msg: 'Hello World! to say good as well' }));

// Error Handling Middleware (should be last)
app.use(errorHandler);

// Start Server
const startServer = async () => {
    try {
        app.listen(PORT, () => console.log(`Running on port: ${PORT}`));
    } catch (error) {
        console.error("Error starting server:", error);
        process.exit(1);
    }
};

startServer();
