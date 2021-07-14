import mongoose from 'mongoose'

export {
  Ingredient
}

const ingredientSchema = new mongoose.Schema({
  name: String,
})

const Ingredient = mongoose.model("Ingredient", ingredientSchema)
