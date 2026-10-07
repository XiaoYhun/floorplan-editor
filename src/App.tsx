import { useEffect, useState } from 'react';
import { Editor } from './components/Editor';
import { SidePanel } from './components/SidePanel';
import { Toolbar } from './components/Toolbar';
import { Point, Wall } from './types';

function App() {
  const [walls, setWalls] = useState<Wall[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [tool, setTool] = useState<'select' | 'pan'>('select');

  // load the floor plan data when the app starts
  useEffect(() => {
    fetch('/plan.json')
      .then((res) => res.json())
      .then((data: any) => {
        setWalls(data.walls);
      })
      .catch(() => {
        // ignore errors, the plan just won't load
      });
  }, []);

  // update one endpoint of a wall
  const handleMoveEndpoint = (id: string, which: 'start' | 'end', p: Point) => {
    setWalls(walls.map((w) => (w.id === id ? { ...w, [which]: p } : w)));
  };

  // update the thickness of a wall
  const handleThickness = (id: string, thickness: number) => {
    setWalls(walls.map((w) => (w.id === id ? { ...w, thickness } : w)));
  };

  return (
    <div className="app">
      <Toolbar tool={tool} onTool={setTool} />
      <div className="main">
        <Editor
          walls={walls}
          selectedId={selectedId}
          tool={tool}
          onSelect={setSelectedId}
          onMoveEndpoint={handleMoveEndpoint}
        />
        <SidePanel
          walls={walls}
          selectedId={selectedId}
          onSelect={setSelectedId}
          onThickness={handleThickness}
        />
      </div>
    </div>
  );
}

export default App;
