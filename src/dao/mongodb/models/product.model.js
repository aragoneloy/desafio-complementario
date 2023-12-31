import { number } from "joi";
import mongoose from "mongoose";

const productCollection = 'products'

const productSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true
    },
    description: { 
        type: String, 
        required: true
    },
    category: { 
        type: String, 
        required: true
    },
    price: { 
        type: Number, 
        required: true
    },
    thumbnail: { 
        type: Array, 
        required: true
    },
    code: { 
        type: Number, 
        required: true
    },
    stock:  { 
        type: Number, 
        required: true
    },
    status:  { 
        type: Boolean, 
        required: true
    },
})

export const productModel = mongoose.model(productCollection, productSchema)