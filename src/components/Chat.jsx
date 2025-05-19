import React, { useState } from 'react';

const messages = [
  { id: 1, text: "Hey, how are you?", sender: "other" },
  { id: 2, text: "I'm good! You?", sender: "me" },
  { id: 3, text: "Doing great, thanks for asking!", sender: "other" },
];

const ChatUI = () => {
  const [chatMessages, setChatMessages] = useState(messages);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    setChatMessages([...chatMessages, { id: Date.now(), text: input, sender: 'me' }]);
    setInput('');
  };

  return (
    <div className="flex flex-col h-[500px] w-[90%] mt-[150px] mx-auto rounded-xl shadow overflow-hidden">
      
      {/* Header */}
      <div className="p-4 border-b bg-black text-white">
        <h2 className="text-lg font-semibold">Chat with Alex</h2>
        <p className="text-sm text-blue-100">Online</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
        {chatMessages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
              msg.sender === 'me'
                ? 'ml-auto bg-black text-white rounded-br-none'
                : 'mr-auto bg-gray-200 text-gray-800 rounded-bl-none'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="border-t bg-white p-3 flex items-center">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-black"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="ml-3 bg-black hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatUI;
