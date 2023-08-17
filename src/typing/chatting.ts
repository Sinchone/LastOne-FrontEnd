export interface ChattingListType {
  roomId: string;
  otherUserId: number;
  profileUrl: string;
  nickname: string;
  lastChat: string;
  lastChatTime: string;
  notReadCount: number;
}

export interface MessageType {
  senderId: number;
  receiverId: number;
  content: string;
  sendTime: string;
  read: boolean;
}

export interface ChatRoomType {
  otherUserId: number;
  profileUrl: string;
  nickname: string;
  gender: string;
  messages: MessageType[];
}

export interface PublishMessageType {
  roomId: string;
  senderId: number;
  receiverId: number;
  content: string;
}

export interface SubscribeMessageType {
  senderId: number;
  receiverId: number;
  content: string;
  sendTime: string;
  read: boolean;
}