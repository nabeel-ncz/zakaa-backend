import { Router } from "express";
import { controllers } from "@/presentation/controllers";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { CurrentUser, RequireAuth } from "@zakaa/common";

export const routes = (dependencies: IDependencies) => {

    const {
        createChat,
        createMessage,
        getChatById,
        getChatsByUserId,
        getMessagesByChatId
    } = controllers(dependencies);

    const router = Router();

    router.route("/")
        .post(CurrentUser, RequireAuth, createChat);

    router.route("/message")
        .post(CurrentUser, RequireAuth, createMessage);

    router.route("/:chatId")
        .get(CurrentUser, RequireAuth, getChatById);

    router.route("/user/:userId")
        .get(CurrentUser, RequireAuth, getChatsByUserId);

    router.route("/message/:chatId")
        .get(CurrentUser, RequireAuth, getMessagesByChatId);

    return router;
}