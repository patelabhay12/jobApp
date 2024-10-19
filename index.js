const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db.js');
const companyRoutes = require('./routes/Company.js');

dotenv.config();

connectDB(); 

const app = express();  

app.use(cors());   
app.use(express.json());    
app.use(bodyParser.json());

app.use('/api/company', companyRoutes);
   
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
  