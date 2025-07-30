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
    name: "Rani Panda",
    age: 28,
    location: "Malisahi, Bhubaneswar, India",
    bio: "Love hiking, reading, and discovering new coffee shops. Looking for someone who shares my passion for adventure!",
    images: [
      "https://1.bp.blogspot.com/-x2qDZQ_pihE/YWL0DQ7cqTI/AAAAAAAAK6Q/P3PJcbumf7Anvft5KO6XMlPKI5njJF7UgCLcBGAsYHQ/s16000/Rani%2BPanda%2BWiki%252C%2BBiography%252C%2BHeight%252C%2BWeight%252C%2BAge%252C%2BHusband%252C%2BFamily%252C%2BWallpapers.jpg",
      "https://1.bp.blogspot.com/-x2qDZQ_pihE/YWL0DQ7cqTI/AAAAAAAAK6Q/P3PJcbumf7Anvft5KO6XMlPKI5njJF7UgCLcBGAsYHQ/s16000/Rani%2BPanda%2BWiki%252C%2BBiography%252C%2BHeight%252C%2BWeight%252C%2BAge%252C%2BHusband%252C%2BFamily%252C%2BWallpapers.jpg"
    ],
    interests: ["sex", "Hiking", "Reading", "Coffee", "Travel"],
    isOnline: true,
    verified: true
  },
  {
    id: "2",
    name: "Jonny Sines",
    age: 32,
    location: "Los Angeles, CA, USA",
    bio: "Photographer and dog lover. Always looking for the perfect shot and the perfect companion to share life's moments with.",
    images: ["https://tse1.mm.bing.net/th/id/OIP.brmotDoTzzPa59L82D2vigHaHa?pid=Api&P=0&h=180"],
    interests: ["Photography", "Dogs", "Art", "Music"],
    isOnline: false,
    lastSeen: "2 hours ago",
    verified: true
  },
  {
    id: "3",
    name: "Mia Khalifa",
    age: 26,
    location: "San Francisco, CA, USA",
    bio: "Tech enthusiast by day, yoga instructor by evening. Seeking balance in life and love.",
    images: ["https://tse2.mm.bing.net/th/id/OIP.TiZcfrAwC5Y9TqHPkA7RqgHaIO?pid=Api&P=0&h=180"],
    interests: ["Yoga", "Technology", "Meditation", "Cooking"],
    isOnline: true,
    verified: false
  },
  {
    id: "4",
    name: "Michael Thompson",
    age: 30,
    location: "Chicago, IL, USA",
    bio: "Chef with a passion for creating amazing experiences. Let's cook something beautiful together!",
    images: ["https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"],
    interests: ["Cooking", "Wine", "Travel", "Music"],
    isOnline: false,
    lastSeen: "1 day ago",
    verified: true
  },

  // New demo users added below:
  {
    id: "5",
    name: "Aisha Khan",
    age: 24,
    location: "Mumbai, Maharashtra, India",
    bio: "Bearer of chai and books. I love exploring hidden libraries and cozy cafes. Looking for someone to share stories and silence with.",
    images: [
      "https://randomuser.me/api/portraits/women/65.jpg",
      "https://randomuser.me/api/portraits/med/women/65.jpg"
    ],
    interests: ["Reading", "Coffee", "Poetry", "Travel"],
    isOnline: true,
    verified: false
  },
  {
    id: "6",
    name: "Luca Rossi",
    age: 29,
    location: "Rome, Italy",
    bio: "Globetrotter, foodie, and amateur guitarist. Let’s share spaghetti and songs under the Italian sun.",
    images: ["https://randomuser.me/api/portraits/men/32.jpg"],
    interests: ["Music", "Food", "Travel", "Photography"],
    isOnline: false,
    lastSeen: "3 hours ago",
    verified: true
  },
  {
    id: "7",
    name: "Sofia Lopez",
    age: 27,
    location: "Barcelona, Spain",
    bio: "Art curator by day, salsa dancer by night. Seeking someone who can twirl me on the dance floor.",
    images: ["https://randomuser.me/api/portraits/women/22.jpg"],
    interests: ["Art", "Dance", "Travel", "Culture"],
    isOnline: true,
    verified: true
  },
  {
    id: "8",
    name: "Daniel Chen",
    age: 31,
    location: "Singapore",
    bio: "Engineer and amateur barista. I believe the best conversations happen over latte art and long walks.",
    images: ["https://randomuser.me/api/portraits/men/45.jpg"],
    interests: ["Coffee", "Technology", "Walking", "Gaming"],
    isOnline: false,
    lastSeen: "30 minutes ago",
    verified: false
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