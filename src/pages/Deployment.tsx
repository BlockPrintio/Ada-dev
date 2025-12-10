import React from 'react';
import { Rocket, CheckCircle, Clock, AlertCircle, Terminal } from 'lucide-react';
export function Deployment() {
  return <div className="p-8 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-100 mb-2">Deployments</h1>
          <p className="text-gray-500">
            Deploy validator scripts to Cardano networks via Blockfrost.
          </p>
        </div>
        <button className="bg-terminal-purple hover:bg-terminal-purple/90 text-white font-bold py-2 px-6 rounded-md flex items-center gap-2 transition-colors shadow-lg shadow-terminal-purple/20">
          <Rocket size={18} />
          New Deployment
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Mainnet Status */}
        <div className="bg-charcoal-light border border-terminal-green/30 rounded-lg p-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Rocket size={100} />
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2 py-0.5 rounded text-xs font-bold bg-terminal-green/20 text-terminal-green border border-terminal-green/30">
              MAINNET
            </span>
            <span className="text-gray-500 text-xs font-mono">v2.4.0</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">dex-validator</h3>
          <a href="#" className="text-terminal-blue hover:underline text-sm mb-6 block font-mono">
            addr1qx...7k9m
          </a>

          <div className="flex items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle size={14} className="text-terminal-green" />
              <span>Active</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              <span>Epoch 445</span>
            </div>
          </div>
        </div>

        {/* Preprod Status */}
        <div className="bg-charcoal-light border border-charcoal-lighter rounded-lg p-6 relative overflow-hidden">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2 py-0.5 rounded text-xs font-bold bg-amber/20 text-amber border border-amber/30">
              PREPROD
            </span>
            <span className="text-gray-500 text-xs font-mono">v2.4.1-beta</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">
            dex-validator-test
          </h3>
          <a href="#" className="text-terminal-blue hover:underline text-sm mb-6 block font-mono">
            addr_test1qz...3n2p
          </a>

          <div className="flex items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle size={14} className="text-terminal-green" />
              <span>Active</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              <span>Epoch 112</span>
            </div>
          </div>
        </div>

        {/* Preview Status */}
        <div className="bg-charcoal-light border border-charcoal-lighter rounded-lg p-6 relative overflow-hidden">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2 py-0.5 rounded text-xs font-bold bg-terminal-blue/20 text-terminal-blue border border-terminal-blue/30">
              PREVIEW
            </span>
            <span className="text-gray-500 text-xs font-mono">v2.5.0-dev</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">
            experimental-v3
          </h3>
          <a href="#" className="text-terminal-blue hover:underline text-sm mb-6 block font-mono">
            addr_test1qp...8x4k
          </a>

          <div className="flex items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle size={14} className="text-terminal-green" />
              <span>Active</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              <span>Epoch 89</span>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Log */}
      <div className="bg-charcoal-dark border border-charcoal-lighter rounded-lg overflow-hidden">
        <div className="p-4 bg-charcoal-light border-b border-charcoal-lighter flex items-center gap-2">
          <Terminal size={16} className="text-gray-400" />
          <h3 className="font-bold text-gray-300 text-sm">
            Deployment Activity
          </h3>
        </div>
        <div className="p-4 space-y-4">
          {[{
          status: 'success',
          msg: 'Deployed v2.4.0 validator script to Mainnet',
          time: '5 mins ago',
          user: 'alex'
        }, {
          status: 'success',
          msg: 'Plutus compilation completed for commit 8f3a21',
          time: '7 mins ago',
          user: 'system'
        }, {
          status: 'error',
          msg: 'Deployment failed: Transaction fee estimation timeout',
          time: '2 hours ago',
          user: 'system'
        }, {
          status: 'warning',
          msg: 'Rollback initiated to v2.3.9 on Preprod',
          time: '2 hours ago',
          user: 'alex'
        }].map((log, i) => <div key={i} className="flex items-start gap-4 text-sm font-mono">
              <div className="mt-1">
                {log.status === 'success' && <CheckCircle size={14} className="text-terminal-green" />}
                {log.status === 'error' && <AlertCircle size={14} className="text-terminal-red" />}
                {log.status === 'warning' && <AlertCircle size={14} className="text-amber" />}
              </div>
              <div className="flex-1">
                <p className="text-gray-300">{log.msg}</p>
                <div className="flex gap-2 text-xs text-gray-600 mt-0.5">
                  <span>{log.time}</span>
                  <span>•</span>
                  <span>by {log.user}</span>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
}