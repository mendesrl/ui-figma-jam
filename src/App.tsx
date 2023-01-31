import 'reactflow/dist/style.css';
import ReactFlow, { Background, Controls } from 'reactflow';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow>
        <Background
          gap={12}
          size={2}
          color="#ccc" />
      </ReactFlow>
    </div>
  );
}

export default App;
