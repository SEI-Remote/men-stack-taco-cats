import mongoose from 'mongoose'

export {
  Ingredient
}

const ingredientSchema = new mongoose.Schema({
  name: {type: String, unique: true},
})

const Ingredient = mongoose.model("Ingredient", ingredientSchema)
