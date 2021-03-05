import logo from './logo.svg';
import './App.css';
import RefDemo from './RefDemo/RefDemo';
import Focusedinput from './FocusedInput/Focusedinput';
import ClassTimer from './ClassTimer/ClassTimer';
import HooksTimer from './HooksTimer/HooksTimer';

const App = () =>  {

  return (
    <div className="App">
     {/* <RefDemo/> */}
     {/* on page load input element get focused */}
    {/* <Focusedinput/> */}
    <ClassTimer/>
    <HooksTimer/>
    </div>
  );
}

export default App;
