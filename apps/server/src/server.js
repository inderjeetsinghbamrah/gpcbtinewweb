import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import eventsRouter from './routes/events.js';
import instituteDetailsRouter from "./routes/instituteDetailsRouter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/events', eventsRouter);

app.use('/api/instituteDetails', instituteDetailsRouter);


app.use((err, req, res, next) => {
    console.error('ERROR STACK:', err.stack || err);
    console.error('ERROR MESSAGE:', err.message);
    console.error('ERROR NAME:', err.name);

    res.status(err.status || 500).json({
        error: err.message || 'Internal Server Error',
        type: err.name || 'UnknownError'
    });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
