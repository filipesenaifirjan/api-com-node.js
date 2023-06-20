const mongoose = require("mongoose");

const { Shcema } = mongoose;

const serviceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    },
},
{ timestapms: true } 
);
const Service = mongoose.model("Service", serviceSchema);

module.exports = {
    Service, 
    serviceSchema,
};