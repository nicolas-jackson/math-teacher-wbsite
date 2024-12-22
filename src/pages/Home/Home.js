import React from 'react'
import styles from './Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardUser, faAward } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className={styles.body}>
        {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Hello! I'm Sebastian Brooks</h1>
        <p className={styles.heroDescription}>
          A Website designer based in Jakarta, Indonesia.
        </p>
        <div className={styles.buttonGroup}>
          <button className={styles.primaryButton}>Talk with me</button>
          <button className={styles.secondaryButton}>See my work</button>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.mainContent}>
        {/* Working Experience Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Working Experience</h2>
          <div className={styles.item}>
            <FontAwesomeIcon icon={faChalkboardUser} className={styles.itemIcon} />
            <div>
              <div className={styles.itemTitle}>Product design at Uber</div>
              <div className={styles.itemDescription}>
                February 2018 - February 2020
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <FontAwesomeIcon icon={faChalkboardUser} className={styles.itemIcon} />
            <div>
              <div className={styles.itemTitle}>Senior Product design at Gojek</div>
              <div className={styles.itemDescription}>
                February 2020 - February 2023
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <FontAwesomeIcon icon={faChalkboardUser} className={styles.itemIcon} />
            <div>
              <div className={styles.itemTitle}>Part-time Product design at Google</div>
              <div className={styles.itemDescription}>
                February 2020 - Present
              </div>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Awards & Recognition</h2>
          <div className={styles.item}>
            <FontAwesomeIcon icon={faAward} className={styles.itemIcon} />
            <div>
              <div className={styles.itemTitle}>Website of the Day at Awwwards</div>
              <div className={styles.itemDescription}>November 2023</div>
            </div>
          </div>
          <div className={styles.item}>
            <FontAwesomeIcon icon={faAward} className={styles.itemIcon} />
            <div>
              <div className={styles.itemTitle}>Best Visual Design at Webby Awards</div>
              <div className={styles.itemDescription}>February 2023</div>
            </div>
          </div>
          <div className={styles.item}>
            <FontAwesomeIcon icon={faAward} className={styles.itemIcon} />
            <div>
              <div className={styles.itemTitle}>Site of the Day at Awwwards</div>
              <div className={styles.itemDescription}>24 August 2022</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home