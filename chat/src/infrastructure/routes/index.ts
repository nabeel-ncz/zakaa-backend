import { Router } from "express";
import { controllers } from "@/presentation/controllers";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { CurrentUser, RequireAuth } from "@zakaa/common";
import { updateChat } from "../database/mongo/repositories";

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
        .post(CurrentUser, RequireAuth, createChat)
        .put(CurrentUser, RequireAuth, updateChat);

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