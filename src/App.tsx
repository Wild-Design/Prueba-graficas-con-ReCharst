import './App.css';
import SimpleBarCharts from './components/SimpleBarCharts';
import SimplePieCharts from './components/SimplePieCharts';
import StackedAreaCharts from './components/StackedAreaCharts';

function App() {
  return (
    <div className='container'>
      <SimpleBarCharts />
      <StackedAreaCharts />
      <SimplePieCharts/>
    </div>
  );
}

export default App;
