import { Server as SocketIOServer, Socket } from 'socket.io';

const socketEventHandler = (socket: Socket, io: SocketIOServer) => {

}

export type socketEventHandlerType = (socket: Socket, io: SocketIOServer) => void;
export default socketEventHandler;