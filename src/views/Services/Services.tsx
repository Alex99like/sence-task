import React from 'react'
import styles from './Services.module.scss'

const items = [
    'SMM', 'TARGET', 'КОНТЕКСТНАЯ РЕКЛАМА', 'BRADING', 'WEB-DESIGN', 'DIGITAL-STRATEGY', 'PRODUCTION', 'CONSULTING', 'PR', 'INFLUENCER MARKETING'
]

const TextImage = 'https://static.tildacdn.com/tild6463-3162-4164-a666-356631373136/_____.svg'
const LineImage = 'https://static.tildacdn.com/tild6162-3963-4563-b963-393036613237/Vector_36.svg'
const BtnImage = 'https://static.tildacdn.com/tild3135-6538-4838-b139-343763326333/Group_4.svg'

const btnBG = 'https://static.tildacdn.com/tild3662-6133-4262-b963-333639643037/main_button_green.svg'
const LineArrow = 'https://static.tildacdn.com/tild6162-6235-4464-b364-633031653834/Vector_76.svg'
const LineImageTwo = 'https://static.tildacdn.com/tild6235-3161-4465-b239-313835313663/Vector_44.svg'

export const Services = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>УСЛУГИ</h2>
      <div className={styles.subtext}>
        <img src={TextImage} alt="" />
        <img src={LineImage} alt="" />
      </div>
      <div className={styles.container}>
        {items.map(item => (
            <div className={styles.item}>
              <span>{item}</span>
              <img src={BtnImage} />
            </div>
        ))}
      </div>

      <div className={styles['container-two']}>
        <h2 className={styles['title-two']}>
        ПОЛУЧИТЬ КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ
        </h2>
        <p className={styles.description}>
        УГЛУБИМСЯ В ВАШ БИЗНЕС И ПОКАЖЕМ КАК РЕШИТЬ ЗАПРОС И ВЫРАСТИ. ОСТАВЬТЕ КОНТАКТ И МЫ СВЯЖЕМСЯ ОЧЕНЬ-ОЧЕНЬ СКОРО
        </p>
        <button className={styles.btn}>
          Получить
          <img src={btnBG} />
          <img src={LineArrow} className={styles.arrow} />
        </button>  
        <img className={styles.line} src={LineImageTwo} />
      </div>
    </section>
  )
}
