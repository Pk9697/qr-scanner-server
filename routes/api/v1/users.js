import express from 'express'
import { login, register } from '../../../controllers/api/v1/users.js'

const router = express.Router()

/* /api/v1/users/register */
router.post('/register', register)
/* /api/v1/users/login */
router.post('/login', login)

export default router
