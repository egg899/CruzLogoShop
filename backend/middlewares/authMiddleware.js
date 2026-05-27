import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {

    try {
        const authHeader = req.headers.authorization;

        if(!authHeader) {
            return res.status(401).json({
                error:"No autorizado"
            });
        }//!authHeader

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(
            token,
            process.env.SECRET
        );//decoded

        req.user = decoded;

        next();


    }
    catch(error) {
        return res.status(401).json({
            error: "Token inválido"
        })
    }


};//authMiddleware


export default authMiddleware;