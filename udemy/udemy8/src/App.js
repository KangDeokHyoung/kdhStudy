import React, { useEffect, useState, useCallback } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

function App() {
  const [tasks, setTasks] = useState([]);
  const transformTasks = useCallback((tasksobj) => {
    const loadedTasks = [];
    for (const taskKey in tasksobj) {
      loadedTasks.push({ id: taskKey, text: tasksobj[taskKey].text });
    }
    setTasks(loadedTasks);
  }, []);
  const httpData = useHttp(
    {
      url: "https://react-http-4c666-default-rtdb.firebaseio.com/tasks.json",
    },
    transformTasks
  );

  const { isLoading, error, sendRequest } = httpData;

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={sendRequest}
      />
    </React.Fragment>
  );
}

export default App;
