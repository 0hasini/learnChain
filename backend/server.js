const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
require('dotenv').config();

const studentRoutes = require('./routes/studentRoutes.js')

const app = express();

app.use(cors());