// import './App.css';
import styles from './index.module.css';

const Home = () => {
  const clickBox = (x: number) => {
    // 実際には何かの処理を記述する
    console.log(`Box ${x} has been clicked`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {Array.from(Array(64), (_, index) => index + 1).map((x) => (
          <div className={styles.box} key={x} onClick={() => clickBox(x)}>
            <div className={styles.disc} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
