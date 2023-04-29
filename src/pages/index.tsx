import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [boxes, setBoxes] = useState(
    Array.from(Array(64), (_, index) => ({
      id: index + 1,
      state: (() => {
        if (index === 27 || index === 36) return 'white';
        if (index === 28 || index === 35) return 'black';
        return 'empty';
      })(),
    }))
  );

  // stateClickedBox = クリックした場所のState
  // id = 場所

  const handleClickBox = (id: number) => {
    const stateClickedBox = boxes.find((box) => box.id === id);
    console.log(`Box ${id} is in state: ${stateClickedBox?.state || 'not found'}`);
    changeBoxState(id, 'black');
  };

  const changeBoxState = (id: number, newState: string) => {
    const newBoxes = boxes.map((box) => (box.id === id ? { ...box, state: newState } : box));
    setBoxes(newBoxes);
  };

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
