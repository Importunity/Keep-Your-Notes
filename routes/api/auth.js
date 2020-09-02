import {Router} from 'express';
import bcrypt from 'bcryptjs';
import config from '../../config';
import jwt from 'jsonwebtoken';
import auth from '../../middleware/auth';

import User from '../../models/User';
