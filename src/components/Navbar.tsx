import { Bot, LogOut } from 'lucide-react';

export default function Navbar() {
  const handleLogout = () => {
  };

  return (
    <nav className="bg-white bg-opacity-70 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-12">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Bot className="h-5 w-5 text-sky-500 animate-float" />
              <div className="absolute inset-0 rounded-full animate-glow"></div>
            </div>
            <span className="text-sm font-semibold bg-gradient-to-r from-sky-600 to-sky-400 bg-clip-text text-transparent">
              Agentforce
            </span>
          </div>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={handleLogout}
              className="flex items-center space-x-1.5 px-3 py-1.5 text-xs text-gray-700 hover:text-sky-600 transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}