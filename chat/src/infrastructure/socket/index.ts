import { Server as SocketIOServer, Socket } from 'socket.io';

function containsValue<T, U>(map: Map<T, U>, value: U): boolean {
    return Array.from(map.values()).includes(value);
};

const socketEventHandler = (socket: Socket, io: SocketIOServer, context: {
    onlineUsers:  Map<string, string>
}) => {

    const onlineUsers = context.onlineUsers;

    socket.on("join_room", (payload: { chat: string, user: string }) => {
        console.log(`🚀----join_room event`, payload);
        socket.join(payload.chat);

        const status = containsValue(onlineUsers, payload?.user);
        io.to(payload.chat).emit("user_status", {
            status: status ? "online" : "offline",
            user: payload.user
        });
        console.log(`🚀----user_status emit`, status, onlineUsers);
    });

    socket.on("send_message", (payload: {
        content: string,
        contentType: string,
        chat: string,
        sender: string,
        createdAt: Date | string
    }) => {
        console.log(`🚀----send_message event`, payload);
        socket.to(payload?.chat).emit("recieve_message", payload);
        console.log(`🚀----recieve_message emit`, payload);
    });

    socket.on("online", (payload: {
        user: string;
    }) => {
        console.log(`🚀----online event`, payload);
        onlineUsers.set(socket.id, payload.user);
    });

    socket.on("offline", (payload: {
        user: string;
    }) => {
        console.log(`🚀----offline event`, payload);
        onlineUsers.delete(socket.id);
    });

}

export type socketEventHandlerType = (socket: Socket, io: SocketIOServer, context: {
    onlineUsers: Map<string, string>
}) => void;
export default socketEventHandler;