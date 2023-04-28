// import './App.css';
import styles from './index.module.css';

// クリック判定

function getClickedClassName(event: MouseEvent): string {
  const clickedElement = event.target as HTMLElement;
  return clickedElement.className;
}

// クリック時の処理を設定
if (typeof window === 'object') {
  document.addEventListener('click', (event) => {
    const clickedClassName = getClickedClassName(event);
    console.log(clickedClassName);
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
