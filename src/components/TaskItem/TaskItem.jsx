import { getDeadlineLabel } from "../../utils/taskHelpers";
import styles from "./TaskItem.module.css";

function TaskItem({ task, onToggle }) {
  const { label, color, textColor } = getDeadlineLabel(task.deadline);

  return (
    <div className={`${styles.wrapper} ${task.completed ? styles.done : ""}`}>
      <div className={styles.left}>
        <div
          onClick={() => onToggle(task.id)}
          className={`${styles.checkbox} ${
            task.completed ? styles.checkboxChecked : styles.checkboxUnchecked
          }`}
        >
          {task.completed && (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 6L5 9L10 3"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>

        <span
          className={`${styles.title} ${task.completed ? styles.titleDone : ""}`}
        >
          {task.title}
        </span>
      </div>

      <span
        className={styles.badge}
        style={{ backgroundColor: color, color: textColor }}
      >
        {label}
      </span>
    </div>
  );
}

export default TaskItem;
