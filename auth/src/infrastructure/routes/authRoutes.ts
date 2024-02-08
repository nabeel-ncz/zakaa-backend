import { Router } from "express";
import { controllers } from "@/presentation/controllers";
import { IDependencies } from "@/application/interfaces/IDependencies";

export const authRoutes = (dependencies: IDependencies) => {

    const {
        signup,
        login,
        findUsername
    } = controllers(dependencies);
    
    const router = Router();

    router.route("/signup")
        .post(signup);

    router.route("/login")
        .post(login);

    router.route("/available/username/:username")
        .get(findUsername);

        
    return router;
}