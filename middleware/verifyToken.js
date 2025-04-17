import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) =>{
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({success: false, message:"Unothorized - No Token Provided"});
    }
    try {
        const decode= jwt.verify(token, process.env.JWT_SECRET);
        if(!decode){
            return res.status(401).json({success: false, message:"Unothorized - Invalid Token"});
        }
        req.userId = decode.userId;
        next();
    } catch (error) {
        return res.status(400).json({success: false, message: error.message});
    }
};