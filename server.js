// Load environment variables
require('dotenv').config();

// Import packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// Initialize app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // for static files like images, css, js

// =====================
// MongoDB Connection
// =====================
mongoose.connect(process.env.MONGO_URI) // no extra options needed
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// =====================
// Product Schema
// =====================
const productSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    img: String
});

const Product = mongoose.model('Product', productSchema);

// =====================
// Routes
// =====================

// Test route
app.get('/', (req, res) => {
    res.send('Niora Store Backend is running');
});

// Get all products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add product
app.post('/api/products', async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// =====================
// Start server
// =====================
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
