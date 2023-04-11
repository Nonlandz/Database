const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');
const testRouter = require('./routes/test')

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(testRouter.router)

// Replace with your database credentials
const sequelize = new Sequelize('train', 'root', ' ', {
  host: 'localhost',
  dialect: 'mysql',
});

// Define User model
const User = sequelize.define('User', {
  User_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  Password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Usertype: {
    type: DataTypes.ENUM('user', 'admin'),
    allowNull: false,
  },
  Tel: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  Point: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'User',
  timestamps: false,
});

app.post('/register', async (req, res) => {
  try {
    console.log('Received data from frontend:', req.body); // Add this line

    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
