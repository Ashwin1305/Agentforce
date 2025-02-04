import { Agent } from '../types';
import { Bot, ArrowUpRight, Mail, Calendar, Users, Bookmark } from 'lucide-react';

interface AgentCardProps {
  agent: Agent;
  onClick: (agent: Agent) => void;
}

export default function AgentCard({ agent, onClick }: AgentCardProps) {
  return (
    <div
      onClick={() => onClick(agent)}
      className="group bg-white backdrop-blur-lg rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden animate-slide-in border border-gray-100 hover:border-sky-200 hover:scale-105 hover:bg-sky-50 cursor-pointer"
      style={{ height: '220px' }} // Fixed height for consistent card size
    >
      <div className="p-4 h-full flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center group-hover:bg-sky-600 transition-colors">
                <Bot className="w-4 h-4 text-white group-hover:animate-bounce" />
              </div>
              <h3 className="text-sm font-semibold text-[#002552] group-hover:text-sky-600 transition-colors">
                {agent.name}
              </h3>
            </div>
            <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-sky-500 transition-colors" />
          </div>

          {/* Added padding space after the title */}
          <div className="flex items-center text-xs text-gray-500 mt-2">
            <Bookmark className="w-3 h-3 mr-1" />
            {agent.subject}
          </div>

          <p className="text-xs text-gray-600 text-left mt-2">
            {agent.description}
          </p>
        </div>

        <div className="pt-2 border-t border-gray-100 space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center text-gray-500">
              <Mail className="w-3 h-3 mr-1" />
              <a 
                href={`mailto:${agent.supportEmail}`}
                onClick={(e) => e.stopPropagation()}
                className="hover:text-sky-600 transition-colors"
              >
                {agent.supportEmail}
              </a>
            </div>
            <div className="flex items-center text-gray-500">
              <Calendar className="w-3 h-3 mr-1" />
              {new Date(agent.publishedDate).toLocaleDateString()}
            </div>
          </div>
          
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center">
              <Users className="w-3 h-3 mr-1" />
              <span className={`px-1.5 py-0.5 rounded-full text-xs font-medium ${
                agent.accessLevel === 'all' 
                  ? 'bg-green-100 text-green-700 group-hover:bg-green-200 group-hover:text-green-800'
                  : 'bg-amber-100 text-amber-700 group-hover:bg-amber-200 group-hover:text-amber-800'
              }`}>
                {agent.accessLevel === 'all' ? 'Available to All' : 'Team Specific'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}