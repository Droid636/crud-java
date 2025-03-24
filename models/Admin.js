const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
}, { collection: "administrativos" }); // 👈 Fuerza a usar la colección "Administrativos"

module.exports = mongoose.model("Administrativo", AdminSchema);
