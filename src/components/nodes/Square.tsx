import { NodeProps, Handle, Position } from 'reactflow';

export function Square(props: NodeProps) {
  return (
    <div className="bg-indigo-500 rounded w-[200px] h-[200px]">
      <Handle
        id="right"
        type="source"
        position={Position.Right}
        className="-right-5 w-3 h-3 bg-red-700"
      />
      <Handle id="left" type="source" position={Position.Left} />
    </div>
  );
}
