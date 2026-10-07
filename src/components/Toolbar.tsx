import { useState } from 'react';

interface ToolbarProps {
  tool: 'select' | 'pan';
  onTool: (tool: 'select' | 'pan') => void;
}

const buttons: { id: 'select' | 'pan'; label: string }[] = [
  { id: 'select', label: 'Select' },
  { id: 'pan', label: 'Pan' },
];

export function Toolbar({ tool, onTool }: ToolbarProps) {
  const [hovered, setHovered] = useState(-1);

  return (
    <div
      style={{
        display: 'flex',
        gap: 8,
        padding: '10px 16px',
        background: '#23272e',
        alignItems: 'center',
      }}
    >
      <span style={{ color: '#ffffff', fontWeight: 600, fontSize: 14, marginRight: 16 }}>
        Floor Plan Editor
      </span>
      {buttons.map((b, i) => (
        <button
          key={i}
          onClick={() => onTool(b.id)}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(-1)}
          style={{
            padding: '6px 14px',
            borderRadius: 4,
            border: '1px solid #3a3f47',
            cursor: 'pointer',
            fontSize: 13,
            background: tool === b.id ? '#4a90d9' : hovered === i ? '#3a3f47' : '#2c313a',
            color: tool === b.id ? '#ffffff' : '#c9ced6',
          }}
        >
          {b.label}
        </button>
      ))}
    </div>
  );
}
