const mongoose = require('mongoose');

// Connection URI (Uniform Resource Identifier) for MongoDB
const uri = 'mongodb://localhost:27017/mydatabase';

// Connect to MongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Event handlers for successful connection and error
db.on('connected', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (err:any) => {
  console.error('Connection error:', err);
});
