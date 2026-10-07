import { Wall } from "../types";

export function ThicknessField({ selected, onThickness }: { selected: Wall, onThickness: (id: string, thickness: number) => void }) {
    if (!selected) return null;
    return (
        <input
            type="number"
            step="0.05"
            value={selected.thickness}
            onChange={(e) => onThickness(selected.id, parseFloat(e.target.value) || 0)}
            style={{
                width: '100%',
                padding: '6px 8px',
                border: '1px solid #ccc',
                borderRadius: 4,
                boxSizing: 'border-box',
                background: '#ffffff',
            }}
        />
    );
};