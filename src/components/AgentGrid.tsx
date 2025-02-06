import { Agent } from '../types';
import AgentCard from './AgentCard';

interface AgentGridProps {
  agents: Agent[];
}

export default function AgentGrid({ agents }: AgentGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {agents.map((agent) => (
        <AgentCard
          key={agent.id}
          agent={agent}
          onClick={() => {window.open(agent.link, "_blank");}}
        />
      ))}
    </div>
  );
}