import { useEffect, useState } from 'react'
import styles from './Home.module.scss'
import { TypingText } from '../../utils/tickText'

const LogoImage = 'https://static.tildacdn.com/tild6666-3431-4265-b935-376464393766/Group_18.svg'
const btnBG = 'https://static.tildacdn.com/tild3662-6133-4262-b963-333639643037/main_button_green.svg'
const LineBG = 'https://static.tildacdn.com/tild3036-3464-4539-b935-336131346465/line_main.svg'

const ItemOne = 'https://static.tildacdn.com/tild3161-6633-4134-a638-363931326662/250_.svg'
const ItemTwo = 'https://static.tildacdn.com/tild6238-3432-4564-b265-306565616236/_5_.svg'
const ItemThree = 'https://static.tildacdn.com/tild6630-3132-4137-b830-356465383431/27_.svg'

const texts = [
    'делаем крутой маркетинг',
    'smm который продает',
    'бутик агенство полного цикал',
    'запускаем таргет'
]



export const Home = () => {
//   const [text, setText] = useState<string[]>([])
//   const [idx, setIdx] = useState(1)

//   useEffect(() => {
    
//     setTimeout(() => {
//       const index = idx
//       if (text.length === texts[index].length) {
//         setIdx(prev => prev += 1)
//         setText([])
//       }
//       console.log(text.length, texts[index].length)

//       const newText = [...text, texts[index][text.length]]
//       setText(newText)
//     }, 300)
//   }, [text])

  return (
    <section className={styles.wrapper}>
      <div className={styles.logo}>
        <img src={LogoImage} />
        {/* <span className={styles.text}>{TypingText({ texts })}</span> */}
      </div>
      <button className={styles.btn}>
        Оставить заявку
        <img src={btnBG} />
      </button>   
      <div className={styles.data}>
        <div className={styles.item}>
          <img src={ItemOne} />
          <span>реализованных проектов</span>
        </div>
        <div className={styles.item}>
          <img src={ItemTwo} />
          <span>на digital-рынке</span>
        </div>
        <div className={styles.item}>
          <img src={ItemThree} />
          <span>принесли клиентам за последний год</span>
        </div>
        <img className={styles.line} src={LineBG} alt="" />
      </div>     
    </section>
  )
}
