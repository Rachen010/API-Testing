const express = require('express');
const itemRoutes = require('./routes/items');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API is running', endpoints: ['/items'] });
});

app.use('/items', itemRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
