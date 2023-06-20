const mongoose = require("mongoose")

async function main() {
    try {
        mongoose.set("strictQuery", true);
//riU0RXqd91Z1dF4b
        await mongoose.connect(
            "mongodb+srv://filipemattossenai:riU0RXqd91Z1dF4b@cluster0.kesnmt3.mongodb.net/?retryWrites=true&w=majority"
             );
             console.log("Conectado ao banco");
    } catch (error) {
        console.log(`Erro ${error}`)
    }
}
module.exports = main;