import React from 'react';
import { ConsoleLog } from '../components/ConsoleLog';
import { Play, RotateCcw, Filter } from 'lucide-react';
export function Testing() {
  const logs = [{
    id: '1',
    timestamp: '10:42:01',
    type: 'info' as const,
    message: 'Starting test suite: Authentication',
    source: 'Auth.test.ts'
  }, {
    id: '2',
    timestamp: '10:42:02',
    type: 'success' as const,
    message: '✓ Login with valid credentials passed',
    source: 'Auth.test.ts'
  }, {
    id: '3',
    timestamp: '10:42:02',
    type: 'success' as const,
    message: '✓ Logout clears session passed',
    source: 'Auth.test.ts'
  }, {
    id: '4',
    timestamp: '10:42:03',
    type: 'warning' as const,
    message: 'Test took longer than expected (150ms)',
    source: 'Auth.test.ts'
  }, {
    id: '5',
    timestamp: '10:42:03',
    type: 'info' as const,
    message: 'Starting test suite: Token Transfer',
    source: 'Token.test.ts'
  }, {
    id: '6',
    timestamp: '10:42:04',
    type: 'error' as const,
    message: '✗ Insufficient funds check failed',
    source: 'Token.test.ts'
  }, {
    id: '7',
    timestamp: '10:42:04',
    type: 'error' as const,
    message: '  Expected: "Error: Low Balance", Received: "Success"',
    source: 'Token.test.ts'
  }, {
    id: '8',
    timestamp: '10:42:05',
    type: 'info' as const,
    message: 'Test suite completed with 2 errors',
    source: 'System'
  }];
  return <div className="flex flex-col h-full bg-charcoal p-4">
      <header className="flex justify-between items-center mb-4 pb-4 border-b border-charcoal-lighter">
        <h2 className="text-xl font-bold text-gray-100 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-terminal-red animate-pulse"></span>
          Test Runner
        </h2>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3 py-1.5 bg-charcoal-lighter hover:bg-charcoal-light text-gray-300 rounded text-sm transition-colors">
            <Filter size={14} />
            Filter
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-charcoal-lighter hover:bg-charcoal-light text-gray-300 rounded text-sm transition-colors">
            <RotateCcw size={14} />
            Reset
          </button>
          <button className="flex items-center gap-2 px-4 py-1.5 bg-terminal-green text-charcoal-dark font-bold rounded text-sm hover:bg-terminal-green/90 transition-colors">
            <Play size={14} fill="currentColor" />
            Run All Tests
          </button>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-4 h-full min-h-0">
        <div className="col-span-1 bg-charcoal-light rounded-lg border border-charcoal-lighter p-4 overflow-y-auto">
          <h3 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">
            Test Suites
          </h3>
          <div className="space-y-2">
            {['Auth.test.ts', 'Token.test.ts', 'Wallet.test.ts', 'Network.test.ts'].map((suite, i) => <div key={suite} className="flex items-center justify-between p-2 rounded hover:bg-charcoal-lighter cursor-pointer group">
                <span className="text-sm text-gray-300 font-mono">{suite}</span>
                <span className={`text-xs px-1.5 py-0.5 rounded ${i === 1 ? 'bg-terminal-red/20 text-terminal-red' : 'bg-terminal-green/20 text-terminal-green'}`}>
                  {i === 1 ? 'FAIL' : 'PASS'}
                </span>
              </div>)}
          </div>
        </div>

        <div className="col-span-2 flex flex-col min-h-0">
          <ConsoleLog logs={logs} />
        </div>
      </div>
    </div>;
}