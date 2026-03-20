import styles from "./Header.module.css";

function Header() {
  const now = new Date();

  const hour = now.getHours();
  let greeting = "Good Morning";
  if (hour >= 12 && hour < 17) greeting = "Good Afternoon";
  else if (hour >= 17) greeting = "Good Evening";

  const formattedDate = now.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{greeting}, User 👋</h1>
      <p className={styles.subtitle}>It's {formattedDate}</p>
    </div>
  );
}

export default Header;
