import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar';
import { Banner } from './component/Banner';
import Skill from './component/Skill'
import { Projects } from './component/Projects';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skill />
      <Projects/>
    </div>
  );
}

export default App;
