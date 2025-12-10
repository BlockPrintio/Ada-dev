import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { StatusBar } from './components/StatusBar';
import { Dashboard } from './pages/Dashboard';
import { EditorPage } from './pages/Editor';
import { Templates } from './pages/Templates';
import { Testing } from './pages/Testing';
import { Wallet } from './pages/Wallet';
import { Deployment } from './pages/Deployment';
import { Settings } from './pages/Settings';
import { motion, AnimatePresence } from 'framer-motion';
type View = 'dashboard' | 'editor' | 'templates' | 'testing' | 'wallet' | 'deployment' | 'settings';
export function App() {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'editor':
        return <EditorPage />;
      case 'templates':
        return <Templates />;
      case 'testing':
        return <Testing />;
      case 'wallet':
        return <Wallet />;
      case 'deployment':
        return <Deployment />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };
  return <div className="flex flex-col h-screen w-full bg-charcoal text-gray-300 overflow-hidden font-sans selection:bg-amber/30 selection:text-amber">
      <div className="scanline-overlay" />

      <div className="flex-1 flex overflow-hidden">
        <Sidebar currentView={currentView} onChangeView={setCurrentView} />

        <main className="flex-1 relative overflow-hidden bg-charcoal">
          <AnimatePresence mode="wait">
            <motion.div key={currentView} initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: -10
          }} transition={{
            duration: 0.2
          }} className="h-full w-full">
              {renderView()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      <StatusBar />
    </div>;
}