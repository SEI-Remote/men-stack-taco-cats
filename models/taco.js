import mongoose from 'mongoose'

export {
  Taco
}

const tacoSchema = new mongoose.Schema({
  name: String,
  tasty: Boolean,
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile'},
  ingredients: [{type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient'}]
})

const Taco = mongoose.model("Taco", tacoSchema)
