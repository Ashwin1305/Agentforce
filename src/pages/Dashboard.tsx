import { useState } from 'react';
import AgentGrid from '../components/AgentGrid';
import Navbar from '../components/Navbar';
import { Bot, Search, Filter } from 'lucide-react';

const Agents = [
  {
    id: '1',
    name: 'TrackGS',
    subject: 'Log Tracking Agent',
    description: 'This agent effortlessly analyzes large log datasets with advanced tracking, seamless retrieval, and sequential viewing, delivering comprehensive insights across multiple files at once.',
    imageUrl: '/public/TrackGS.jpg',
    category: 'Tracking',
    supportEmail: 'editeam@blueyonder.com',
    publishedDate: '2025-01-25',
    accessLevel: 'team',
  },
  {
    id: '2',
    name: 'ValidateIQ',
    subject: 'Data Validation Agent',
    description: 'This agent validates global standard and customer-specific X12 and EDIFACT files for any message types. It enables rules management, allowing users to manage any dataset in real time.',
    imageUrl: '/public/ValidateIQ.png',
    category: 'Validation',
    supportEmail: 'editeam@blueyonder.com',
    publishedDate: '2025-02-05',
    accessLevel: 'all'
  },
    {
    id: '3',
    name: 'FileEase (Coming Soon)',
    subject: 'Data Retrieval Agent',
    description: 'This agent is capable of retrieving multiple files at once, effortlessly navigating and extracting data from various customer archives in a single operation.',
    imageUrl: '/public/FileEase.png',
    category: 'Retrieval',
    supportEmail: 'editeam@blueyonder.com',
    publishedDate: '2025-04-05',
    accessLevel: 'team'
  },
];

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = ['all', ...new Set(Agents.map(agent => agent.category))];
  
  const filteredAgents = Agents.filter(agent => {
    const matchesSearch = 
      agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || agent.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-sky-500">Discover Agents</h1>
          <p className="text-sm text-gray-600 mt-2">
            Explore cutting-edge agents curated to make your work more efficient and increase productivity.
          </p>
  
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="space-y-4">
            <div className="max-w-2xl mx-auto mb-6"> {/* Added mb-8 for margin bottom */}
              <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search agents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-10 py-2 text-sm bg-white border border-gray-200 rounded-lg shadow-sm focus:ring-1 focus:border-sky-100 transition-all outline-none"
              />
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-md transition-colors"
              >
                <Filter className={`h-4 w-4 ${showFilters ? 'text-sky-500' : 'text-gray-400'}`} />
              </button>
              
              {showFilters && (
                <div className="absolute right-0 mt-1 w-40 bg-white rounded-lg shadow-lg py-1 z-10">
                  <div className="px-3 py-1.5 text-xs text-gray-700 font-medium border-b border-gray-100">
                    Categories
                  </div>
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-3 py-1.5 text-xs hover:bg-sky-50 transition-colors ${
                        selectedCategory === category ? 'text-sky-600 bg-sky-50' : 'text-gray-700'
                      }`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          </div>
          

          <AgentGrid agents={filteredAgents} />
          
          {filteredAgents.length === 0 && (
            <div className="text-center py-8">
              <Bot className="mx-auto h-8 w-8 text-gray-400" />
              <h3 className="mt-3 text-sm font-medium text-gray-900">No agents found</h3>
              <p className="mt-1 text-left text-xs text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
        </div>
      </div>
      </div>

  );
}