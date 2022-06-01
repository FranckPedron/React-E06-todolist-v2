// == Import
import './style.scss';
import { useState } from 'react';
import Form from '../Form';
import Counter from '../Counter';
import List from '../List';

import tasks from '../../data/tasks';

// == Composant
function App() {
  const [task, setTask] = useState([]);
  const [nbTask, setNbTask] = useState(0);

  return (
    <div className="app">
      <Form task={task} setTask={setTask} />
      <Counter nbTasks={nbTask} />
      <List taskList={tasks} setNbTask={setNbTask} />
    </div>
  );
}

// == Export
export default App;
