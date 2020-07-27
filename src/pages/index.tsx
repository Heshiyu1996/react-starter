import React from 'react';
import Danmu from './../components/danmu';
import styles from './index.less';

export default () => {
  return (
    <div className={styles.title}>
      <Danmu />
    </div>
  );
};
