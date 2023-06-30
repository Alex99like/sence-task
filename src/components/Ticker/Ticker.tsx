import React from 'react'
import Marquee from "react-fast-marquee";
import styles from './Ticker.module.scss'

const ImageTik = 'https://static.tildacdn.com/tild3633-3266-4063-a663-303865386166/Frame_222.png'

export const Ticker = () => {
  return (
    <Marquee className={styles.wrapper}>
      <img src={ImageTik} alt="" />
    </Marquee>
  )
}
