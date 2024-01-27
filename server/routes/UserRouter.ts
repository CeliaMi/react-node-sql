import { Router } from "express"
import userController from "../controllers/UserController"
import { loginController, registerController } from "../controllers/AuthController";
import { authMiddleware } from "../middleware/authMiddleware"; 
import { checkRol } from "../middleware/rolMiddleware";


const userRouter = Router();

userRouter.post("/register", registerController);
userRouter.post("/login", loginController);

userRouter.get("/users", authMiddleware,checkRol(["admin"]), userController.getUsers);
userRouter.get("/users/:id",authMiddleware, checkRol(["admin"]),userController.getUser);
userRouter.patch("/users/:id",authMiddleware, checkRol(["admin"]), userController.updateUser);
userRouter.delete("/users/:id",authMiddleware, checkRol(["admin"]), userController.deleteUser);

export default userRouter;