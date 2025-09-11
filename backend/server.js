import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Watch from './models/Watch.js';

const app = express();

// CORS कॉन्फ़िगरेशन
app.use(cors({
  origin: '*',  // सभी origins को allow करता है
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/byteMeWatches', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/api/watches', async (req, res) => {
  const { category } = req.query;
  console.log('Backend received category query:', category);
  const query = category ? { category } : {};
  const watches = await Watch.find(query);
  console.log('Backend found watches:', watches.length);
  res.json(watches);
});

app.post('/api/watches', async (req, res) => {
  const watch = new Watch(req.body);
  await watch.save();
  res.status(201).json(watch);
});

app.put('/api/watches/:id', async (req, res) => {
  const watch = await Watch.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(watch);
});

app.delete('/api/watches/:id', async (req, res) => {
  await Watch.findByIdAndDelete(req.params.id);
  res.json({ message: 'Watch deleted' });
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});