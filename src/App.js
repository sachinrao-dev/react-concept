import './App.css';
import ComponentA from './component/contextApi/ComponentA';
import { UserProvider } from './component/contextApi/UserContext'
import ComponentB from './component/contextApi/ComponentB';

function App() {
  return (
    <div className="App">
      <UserProvider value = {"Sachin"}>
      <ComponentA />
      </UserProvider>
    </div>
  );
}

export default App;
