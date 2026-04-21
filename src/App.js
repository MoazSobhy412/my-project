import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar';
import { Banner } from './component/Banner';
import Skill from './component/Skill'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skill />
    </div>
  );
}

export default App;
