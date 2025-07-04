import { MessageStatus } from "common/types/common.type";
import { fetchMessages } from "../../../../../services/whatsappApi";

export type Message = {
  id: string;
  body: string;
  date: string;
  timestamp: string;
  messageStatus: MessageStatus;
  isOpponent: boolean;
};

export async function getMessages(phoneNumberId: string): Promise<Message[]> {
  const data = await fetchMessages(phoneNumberId);
  return data || [];
}
