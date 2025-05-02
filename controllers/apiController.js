// const { supabase } = require('../db'); 
const sql = require('../db'); // Assuming you have a db.js file for SQL connection
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables
const express = require('express');
const router = express.Router();

exports.fetchData = async (req, res) => {
    try {
      const data = await supabase.from('users').select('*')
      res.json(data);
    } catch (error) {
      console.error('Error fetching:', error.message);
      res.status(500).json({ error: 'Error fetching data' });
    }
  };