// import './App.css';
import styles from './index.module.css';

// クリック判定
if (typeof window === 'object') {
  const elements = document.querySelectorAll('div');
  elements.forEach((element) => {
    element.addEventListener('click', () => {
      if (element.classList.value === 'index_disc__JTT4d') {
        const rect = element.getBoundingClientRect();
        const centerX = rect.x + rect.width / 2;
        const centerY = rect.y + rect.height / 2;
        console.log(`中心の座標は x:${centerX} y:${centerY} です`);
      }
    });
  });
}
// 表示
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
        <div className={styles.box}>
          <div className={styles.disc} />
        </div>
      </div>
    </div>
  );
};

export default Home;
