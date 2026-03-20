export function getTodayStr() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function getDeadlineLabel(deadlineStr) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const deadline = new Date(deadlineStr);
  deadline.setHours(0, 0, 0, 0);

  const diffDays = Math.round((deadline - today) / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return { label: "Today", color: "#E8F4FF", textColor: "#2F46DB" };
  }
  if (diffDays === 1) {
    return { label: "Tomorrow", color: "#FFF7E3", textColor: "#D86C01" };
  }

  const weekday = deadline.toLocaleDateString("en-GB", { weekday: "short" });
  const day = deadline.toLocaleDateString("en-GB", { day: "numeric" });
  const month = deadline.toLocaleDateString("en-GB", { month: "short" });
  const formatted = `${weekday}, ${day} ${month}`;

  return { label: formatted, color: "#E4FFE4", textColor: "#367812" };
}
