import authApi from '@apis/auth';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { SubscribeMessageType } from '@typing/chatting';

const baseURL = process.env.NEXT_PUBLIC_API_KEY;
let stompClient: Client;

export const getChattingList = () => {
  return authApi.get('/chat/room');
};

export const deleteChattingRoom = (roomId: string) => {
  return authApi.delete(`/chat/room/${roomId}`);
};

export const getChatRoomDetail = (roomId: string) => {
  return authApi.get(`/chat/room/${roomId}`);
};

export const connect = () => {
  const socket = new SockJS(`${baseURL}chat/stomp`);

  stompClient = new Client({
    webSocketFactory: () => socket,
    onConnect: () => {
      console.log('Connected to WSS server');
    },
  });
  stompClient.activate();   
};

export const subscribe = (roomId: string, onMessageReceived: (message: SubscribeMessageType) => void) => {
    console.log(`roomId 확인 => ${roomId}`);
    if (stompClient && stompClient.connected) {
        return stompClient.subscribe(`/topic/${roomId}`, (message) => {
            console.log(message);
            onMessageReceived(JSON.parse(message.body));
        });
    } else {
        console.log('STOMP client is not connected.');
    }
}

export const publishMessage = (roomId: string, message: string) => {
    if (message && stompClient && stompClient.connected) {
        console.log(`publishMessage => ${message}`);
        stompClient.publish({ destination: `/pub/chat.message.test.${roomId}`, body: message });
    } else {
        console.log("메세지 보낼 준비가 안된 상태입니다.");
    }
}