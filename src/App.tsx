import { Dashboard, Footer } from './components';

import { TasksProvider } from './context/TaskProvider';

import './App.css';
import './tailwindStyles';


function App() {
  return (
    <TasksProvider>
      <div id="center">
        <Dashboard />
        <Footer />
      </div>
    </TasksProvider>
  );
}

export default App;
