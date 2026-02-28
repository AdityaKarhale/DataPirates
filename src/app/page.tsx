'use client';

import { ChatContainer } from '@/components/wiki-agent/chat-container';

export default function Home() {
  return (
    <main className="flex h-screen flex-col bg-gradient-to-b from-slate-50 to-slate-100">
      <ChatContainer />
    </main>
  );
}