import mongoose from "mongoose"
import { cartModel } from "../models/cart.model"
import ProductManager from "./productManager.js"

export default class CartManager {
  connection = mongoose.connect("mongodb+srv://eloyaragon:rPoQ6b4j1s0ELKrM@cluster0.gstcy4m.mongodb.net/")
  productManager = new ProductManager()

  async getCarts() {
    const result = await cartModel.find()
    return result
  }

  async createCart() {
    const result = await cartModel.create({products: []})
    return result
  }

  async getCartById(cartId) {
    const result = await cartModel.findOne({_id, cartId})
    return result
  }

  async updateCart(cartId, productId) {
    const product = await this.productManager.getProductById(productId)
    const cart = await this.getCartById(cartId)
    cart.products.push({ product: product})
    await cart.save()
    return
  }

  async deleteCart(cartId) {
    
  }
}