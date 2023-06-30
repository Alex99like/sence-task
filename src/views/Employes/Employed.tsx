import styles from './Employed.module.scss'

const LeftImage = 'https://static.tildacdn.com/tild3938-3333-4462-b730-316636626265/image_2.png'
const RightImage = 'https://static.tildacdn.com/tild3236-3330-4539-b236-353739326335/image_5.png'
const BtnImage = 'https://static.tildacdn.com/tild3566-3939-4936-b239-396637393839/_.svg'

const TextImage = 'https://static.tildacdn.com/tild3561-3730-4137-b238-393865313234/____.svg'
const ArrowImage = 'https://static.tildacdn.com/tild3639-3966-4136-b061-346165353433/Vector_12.svg'

export const Employed = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
      <img src={LeftImage} />
        <div className={styles.data}>
          <span>АЛЕКСАНДРА ГОНЧАРОВА</span>
          <img src={BtnImage} />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.data}>
          <span>КСЕНИЯ ИВАНОВА</span>
          <img src={BtnImage} />
        </div>
        <img src={RightImage} alt="" />
        <div className={styles.arrow}>
          <img className={styles.text} src={TextImage} alt="" />
          <img className={styles.line} src={ArrowImage} />
        </div>
      </div>
    </div>
  )
}
