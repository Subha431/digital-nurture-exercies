import './App.css';
import IndianPlayers from './components/IndianPlayers';
import ListofPlayers from './components/ListofPlayers';

function App() {
  const flag = false;
  return (
    <div>
      {flag ? <ListofPlayers/> : <IndianPlayers/>}
    </div>
  );
}

export default App;
