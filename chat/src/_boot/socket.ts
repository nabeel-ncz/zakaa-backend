import { Server as SocketIOServer, Socket } from 'socket.io'
import { socketEventHandlerType } from '@/infrastructure/socket';
import { config } from '@/_boot/config';
import { Server } from 'http'

const onlineUsers = new Map();

export default async (server: Server, handler: socketEventHandlerType) => {

    const io: SocketIOServer = new SocketIOServer(server, {
        cors: {
            origin: config.frontend.url
        }
    })

    io.on("connection", (socket: Socket) => {
        
        console.log('socket io connected');
        
        handler(socket, io, {
            onlineUsers: onlineUsers
        });

        socket.on("disconnect", () => {
            const user = onlineUsers.get(socket.id);
            onlineUsers.delete(socket.id);
            console.log('🚀 Removed user:', user, 'from onlineUsers array');
        })
    });

}