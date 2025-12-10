import React from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { Plus } from 'lucide-react';
export function Dashboard() {
  return <div className="p-8 h-full overflow-y-auto">
      <header className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-gray-100 mb-2">Dashboard</h1>
          <p className="text-gray-500">
            Welcome back, Developer. You have 3 active projects.
          </p>
        </div>
        <button className="bg-amber hover:bg-amber-dim text-charcoal-dark font-bold py-2 px-4 rounded-md flex items-center gap-2 transition-colors">
          <Plus size={18} />
          New Project
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard title="defi-exchange-v2" description="Next generation decentralized exchange with automated market maker protocol." language="TypeScript" lastEdited="2h ago" branch="feature/liquidity" status="active" />
        <ProjectCard title="nft-marketplace-ui" description="Frontend interface for the NFT marketplace including wallet integration." language="React" lastEdited="5h ago" branch="main" status="building" />
        <ProjectCard title="validator-script-audits" description="Collection of automated audit scripts and security verification tools for Cardano." language="Plutus" lastEdited="2d ago" branch="develop" status="archived" />
        <ProjectCard title="governance-token" description="Native token implementation with voting capabilities and delegation." language="Aiken" lastEdited="1w ago" branch="main" status="archived" />
      </div>
    </div>;
}