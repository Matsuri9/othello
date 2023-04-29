import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  // ボックスの状態を持つstateを作成する
  const [boxes, setBoxes] = useState(
    Array.from(Array(64), (_, index) => ({
      id: index + 1, // idの初期値を設定
      state: 'empty', // stateの初期値を設定
    }))
  );

  // ボックスをクリックしたときに状態を変更する
  const handleClickBox = (id: number) => {
    // boxesの中からidが一致するboxのstateを更新する
    const newBoxes = boxes.map((box) => (box.id === id ? { ...box, state: 'black' } : box));
    setBoxes(newBoxes);
    console.log(`id: ${id}, state: ${newBoxes[id - 1].state}`); // 追加
    changeBoxState(id, 'black');
  };

  const changeBoxState = (id: number, newState: string) => {
    const newBoxes = boxes.map((box) => (box.id === id ? { ...box, state: newState } : box));
    setBoxes(newBoxes);
  };

  // コンポーネントのレンダリング
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {boxes.map((box) => (
          <div className={styles.box} key={box.id} onClick={() => handleClickBox(box.id)}>
            <div className={`${styles.disc} ${styles[box.state]}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
