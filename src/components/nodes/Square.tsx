import { NodeProps, Handle, Position } from 'reactflow';

export function Square({ data }: NodeProps) {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400">
      <div className="flex">
        <div className="rounded-full w-12 h-12 flex justify-center items-center bg-gray-100">
          {data.emoji}
        </div>
        <div className="ml-2">
          <div className="text-lg font-bold">{data.name}</div>
          <div className="text-gray-500">{data.job}</div>
        </div>
      </div>
      <Handle
        id="right"
        type="source"
        position={Position.Right}
        className="!-right-3 !w-3 !h-3  !bg-teal-500"
      />
      <Handle
        id="left"
        type="source"
        position={Position.Left}
        className="!-left-3 !w-3 !h-3  !bg-teal-500"
      />
      <Handle
        id="top"
        type="source"
        position={Position.Top}
        className="!-top-3 !w-3 !h-3  !bg-teal-500"
      />
      <Handle
        id="bottom"
        type="source"
        position={Position.Bottom}
        className="!-bottom-3 !w-3 !h-3 !bg-teal-500"
      />
    </div>
  );
}
