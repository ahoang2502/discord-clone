"use client";

import { Member } from "@prisma/client";

import ChatWelcome from "./ChatWelcome";

interface ChatMessagesProps {
	name: string;
	member: Member;
	chatId: string;
	apiUrl: string;
	socketUrl: string;
	socketQuery: Record<string, string>;
	paramKey: "channelId" | "conversationId";
	paramValue: string;
	type: "channel" | "conversation";
}

const ChatMessages = ({
	name,
	member,
	chatId,
	apiUrl,
	socketQuery,
	socketUrl,
	paramKey,
	paramValue,
	type,
}: ChatMessagesProps) => {
	return (
		<div className="flex-1 flex flex-col py-4 overflow-y-auto ">
			<div className="flex-1" />
			<ChatWelcome type={type} name={name} />
		</div>
	);
};

export default ChatMessages;
