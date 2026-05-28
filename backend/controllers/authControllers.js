import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";


export const register = async(req, res) => {

    try {

        const { username, email, password } = req.body;

        const existingUser = await User.findOne({
            email
        });

        if(existingUser) {
            return res.status(400).json({
                error: "El usuario ya existe"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            username,
            email,
            password: hashedPassword
        });

        await user.save();

        res.status(201).json({
            message: "Usuario registrado correctamente",
            user: {
                id: user._id,
                name: user.username,
                email: user.email
            }
        });

    } catch(error) {

        res.status(500).json({
            error: "Error al registrar usuario"
        });

    }

};//register


export const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({
            email
        });

        if(!user) {

            return res.status(400).json({
                error: "Usuario no encontrado"
            });

        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if(!isMatch) {

            return res.status(400).json({
                error: "Contraseña incorrecta"
            });

        }

        const token = jwt.sign(
            {
                id: user._id
            },
            process.env.SECRET,
            {
                expiresIn: "7d"
            }
        );

        res.status(200).json({
            message: "Login exitoso",
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });

    } catch(error) {

        res.status(500).json({
            error: "Error al iniciar sesión"
        });

    }

};//login


export const profile = async (req, res) => {

    try {
        const user = await User.findById(req.user.id).select("-password");

        res.json(user);
    }
    catch (error) {
        res.status(500).json({
            error: "Error al obtener usuario"
        });

    }




}; //profile