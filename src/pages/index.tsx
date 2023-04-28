// import './App.css';
import styles from './index.module.css';

// クリック判定
if (typeof window === 'object') {
  const elements = document.querySelectorAll('div');
  elements.forEach((element) => {
    element.addEventListener('click', () => {
      console.log(element.classList.value);
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
