
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
}

// Sample chats data
export const getSampleChats = (): Chat[] => [
  {
    id: 1,
    user: {
      name: "Jane Smith",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop",
      isOnline: true
    },
    lastMessage: "Thanks for the feedback on my project! When can we schedule our next session?",
    timestamp: "10:42 AM",
    unread: 2
  },
  {
    id: 2,
    user: {
      name: "Alex Johnson",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop",
      isOnline: false
    },
    lastMessage: "I'm interested in collaborating on the data visualization project you mentioned.",
    timestamp: "Yesterday",
    unread: 0
  },
  {
    id: 3,
    user: {
      name: "Maria Rodriguez",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
      isOnline: true
    },
    lastMessage: "Here's the link to my portfolio with the UI designs.",
    timestamp: "Yesterday",
    unread: 0
  }
];

// Sample messages for the selected chat
export const getSampleMessages = (): Message[] => [
  {
    id: 1,
    senderId: 1, // not current user
    text: "Hi there! I saw your profile and I think we could work well together on frontend projects.",
    timestamp: "10:30 AM"
  },
  {
    id: 2,
    senderId: "current", // current user
    text: "Hello! Thanks for reaching out. I'd love to collaborate. What kind of projects are you working on?",
    timestamp: "10:35 AM"
  },
  {
    id: 3,
    senderId: 1,
    text: "I'm currently developing a React dashboard for a healthcare application. I could use your expertise with animations and responsive design.",
    timestamp: "10:38 AM"
  },
  {
    id: 4,
    senderId: "current",
    text: "That sounds interesting! I have experience with Framer Motion for animations and I've worked on several responsive dashboards.",
    timestamp: "10:40 AM"
  },
  {
    id: 5,
    senderId: 1,
    text: "Thanks for the feedback on my project! When can we schedule our next session?",
    timestamp: "10:42 AM"
  }
];
