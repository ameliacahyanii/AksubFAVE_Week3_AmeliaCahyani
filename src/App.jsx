import { useMemo } from "react";
import Header from "./components/Header/Header";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskGroup from "./components/TaskGroup/TaskGroup";
import useTaskStorage from "./hooks/useTaskStorage";
import { getTodayStr } from "./utils/taskHelpers";
import { SAMPLE_TASKS } from "./data/sampleTasks";
import styles from "./App.module.css";

function App() {
  const today = getTodayStr();

  const [tasks, setTasks] = useTaskStorage(
    "tasks",
    SAMPLE_TASKS,
    (loadedTasks) => loadedTasks.filter((task) => task.deadline >= today),
  );

  const handleAddTask = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
  };

  const handleToggle = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const { todayTasks, otherTasks } = useMemo(
    () => ({
      todayTasks: tasks.filter((task) => task.deadline === today),
      otherTasks: tasks.filter((task) => task.deadline > today),
    }),
    [tasks, today],
  );

  return (
    <div className={styles.card}>
      <Header />
      <TaskForm onAddTask={handleAddTask} />

      {todayTasks.length > 0 && (
        <TaskGroup title="Today" tasks={todayTasks} onToggle={handleToggle} />
      )}

      {otherTasks.length > 0 && (
        <TaskGroup title="Other" tasks={otherTasks} onToggle={handleToggle} />
      )}

      {tasks.length === 0 && (
        <p className={styles.emptyState}>No tasks yet. Add one above!</p>
      )}
    </div>
  );
}

export default App;
