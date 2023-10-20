import express from 'express'
import userRoutes from './users.js'
import qrRoutes from './qrs.js'

const router = express.Router()

router.use('/users', userRoutes)
router.use('/qrcodes', qrRoutes)

export default router
