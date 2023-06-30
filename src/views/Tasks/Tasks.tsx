import { useState } from 'react'
import styles from './Tasks.module.scss'

const target = [
  { name: 'SMM', target: 'smm' },
  { name: 'TARGET', target: 'target' },
  { name: 'INFLUENCER MARKETING', target: 'marketing' },
  { name: 'PRODUCTION', target: 'production' },
]

const data: Record<string, Array<{ src: string, name: string }>> = {
  smm: [
    {
      src: 'https://static.tildacdn.com/tild3238-3331-4539-b562-333836316234/Frame_203.jpg',
      name: 'ATLANTIS CURTAINS'
    },
    {
      src: 'https://static.tildacdn.com/tild3735-3733-4961-b837-363433636263/Frame_208.jpg',
      name: 'SIBOLLE'
    },
    {
      src: 'https://static.tildacdn.com/tild3634-3033-4566-b334-613566376336/Frame_202.jpg',
      name: 'IN-U FOOD'
    },
    {
      src: 'https://static.tildacdn.com/tild6665-6439-4162-a363-303661373130/Rectangle_49.png',
      name: 'СИБИРСКИЕ КОЛБАСКИ'
    }
  ],
  target: [
    {
      src: 'https://static.tildacdn.com/tild6161-3132-4432-b932-356336303935/Rectangle_48.png',
      name: 'POISON_DOSE_STORE'
    },
    {
      src: 'https://static.tildacdn.com/tild3233-3062-4561-a535-623234363230/Rectangle_48-2.png',
      name: 'PODIUM STUDIO'
    },
    {
      src: 'https://static.tildacdn.com/tild6639-3730-4062-b066-653331383534/Frame_202.png',
      name: 'YARD'
    },
    {
      src: 'https://static.tildacdn.com/tild6331-3630-4362-a263-316635316530/Rectangle_50.png',
      name: 'ОНЛАЙН-ШКОЛА'
    }
  ],
  marketing: [
    {
      src: 'https://static.tildacdn.com/tild3436-3137-4439-a338-366435626665/Rectangle_48.png',
      name: 'TAYOU'
    },
    {
      src: 'https://static.tildacdn.com/tild3435-6334-4830-a431-323633323733/Frame_203.png',
      name: 'ДЕВЕЛОПЕР ЭЛИТНОЙ НЕДВИЖИМОСТИ В МОСКВЕ'
    },
    {
      src: 'https://static.tildacdn.com/tild3634-3033-4566-b334-613566376336/Frame_202.jpg',
      name: 'ECLAT'
    },
    {
      src: 'https://static.tildacdn.com/tild6331-3630-4362-a263-316635316530/Rectangle_50.png',
      name: 'ОНЛАЙН-ШКОЛА'
    }
  ],
  production: [
    {
      src: 'https://static.tildacdn.com/tild3766-6266-4565-b033-653563323837/image_6.png',
      name: 'CHICOLLE'
    },
  ]
};

export const Tasks = () => {
  const [targetItem, setTargetItem] = useState('smm')

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>КЕЙСЫ</h2>
      <div className={styles.target}>
        {target.map(item => (
          <button 
            className={`${styles.btn} ${targetItem === item.target ? styles.active : ''}`} 
            onClick={() => setTargetItem(item.target)}
          >{item.name}</button>
        ))}
      </div>
      <div className={styles.container}>
        {data[targetItem].map((el) => (
          <div className={styles.item}>
            <img src={el.src} alt="" />
            <span>{el.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
