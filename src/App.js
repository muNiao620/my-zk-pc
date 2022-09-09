import ProLayoutLeft from "./components/Layout";
import ProLayoutHeader from "./components/Header"
import { HashRouter } from 'react-router-dom'
function App() {
  return (
    <HashRouter>
      <div className="App flex">
        {/* <ProLayoutLeft /> */}
        <ProLayoutHeader />
      </div>
    </HashRouter>
  );
}

export default App;
