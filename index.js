const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Stationary')
    .then(() => {
        console.log("Success");
    })
    .catch((err) => {
        console.log("Error" + err);
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: 0,
        required: true
    },
    inStock: {
        type: Boolean,
        default: true
    }
})

const Product = new mongoose.model('Product', productSchema);
// const rubiksCube = new Product({
//     name: "Rubiks cube",
//     price: 200,
//     inStock: true
// })
const products = [
    {
        name: "Football",
        price: -799,
        inStock: true
    },
    {
        name: "Wireless Mouse",
        price: 1499,
        inStock: true
    },
    {
        name: "Mechanical Keyboard",
        price: 4999,
        inStock: false
    },
    {
        name: "Mountain Bike",
        price: 12000,
        inStock: true
    },
    {
        name: "Notebook Pack",
        price: 250,
        inStock: true
    },
    {
        name: "Gaming Headset",
        price: 2999,
        inStock: false
    },
    {
        name: "Water Bottle",
        price: 499,
        inStock: true
    },
    {
        name: "Cricket Bat",
        price: 3500,
        inStock: true
    }
];
Product.insertMany(products)
    .then(data => console.log(data))
