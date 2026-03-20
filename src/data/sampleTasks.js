import { getTodayStr } from "../utils/taskHelpers";

const today = getTodayStr();

export const SAMPLE_TASKS = [
  {
    id: 1,
    title: "Complete Data Structures LAB assignment",
    deadline: today,
    completed: false,
  },
  {
    id: 2,
    title: "Attend afternoon daily scrum at ms teams",
    deadline: today,
    completed: false,
  },
];
