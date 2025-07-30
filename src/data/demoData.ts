// Demo data for the dating app

export interface User {
  id: string;
  name: string;
  age: number;
  location: string;
  bio: string;
  images: string[];
  interests: string[];
  isOnline: boolean;
  lastSeen?: string;
  verified: boolean;
}

export interface Match {
  id: string;
  userId: string;
  matchedUserId: string;
  timestamp: string;
  lastMessage?: string;
  unreadCount: number;
}

export interface AdminStats {
  totalUsers: number;
  activeUsers: number;
  totalMatches: number;
  dailySignups: number;
  revenue: number;
  reportedUsers: number;
}

export const demoUsers: User[] = [
  {
    id: "1",
    name: "Emma Watson",
    age: 28,
    location: "New York, NY",
    bio: "Love hiking, reading, and discovering new coffee shops. Looking for someone who shares my passion for adventure!",
    images: ["https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400", "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400"],
    interests: ["Hiking", "Reading", "Coffee", "Travel"],
    isOnline: true,
    verified: true
  },
  {
    id: "2",
    name: "James Rodriguez",
    age: 32,
    location: "Los Angeles, CA",
    bio: "Photographer and dog lover. Always looking for the perfect shot and the perfect companion to share life's moments with.",
    images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"],
    interests: ["Photography", "Dogs", "Art", "Music"],
    isOnline: false,
    lastSeen: "2 hours ago",
    verified: true
  },
  {
    id: "3",
    name: "Sofia Chen",
    age: 26,
    location: "San Francisco, CA",
    bio: "Tech enthusiast by day, yoga instructor by evening. Seeking balance in life and love.",
    images: ["https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400"],
    interests: ["Yoga", "Technology", "Meditation", "Cooking"],
    isOnline: true,
    verified: false
  },
  {
    id: "4",
    name: "Michael Thompson",
    age: 30,
    location: "Chicago, IL",
    bio: "Chef with a passion for creating amazing experiences. Let's cook something beautiful together!",
    images: ["https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"],
    interests: ["Cooking", "Wine", "Travel", "Music"],
    isOnline: false,
    lastSeen: "1 day ago",
    verified: true
  }
];

export const demoMatches: Match[] = [
  {
    id: "1",
    userId: "current-user",
    matchedUserId: "1",
    timestamp: "2024-01-15T10:30:00Z",
    lastMessage: "Hey! Thanks for the match! 😊",
    unreadCount: 2
  },
  {
    id: "2",
    userId: "current-user",
    matchedUserId: "2",
    timestamp: "2024-01-14T15:45:00Z",
    lastMessage: "That photo is amazing! Where was it taken?",
    unreadCount: 0
  },
  {
    id: "3",
    userId: "current-user",
    matchedUserId: "3",
    timestamp: "2024-01-13T09:20:00Z",
    lastMessage: "Would love to try that yoga class you mentioned!",
    unreadCount: 1
  }
];

export const adminStats: AdminStats = {
  totalUsers: 12847,
  activeUsers: 3421,
  totalMatches: 6892,
  dailySignups: 127,
  revenue: 45600,
  reportedUsers: 23
};