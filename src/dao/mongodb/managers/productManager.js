import mongoose from "mongoose"
import { productModel } from "../models/product.model.js"

export default class ProductManager {
  connection = mongoose.connect("mongodb+srv://eloyaragon:rPoQ6b4j1s0ELKrM@cluster0.gstcy4m.mongodb.net/")

  async getProducts() {
    let result = await productModel.find()
    return result
  }

  async addProduct(product) {
    let result = await productModel.create(product)
    return result
  }

  async getProductById(productId) {
    let result = await productModel.findOne({_id: productId})
    return result
  }

  async updateProduct(productId, update) {
    let result = await productModel.updateOne(
      {_id: productId},
      {$set: update}
    )
    return result
  }

  async deleteProduct(productId) {
    let result = await productModel.deleteOne(productId)
    return result
}

}