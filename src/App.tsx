import 'reactflow/dist/style.css';
import ReactFlow, {
  Background,
  ConnectionMode,
  Controls,
  addEdge,
  useEdgesState,
  Connection,
  useNodesState,
} from 'reactflow';
import { zinc } from 'tailwindcss/colors';
import { Square } from './components/nodes/Square';
import { useCallback } from 'react';
import DefaultEdge from './components/edges/DefaultEdge';
import * as Toolbar from '@radix-ui/react-toolbar';

const NODE_TYPES = {
  square: Square,
};

const EDGE_TYPES = {
  default: DefaultEdge,
};

const INITIAL_NODES = [
  {
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 200,
      y: 400,
    },
    data: { name: 'Jane Doe', job: 'CEO', emoji: '😎' },
  },
  {
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 600,
      y: 400,
    },
    data: { name: 'Tyler Weary', job: 'Designer', emoji: '🤓' },
  },
];

function App() {
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodes, setNodes, onNodesChange] = useNodesState(INITIAL_NODES);

  const onConnect = useCallback((connection: Connection) => {
    return setEdges((edges) => addEdge(connection, edges));
  }, []);

  function addSquareNode() {
    setNodes((nodes) => [
      ...nodes,
      {
        id: crypto.randomUUID(),
        type: 'square',
        position: {
          x: 600,
          y: 800,
        },
        data: { name: 'Kristi Price', job: 'Developer', emoji: '🤩' },
      },
    ]);
  }

  return (
    <div className="w-screen h-screen">
      <ReactFlow
        nodes={nodes}
        nodeTypes={NODE_TYPES}
        onNodesChange={onNodesChange}
        edges={edges}
        edgeTypes={EDGE_TYPES}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        connectionMode={ConnectionMode.Loose}
        defaultEdgeOptions={{ type: 'default' }}
        className="bg-teal-50"
      >
        <Background gap={12} size={2} color={zinc[200]} />
        <Controls />
      </ReactFlow>

      <Toolbar.Root
        className="
          fixed 
          bottom-20 
          left-1/2 
          -translate-x-1/2 
          bg-white 
          rounded-2xl 
          shadow-lg 
          border 
          border-zinc-300 
          px-8 
          h-16
          w-96
          overflow-hidden"
      >
        <Toolbar.Button
          onClick={addSquareNode}
          className="
            w-28
            h-28
            mt-6 
            shadow-md 
            rounded-md 
            bg-white 
            border-2 
            border-stone-400
            transition-transform
            hover:-translate-y-2"
        />
      </Toolbar.Root>
    </div>
  );
}

export default App;
