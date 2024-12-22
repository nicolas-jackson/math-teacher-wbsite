import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div><Link to="sb">SB</Link></div>
        <div>
        <Link to="/" className={styles.navLink}>Home</Link>
      <Link to="/lessons" className={styles.navLink}>My lessons</Link>
      <Link to="/about" className={styles.navLink}>About Me</Link>
        </div>
      </nav>
  )
}

export default Navbar