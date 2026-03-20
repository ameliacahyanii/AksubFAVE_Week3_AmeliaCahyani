import { useState } from "react";
import TaskItem from "../TaskItem/TaskItem";
import styles from "./TaskGroup.module.css";

function TaskGroup({ title, tasks, onToggle }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header} onClick={() => setCollapsed(!collapsed)}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className={`${styles.arrow} ${
            collapsed ? styles.arrowCollapsed : styles.arrowExpanded
          }`}
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="var(--color-text-secondary)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect
            x="2"
            y="3"
            width="14"
            height="13"
            rx="2"
            stroke="var(--color-text-secondary)"
            strokeWidth="1.5"
          />
          <path
            d="M6 1V4M12 1V4"
            stroke="var(--color-text-secondary)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M2 7H16"
            stroke="var(--color-text-secondary)"
            strokeWidth="1.5"
          />
        </svg>

        <span className={styles.groupTitle}>{title}</span>
        <span className={styles.count}>{tasks.length}</span>
      </div>

      {!collapsed && (
        <div>
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} onToggle={onToggle} />
          ))}
        </div>
      )}
    </div>
  );
}

export default TaskGroup;
