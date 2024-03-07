import { Server as SocketIOServer, Socket } from 'socket.io';

const socketEventHandler = (socket: Socket, io: SocketIOServer) => {

    socket.on("join_room", (payload: { chatId: string }) => {
        console.log(`🚀----join_room event`, payload);
        socket.join(payload.chatId);
    });

    socket.on("send_message", (payload: { 
        content: string, 
        chat: string, 
        sender: string,
        createdAt: Date | string
    }) => {
        console.log(`🚀----send_message event`, payload);
        socket.to(payload?.chat).emit("recieve_message", payload);
        console.log(`🚀----recieve_message emit`, payload);
    });

}

export type socketEventHandlerType = (socket: Socket, io: SocketIOServer) => void;
export default socketEventHandler;