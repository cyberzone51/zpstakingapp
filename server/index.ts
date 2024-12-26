import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3001;
const host = '0.0.0.0'; // Это позволит принимать подключения со всех сетевых интерфейсов

// Middleware
app.use(cors());
app.use(express.json());

// Простой роут для проверки
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
  console.log(`Also available on local network at http://192.168.x.x:${port}`);
}); 