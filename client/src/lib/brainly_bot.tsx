import { useState } from 'react';

type Message = {
  text: string;
  sender: 'user' | 'ai';
};

const ChatApp = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user's message
    setMessages((prev) => [...prev, { text: input, sender: 'user' }]);
    setInput('');
    setIsLoading(true);

    // Simulate a request to Gemini AI (you should replace this with your actual request)
    setTimeout(() => {
      // Simulating a response from AI (replace this with actual API call)
      const aiResponse = 'Hello! How can I assist you today?';
      setMessages((prev) => [...prev, { text: aiResponse, sender: 'ai' }]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-xl h-[80vh] overflow-auto p-6">
        {/* Chat Header */}
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Brainly Bot
          </h1>
          <p className="text-xl text-gray-600">Your AI-powered assistant</p>
        </div>

        {/* Chat Messages */}
        <div className="flex flex-col space-y-4 mb-4 overflow-y-auto max-h-[60vh]">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-lg max-w-xs ${
                msg.sender === 'user'
                  ? 'bg-blue-500 text-white self-end'
                  : 'bg-gray-300 text-gray-900 self-start'
              } shadow-md transition-all`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input Section */}
        <div className="flex items-center">
          <input
            type="text"
            className="border border-gray-300 p-3 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button
            className="bg-blue-500 text-white p-3 rounded-r-lg hover:bg-blue-600 active:bg-blue-700 transition-all"
            onClick={handleSend}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="animate-spin">⏳</span>
            ) : (
              <span>Send</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
