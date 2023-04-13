import { useState } from 'react';
import { FormComponent } from './components'
import logo from './img/logo.png'
import styles from './App.module.css';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <div className={styles.logoWrapper}>
          <img src={logo} alt='logo' />
        </div>
        <button onClick={() => setIsLogin(true)}>Log in</button>
      </div>
      <div className={styles.centerWrapper}>
        <p className={styles.topTitle}>starcompany designs, manufactures and</p>
        <p className={styles.bottomTitle}>Launches Advansed Rockets and SpaceCrafts</p>
        {isLogin && <FormComponent />}
      </div>
    </div>
  );
}

export default App;
