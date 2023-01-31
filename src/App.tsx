import 'reactflow/dist/style.css';
import ReactFlow, { Background, Controls } from 'reactflow';

function App() {
  return (
    <div className="w-screen h-screen">
      <ReactFlow>
        <Background gap={12} size={2} color="#ccc" />
      </ReactFlow>
    </div>
  );
}

export default App;
