import logo from './logo.svg';
import './App.css';
import TableApi from './components/Table';
import Api from './components/Api';
import MultipleData from './components/MultipleData';

function App() {
  return (
    <div className="App">
      <TableApi/>
      <Api/>
      {/* <MultipleData/> */}
     
    </div>
  );
}

export default App;
