const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Must input a name'],
            trim: true,
            minlength: [3, "Product name must be atleast 3 characters long"]
          },

          price: {
            type: Number,
            required: [true, 'Must enter a price'],
            trim: true,
            min: [1, 'Must be at least $1.00']
          },

          qty: {
            type: Number,
            required: [true, 'Must eneter a quantity'],
            trim: true,
            min: [1, 'Must have a minimum of 1 products']
          },
    },{
        timestamps: true,
    }
);

module.exports = mongoose.model('Product', productSchema);