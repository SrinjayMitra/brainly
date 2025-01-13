import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the hook for navigation
import { BACKENDURL } from './utils';
// import Markdown from 'markdown-to-jsx';

type Message = {
  text: string;
  sender: 'user' | 'ai';
};

const ChatApp = () => {
  const navigate = useNavigate(); // Create the navigate function
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { text: input, sender: 'user' }]);
    setInput('');
    setIsLoading(true);

    try {
      const aiResponse = await axios.get(`${BACKENDURL}/chat`, {
        params: { message: input }
      });

      setMessages((prev) => [...prev, { text: aiResponse.data.mssg, sender: 'ai' }]);
    } catch (error) {
      console.error('Error fetching AI response:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const goBackToHome = () => {
    navigate('/dashboard'); // This will navigate to the homepage route
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-xl h-[80vh] overflow-auto p-6">
        <div className="text-center mb-4 space-y-4">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Brainly-Bot
          </h1>
          <p className="text-xl text-gray-600">Your AI-powered assistant</p>
        </div>

        <div className="flex flex-col space-y-4 mb-4 overflow-y-auto max-h-[60vh] no-scrollbar">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-lg max-w-xs ${
                msg.sender === 'user'
                  ? 'bg-blue-500 text-white self-end'
                  : 'bg-gray-300 text-gray-900 self-start'
              } shadow-md transition-all`}
            >
              <div>{msg.text}</div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="flex items-center">
          <input
            type="text"
            className="border border-gray-300 p-3 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSend();
              }
            }}
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

      {/* Modern Go Back Button */}
      <div
  onClick={goBackToHome}
  className="fixed bottom-5 right-5 bg-blue-600 p-4 rounded-full shadow-xl cursor-pointer transform transition-all hover:scale-125 hover:bg-blue-700"
>
  <div className="flex items-center justify-center">
    {/* Icon for Go Home */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="white"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M12 3L2 12h3v7h6v-5h2v5h6v-7h3L12 3z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-white text-sm font-semibold ml-2">Go Home</span>
  </div>
</div>

    </div>
  );
};

export default ChatApp;
