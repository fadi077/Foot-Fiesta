const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema(
    {
        email: { type: "String", require: true, unique: true },
        password: { type: "String", require: true },
        username: { type: "String", require: true, unique: true },

        shippingAddress: {
            firstName: {
                type: String
            },
            lastName: {
                type: String
            },
            address: {
                type: String
            },
            city: {
                type: String
            },
            postalCode: {
                type: String
            },
            province: {
                type: String
            },
            country: {
                type: String
            },
            phone: {
                type: String
            }
        }
    }
)
module.exports=mongoose.model("User",UserSchema);

