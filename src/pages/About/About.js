import React from "react";
import styles from "./About.module.css";
import teacherPhoto from "../../assets/images/teacher.jpg"; 

function About() {
  return (
    <div className={styles.container}>
      {/* Teacher's Photo */}
      <div className={styles.photoContainer}>
        <img src={teacherPhoto} alt="Math Teacher" className={styles.photo} />
      </div>

      {/* About Section */}
      <div className={styles.content}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.intro}>
          Hello! I'm <strong>John Doe</strong>, a passionate math teacher with over 10 years of experience
          helping students master the art of mathematics.
        </p>
        <p>
          I specialize in breaking down complex concepts into simple, easy-to-understand lessons. Whether
          it's algebra, calculus, or geometry, I strive to make learning math enjoyable and engaging for
          all my students.
        </p>
        <p>
          When I'm not teaching, you can find me solving challenging math puzzles, exploring innovative
          teaching methods, or reading about advancements in math education.
        </p>
        <p>
          My mission is to inspire a love for mathematics in every student and to show them that math is not
          just a subject—it's a way of thinking.
        </p>
      </div>
    </div>
  );
}

export default About;
