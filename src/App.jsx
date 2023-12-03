import './App.scss';
import Department from './Component/Department';
import Featires from './Component/Features';
import Header from './Component/Header';
import News from './Component/News';
import Shortcodes from './Component/Shortcodes';
import Timetable from './Component/Timetable';



function App() {
  return (
   <>
   <Header />
  <Department />
  <Timetable/>
  <Featires/>
  <Shortcodes/>
  <News/>
   </>
  );
}


export default App;
