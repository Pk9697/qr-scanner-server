import express from 'express'
import passport from 'passport'
import '../../../config/passport-jwt-strategy.js'
import { createQr, deleteQr, getAllQrs } from '../../../controllers/api/v1/qrs.js'

const router = express.Router()

/* /api/v1/qrcodes/create/:qrContent */
router.post('/create/:qrContent', passport.authenticate('jwt', { session: false }), createQr)
/* api/v1/qrcodes/delete/:qrId */
router.delete('/delete/:qrId', passport.authenticate('jwt', { session: false }), deleteQr)
/* api/v1/qrcodes */
router.get('/', passport.authenticate('jwt', { session: false }), getAllQrs)

export default router
