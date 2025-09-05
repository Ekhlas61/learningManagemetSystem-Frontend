"use client";
import { useState } from "react";

type Post = {
  id: number;
  author: string;
  content: string;
  time: string;
};

export default function ForumPage() {
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, author: "Alice", content: "How to prepare for the CSC101 midterm?", time: "2h ago" },
    { id: 2, author: "John", content: "Anyone has notes for week 3 Calculus?", time: "5h ago" },
  ]);
  const [newPost, setNewPost] = useState("");

  const submitPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.trim()) return;
    const next: Post = {
      id: posts.length + 1,
      author: "You",
      content: newPost.trim(),
      time: "Just now",
    };
    setPosts([next, ...posts]);
    setNewPost("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="max-w-3xl mx-auto space-y-4">
        <h1 className="text-2xl font-bold text-blue-900">Forum</h1>

        <form onSubmit={submitPost} className="bg-white rounded-xl shadow p-4">
          <label htmlFor="post" className="block text-sm font-medium text-gray-700 mb-2">
            Start a discussion
          </label>
          <textarea
            id="post"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Share something with your classmates..."
            className="w-full min-h-24 border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
          <div className="flex justify-end mt-3">
            <button type="submit" className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
              Post
            </button>
          </div>
        </form>

        <div className="space-y-3">
          {posts.map((p) => (
            <div key={p.id} className="bg-white rounded-xl shadow p-4">
              <div className="flex items-center justify-between mb-1">
                <p className="font-semibold text-gray-800">{p.author}</p>
                <span className="text-xs text-gray-500">{p.time}</span>
              </div>
              <p className="text-gray-700">{p.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


