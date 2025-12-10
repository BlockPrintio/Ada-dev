type LogType = 'info' | 'error' | 'success' | 'warning';
interface LogEntry {
  id: string;
  timestamp: string;
  type: LogType;
  message: string;
  source?: string;
}
interface ConsoleLogProps {
  logs: LogEntry[];
}
export function ConsoleLog({
  logs
}: ConsoleLogProps) {
  const getTypeColor = (type: LogType) => {
    switch (type) {
      case 'error':
        return 'text-terminal-red';
      case 'success':
        return 'text-terminal-green';
      case 'warning':
        return 'text-amber';
      default:
        return 'text-terminal-blue';
    }
  };
  return <div className="font-mono text-xs h-full overflow-y-auto bg-charcoal-dark p-4 rounded-lg border border-charcoal-lighter">
      {logs.map(log => <div key={log.id} className="flex gap-3 mb-1.5 hover:bg-charcoal-lighter/30 px-1 rounded py-0.5">
          <span className="text-gray-600 shrink-0 select-none w-16">
            {log.timestamp}
          </span>
          <span className={`shrink-0 w-20 font-bold ${getTypeColor(log.type)}`}>
            [{log.type.toUpperCase()}]
          </span>
          {log.source && <span className="text-terminal-purple shrink-0 w-24 truncate">
              {log.source}
            </span>}
          <span className="text-gray-300 break-all">{log.message}</span>
        </div>)}
      <div className="mt-2 animate-pulse text-amber">_</div>
    </div>;
}