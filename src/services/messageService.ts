
export interface ChatUser {
  name: string;
  avatar: string;
  isOnline: boolean;
}

export interface Chat {
  id: number;
  user: ChatUser;
  lastMessage: string;
  timestamp: string;
  unread: number;
}

export interface Message {
  id: number;
  senderId: number | string;
  text: string;
  timestamp: string;
  chatId?: number;
}

// Sample chats data
export const getSampleChats = (): Chat[] => [
  {
    id: 1,
    user: {
      name: "Emma Watson",
      avatar: "https://i.pravatar.cc/150?img=1",
      isOnline: true
    },
    lastMessage: "Hey, are you available for a tutorial session tomorrow?",
    timestamp: "10:45 AM",
    unread: 2
  },
  {
    id: 2,
    user: {
      name: "James Smith",
      avatar: "https://i.pravatar.cc/150?img=2",
      isOnline: false
    },
    lastMessage: "I completed the React tutorial you recommended!",
    timestamp: "Yesterday",
    unread: 0
  },
  {
    id: 3,
    user: {
      name: "Sarah Connor",
      avatar: "https://i.pravatar.cc/150?img=4",
      isOnline: true
    },
    lastMessage: "Thanks for the help with my JavaScript project.",
    timestamp: "3 days ago",
    unread: 0
  },
  {
    id: 4,
    user: {
      name: "Michael Johnson",
      avatar: "https://i.pravatar.cc/150?img=5",
      isOnline: false
    },
    lastMessage: "Let's schedule a peer review session next week.",
    timestamp: "5 days ago",
    unread: 0
  }
];

// Sample messages for the selected chat
export const getSampleMessages = (): Message[] => [
  {
    id: 1,
    chatId: 1,
    senderId: 1,
    text: "Hey there! I've been working on that React project we discussed.",
    timestamp: "10:30 AM"
  },
  {
    id: 2,
    chatId: 1,
    senderId: "current",
    text: "That's great! How's your progress so far?",
    timestamp: "10:32 AM"
  },
  {
    id: 3,
    chatId: 1,
    senderId: 1,
    text: "I've completed the component structure, but I'm having trouble with the state management.",
    timestamp: "10:35 AM"
  },
  {
    id: 4,
    chatId: 1,
    senderId: "current",
    text: "Would you like to schedule a call to go through it together?",
    timestamp: "10:38 AM"
  },
  {
    id: 5,
    chatId: 1,
    senderId: 1,
    text: "That would be perfect! Are you available tomorrow around 2 PM?",
    timestamp: "10:40 AM"
  },
  {
    id: 6,
    chatId: 1,
    senderId: "current",
    text: "Yes, that works for me. I'll send you a calendar invite.",
    timestamp: "10:42 AM"
  },
  {
    id: 7,
    chatId: 1,
    senderId: 1,
    text: "Hey, are you available for a tutorial session tomorrow?",
    timestamp: "10:45 AM"
  },
  {
    id: 8,
    chatId: 2,
    senderId: 2,
    text: "Hello! I just wanted to let you know I've been following your recommendations.",
    timestamp: "Yesterday"
  },
  {
    id: 9,
    chatId: 2,
    senderId: "current",
    text: "That's wonderful to hear! Which ones have you tried so far?",
    timestamp: "Yesterday"
  },
  {
    id: 10,
    chatId: 2,
    senderId: 2,
    text: "I completed the React tutorial you recommended!",
    timestamp: "Yesterday"
  }
];
