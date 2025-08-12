export type DemoUser = {
  id: string;
  name: string;
  age: number;
  location: string;
  bio: string;
  interests: string[];
  avatar: string;
};

export const demoUsers: DemoUser[] = [
  {
    id: "u1",
    name: "Asha",
    age: 24,
    location: "Kolkata",
    bio: "Tea, poetry and weekend hikes.",
    interests: ["Poetry", "Travel", "Music"],
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "u2",
    name: "Riya",
    age: 26,
    location: "Ranchi",
    bio: "Artist. Cat mom. Coffee lover.",
    interests: ["Art", "Cats", "Coffee"],
    avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "u3",
    name: "Arjun",
    age: 28,
    location: "Bhubaneswar",
    bio: "Runner and amateur chef.",
    interests: ["Running", "Cooking", "Tech"],
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=400&auto=format&fit=crop",
  },
];
