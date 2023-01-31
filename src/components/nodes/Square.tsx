import { NodeProps, Handle, Position } from 'reactflow';

export function Square(props: NodeProps) {
  return (
    <div className="bg-indigo-500 rounded w-[200px] h-[200px]">
      <Handle
        id="right"
        type="source"
        position={Position.Right}
        style={{ background: '#fff' }}
      />
      <Handle
        id="left"
        type="source"
        position={Position.Left}
        style={{ background: '#fff' }}
      />
      <Handle id="top" type="source" position={Position.Top} />
      <Handle id="bottom" type="source" position={Position.Bottom} />
    </div>
  );
}
