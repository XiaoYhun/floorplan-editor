import { Wall } from '../types';
import { ThicknessField } from './ThicknessField';
import './SidePanel.css';

interface SidePanelProps {
  walls: Wall[];
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  onThickness: (id: string, thickness: number) => void;
}

export function SidePanel({ walls, selectedId, onSelect, onThickness }: SidePanelProps) {
  const selected = walls.find((w) => w.id === selectedId);

  return (
    <div className="panel">
      <h2>Walls</h2>
      <div>
        {walls.map((w, i) => (
          <div
            key={i}
            className={w.id === selectedId ? 'row selected' : 'row'}
            onClick={() => onSelect(w.id)}
          >
            {w.id} — {w.length.toFixed(1)} ft
          </div>
        ))}
      </div>
      {selected && (
        <div>
          <div className="field-label">LENGTH</div>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#333' }}>
            {selected.length.toFixed(1)} ft
          </div>
          <div className="field-label">THICKNESS (FT)</div>
          <ThicknessField selected={selected} onThickness={onThickness} />
        </div>
      )}
    </div>
  );
}
