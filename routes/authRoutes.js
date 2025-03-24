const express = require("express");
const path = require("path");
const Administrativo = require("../models/Admin"); // Importamos el modelo

const router = express.Router();

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        console.log("🔍 Buscando usuario:", username);

        // Buscar usuario en la colección "Administrativos"
        const user = await Administrativo.findOne({ username });

        if (!user) {
            console.log("❌ Usuario no encontrado en la colección Administrativos");
            return res.status(400).json({ message: "Usuario o contraseña incorrectos" });
        }

        console.log("✅ Usuario encontrado:", user);

        // Verificar la contraseña (SIN bcrypt)
        if (password !== user.password) {
            console.log("❌ Contraseña incorrecta");
            return res.status(400).json({ message: "Usuario o contraseña incorrectos" });
        }

        console.log("✅ Inicio de sesión exitoso");

        // Si el login es exitoso, redirigir a dashboard.html
        return res.json({ message: "Inicio de sesión exitoso", redirect: "/dashboard.html" });

    } catch (error) {
        console.error("❌ Error en el servidor:", error);
        res.status(500).json({ message: "Error en el servidor" });
    }
});

module.exports = router;
