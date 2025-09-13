import express, { Application, Request, Response } from 'express';

const app: Application = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello! This is my Express server.');
});

app.post('/', (req: Request, res: Response) => {
    const { name, message } = req.body;
    res.send(`Hello, ${name}! You said: ${message}`);
});
  
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

