import styles from './Navbar.module.scss'

const links = [
  { name: 'УСЛУГИ' },
  { name: 'КЕЙСЫ' },
  { name: 'ВАКАНСИИ' },
  { name: 'КОНТАКТЫ' },
]

const imageLogo = 'https://static.tildacdn.com/tild3062-3064-4239-a539-363138663432/logosence.svg'
const burger = 'https://static.tildacdn.com/tild3839-3230-4231-a264-366635613431/starofinfo.svg'

export const Navbar = () => {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.logo}>
        <img src={imageLogo} />
      </div>
      <ul className={styles.links}>
        {links.map(el => (
          <li className={styles.link}>
            <a href="">{el.name}</a>
          </li>
        ))}
      </ul>
      <div className={styles.burger}>
        <img src={burger} />
      </div>
    </nav>
  )
}
