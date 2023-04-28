// import './App.css';
import styles from './index.module.css';

// クリック判定

if (typeof window === 'object') {
  const elements = document.querySelectorAll('div');
  elements.forEach((element) => {
    element.addEventListener('click', () => {
      if (element.classList.value === 'index_disc__JTT4d') {
        const rect = element.getBoundingClientRect();
        const centerX = Math.floor(rect.x + rect.width / 2);
        const centerY = Math.floor(rect.y + rect.height / 2);
        const discNumber = ((centerY - 12) / 80 - 1) * 8 + (centerX - 130) / 80;
        console.log(`指定されたDiscの番地は ${discNumber} です`);
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
