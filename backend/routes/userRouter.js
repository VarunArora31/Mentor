import express from "express"
import userController from "../controller/userController.js"

const router = express.Router()

// Root route
router.get("/", (req, res) => {
    res.json({
        message: "Mentor API is running!",
        version: "1.0.0",
        endpoints: {
            signUp: "POST /signUp",
            login: "POST /login"
        }
    });
});

router.post("/signUp", userController.signUp)
router.post("/login", userController.login)


export default router