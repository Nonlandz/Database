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
const sequelize = new Sequelize('DBproject', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});


sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
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
      unique: true,
  },
  Point: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'User',
  timestamps: false,
  freezeTableName: true,
});

app.post('/register', async (req, res) => {
  try {
    console.log('Received data from frontend:', req.body);

    const existingUsername = await User.findOne({ where: { Username: req.body.Username } });
    const existingTel = await User.findOne({ where: { Tel: req.body.Tel } });

    if (existingUsername || existingTel) {
      let errorMessage = '';
      if (existingUsername) {
        errorMessage += 'Username already exists. ';
      }
      if (existingTel) {
        errorMessage += 'Telephone number already exists.';
      }
      throw new Error(errorMessage);
    }

    const newUser = await User.create(req.body)
      .catch((err) => {
        console.error('Error while inserting data into the database:', err);
        throw err;
      });

    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
