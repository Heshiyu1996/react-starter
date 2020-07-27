import React, { useEffect, useRef } from 'react';
import Danmu, { getReformedList, escapeHTML } from '@music/danmu';
import { Button } from 'antd';
import list from './data';
// import { getDanmuList } from './../../axios';
import '@music/danmu/dist/index.css';

export default function DanmuComp(props) {
  const danmuRef = useRef();
  useEffect(() => {
    fetchDanmuList();
  }, []);

  const fetchDanmuList = async () => {
    // const data = await getDanmuList();
    // console.log(data, '格式化前的弹幕list');

    console.log(list, '格式化后的弹幕list');
    danmuRef.current = new Danmu({
      comments: list,
      loop: false,
    });
  };

  const play = () => {
    danmuRef.current.play();
  };
  const pause = () => {
    danmuRef.current.pause();
  };

  return (
    <div>
      <Button onClick={play} style={{ position: 'fixed', zIndex: 999999 }}>
        播放
      </Button>
      <Button
        onClick={pause}
        style={{ position: 'fixed', left: '100px', zIndex: 999999 }}
      >
        暂停
      </Button>
    </div>
  );
}
