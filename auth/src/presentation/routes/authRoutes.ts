import { Router } from "express";
import { controllers } from "@/presentation/controllers";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { CurrentUser } from "@zakaa/common";

export const authRoutes = (dependencies: IDependencies) => {

    const {
        signup,
        login,
        getUser,
        verifyAccount,
        findUsername,
        getUsernameSuggestions,
        sendForgotPasswordMail,
        forgotPassword,
        resetPassword,
        findEmail,
        logout
    } = controllers(dependencies);

    const router = Router();

    router.route("/")
        .get(CurrentUser, getUser);

    router.route("/signup")
        .post(signup);

    router.route("/login")
        .post(login);

    router.route("/logout")
        .delete(logout);

    router.route("/verify")
        .post(CurrentUser, verifyAccount);

    router.route("/available/email/:email")
        .get(findEmail);

    router.route("/available/username")
        .get(getUsernameSuggestions);

    router.route("/available/username/:username")
        .get(findUsername);

    router.route("/forgot-password")
        .post(forgotPassword);

    router.route("/forgot-password/send")
        .post(sendForgotPasswordMail);

    router.route("/reset-password")
        .post(CurrentUser, resetPassword);

    return router;
}