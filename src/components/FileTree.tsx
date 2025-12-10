import React, { useState } from 'react';
import { ChevronRight, ChevronDown, FileCode, Folder, FolderOpen, FileJson, FileType } from 'lucide-react';
interface FileNode {
  id: string;
  name: string;
  type: 'file' | 'folder';
  children?: FileNode[];
  extension?: string;
}
const initialFiles: FileNode[] = [{
  id: 'src',
  name: 'src',
  type: 'folder',
  children: [{
    id: 'components',
    name: 'components',
    type: 'folder',
    children: [{
      id: 'App.tsx',
      name: 'App.tsx',
      type: 'file',
      extension: 'tsx'
    }, {
      id: 'Button.tsx',
      name: 'Button.tsx',
      type: 'file',
      extension: 'tsx'
    }, {
      id: 'Header.tsx',
      name: 'Header.tsx',
      type: 'file',
      extension: 'tsx'
    }]
  }, {
    id: 'utils.ts',
    name: 'utils.ts',
    type: 'file',
    extension: 'ts'
  }, {
    id: 'index.css',
    name: 'index.css',
    type: 'file',
    extension: 'css'
  }]
}, {
  id: 'package.json',
  name: 'package.json',
  type: 'file',
  extension: 'json'
}, {
  id: 'tsconfig.json',
  name: 'tsconfig.json',
  type: 'file',
  extension: 'json'
}, {
  id: 'README.md',
  name: 'README.md',
  type: 'file',
  extension: 'md'
}];
export function FileTree() {
  const [expanded, setExpanded] = useState<Set<string>>(new Set(['src', 'components']));
  const [activeFile, setActiveFile] = useState<string>('App.tsx');
  const toggleFolder = (id: string) => {
    const newExpanded = new Set(expanded);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpanded(newExpanded);
  };
  const getFileIcon = (name: string, type: 'file' | 'folder', isOpen: boolean) => {
    if (type === 'folder') {
      return isOpen ? <FolderOpen size={14} className="text-amber" /> : <Folder size={14} className="text-amber/70" />;
    }
    if (name.endsWith('tsx') || name.endsWith('ts')) return <FileCode size={14} className="text-terminal-blue" />;
    if (name.endsWith('css')) return <FileType size={14} className="text-terminal-purple" />;
    if (name.endsWith('json')) return <FileJson size={14} className="text-terminal-yellow" />;
    return <FileType size={14} className="text-gray-500" />;
  };
  const renderNode = (node: FileNode, depth: number = 0) => {
    const isExpanded = expanded.has(node.id);
    const isActive = activeFile === node.id;
    return <div key={node.id}>
        <div className={`flex items-center gap-1.5 py-1 px-2 cursor-pointer select-none text-sm transition-colors ${isActive ? 'bg-charcoal-lighter text-white' : 'text-gray-400 hover:text-gray-200 hover:bg-charcoal-lighter/50'}`} style={{
        paddingLeft: `${depth * 12 + 8}px`
      } as React.CSSProperties} onClick={() => {
        if (node.type === 'folder') toggleFolder(node.id);else setActiveFile(node.id);
      }}>
          <span className="opacity-70">
            {node.type === 'folder' && (isExpanded ? <ChevronDown size={12} /> : <ChevronRight size={12} />)}
            {node.type === 'file' && <span className="w-3" />}
          </span>

          {getFileIcon(node.name, node.type, isExpanded)}

          <span className="font-mono text-[13px]">{node.name}</span>
        </div>

        {node.type === 'folder' && isExpanded && node.children && <div>
            {node.children.map(child => renderNode(child, depth + 1))}
          </div>}
      </div>;
  };
  return <div className="w-64 bg-charcoal-dark border-r border-charcoal-lighter flex flex-col h-full">
      <div className="p-3 text-xs font-bold text-gray-500 tracking-wider uppercase flex justify-between items-center">
        <span>Explorer</span>
        <span className="bg-charcoal-lighter px-1.5 py-0.5 rounded text-[10px]">
          PROJ-1
        </span>
      </div>
      <div className="flex-1 overflow-y-auto py-2">
        {initialFiles.map(node => renderNode(node))}
      </div>
    </div>;
}