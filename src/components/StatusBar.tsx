import { Wifi, GitBranch, Bell, ShieldCheck } from 'lucide-react';
export function StatusBar() {
  return <footer className="h-8 bg-charcoal-dark border-t border-charcoal-lighter flex items-center justify-between px-4 text-[10px] font-mono text-gray-500 select-none z-20">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5 text-terminal-green hover:text-terminal-green/80 cursor-pointer transition-colors">
          <Wifi size={12} />
          <span>CONNECTED</span>
        </div>
        <div className="flex items-center gap-1.5 hover:text-gray-300 cursor-pointer transition-colors">
          <GitBranch size={12} />
          <span>main*</span>
        </div>
        <div className="flex items-center gap-1.5 hover:text-gray-300 cursor-pointer transition-colors">
          <ShieldCheck size={12} />
          <span>0 Errors</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-2 py-0.5 rounded bg-charcoal-lighter/50">
          <div className="w-2 h-2 rounded-full bg-amber animate-pulse" />
          <span className="text-amber">Building...</span>
        </div>
        <div className="flex items-center gap-1.5 hover:text-gray-300 cursor-pointer transition-colors">
          <span>UTF-8</span>
        </div>
        <div className="flex items-center gap-1.5 hover:text-gray-300 cursor-pointer transition-colors">
          <span>TypeScript React</span>
        </div>
        <div className="flex items-center gap-1.5 hover:text-gray-300 cursor-pointer transition-colors">
          <Bell size={12} />
        </div>
      </div>
    </footer>;
}