import jwt from "jsonwebtoken"
import userSchema from "../model/userModel.js"


const jwtTokenSign = async (userData) => {
    try {
        const secretKey = process.env.JWTSECRETKEY
        const userId = userData._id || userData.id
        const token = jwt.sign({ id: userId }, secretKey)
        const decoded = jwt.verify(token, secretKey)
        await userSchema.findByIdAndUpdate(userId,
            { token: token, loginTime: decoded.iat },
            { new: true })

        return { token, decoded }
    } catch (error) {
        console.log('JWT Token Error:', error)
        return null
    }
}

export default jwtTokenSign