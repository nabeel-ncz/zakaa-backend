import { Server as SocketIOServer, Socket } from 'socket.io'
import { socketEventHandlerType } from '@/infrastructure/socket';
import { config } from '@/_boot/config';
import { Server } from 'http'

export default async (server: Server, handler: socketEventHandlerType) => {

    const io: SocketIOServer = new SocketIOServer(server, {
        cors: {
            origin: config.frontend.url
        }
    })

    io.on("connection", (socket: Socket) => {
        console.log('socket io connected');
        handler(socket, io);

        socket.on("disconnect", () => {
            console.log('socket disconnected');
        })
    });

}