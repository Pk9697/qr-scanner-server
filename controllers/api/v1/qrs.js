/* eslint-disable no-underscore-dangle */
import Qr from '../../../models/qr.js'
/* CREATE POST- requires authentication */
/* api/v1/qrcodes/create?qrContent={qrContent} */
export const createQr = async (req, res) => {
  try {
    const { qrContent } = req.query
    const qr = await Qr.findOne({ user: req.user.id, content: qrContent })
    if (qr) {
      return res.status(422).json({
        success: false,
        message: 'Qr content already exists',
      })
    }

    const newQr = await Qr.create({
      content: qrContent,
      user: req.user.id,
    })

    return res.status(200).json({
      success: true,
      message: 'Qr created successfully',
      data: {
        qr: newQr,
      },
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    })
  }
}

/* api/v1/qrcodes/delete/:qrId */

export const deleteQr = async (req, res) => {
  try {
    const { qrId } = req.params
    const qr = await Qr.findById(qrId)
    if (!qr) {
      return res.status(422).json({
        success: false,
        message: `Qr doesn't exist`,
      })
    }
    // authorize user
    if (!qr.user.equals(req.user._id)) {
      return res.status(422).json({
        success: false,
        message: 'You are not authorized to delete this Qr!',
      })
    }

    await Qr.findByIdAndDelete(qrId)

    return res.status(200).json({
      success: true,
      message: 'Qr deleted successfully',
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    })
  }
}

/* api/v1/qrcodes */
export const getAllQrs = async (req, res) => {
  try {
    const qrs = await Qr.find({ user: req.user._id }).sort('-createdAt')
    return res.status(200).json({
      success: true,
      message: 'Here are your saved qrs',
      data: {
        qrs,
      },
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    })
  }
}
