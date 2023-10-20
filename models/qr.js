import mongoose from 'mongoose'

const qrSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    // will refer to object Id of a user who posted with reference to User Schema
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

// telling mongoose that this->'Qr' is a model in the database
const Qr = mongoose.model('Qr', qrSchema)
// now exporting this Qr schema which would be used by controllers to access Qr model document
export default Qr
