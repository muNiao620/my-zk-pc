import ProLayoutLeft from "./components/Layout";
import { HashRouter } from 'react-router-dom'
function App() {
  return (
    <HashRouter>
      <div className="App">
        <ProLayoutLeft />
      </div>
    </HashRouter>
  );
}

export default App;
