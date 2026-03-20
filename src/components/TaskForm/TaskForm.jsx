import { useState } from "react";
import { getTodayStr } from "../../utils/taskHelpers";
import styles from "./TaskForm.module.css";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    if (!title.trim() || !date) return;

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      deadline: date,
      completed: false,
    };

    onAddTask(newTask);
    setTitle("");
    setDate("");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.field}>
        <label className={styles.label}>What do you want to do?</label>
        <input
          type="text"
          placeholder="Study for mid exams..."
          maxLength={100}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          className={styles.input}
        />
      </div>

      <div className={styles.fieldDate}>
        <label className={styles.label}>When should it be done?</label>
        <input
          type="date"
          min={getTodayStr()}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={`${styles.input} ${styles.inputDate}`}
        />
      </div>

      <button onClick={handleSubmit} className={styles.button}>
        Create
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M2 7L5.5 10.5L12 3.5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default TaskForm;
