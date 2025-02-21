import React from 'react';
import styles from './index.module.scss';

interface Link {
  url: string;
  text: string;
}

<<<<<<< HEAD
interface CatLinkProps {
=======
interface CatSectionProps {
>>>>>>> 92889699 (Add product tour video and login/reset page)
  title: string;
  description: string;
  links: Link[];
}

<<<<<<< HEAD
export default function CatSection({ title, description, links }: CatLinkProps) {
=======
export default function CatSection({ title, description, links = [] }: CatSectionProps) {
>>>>>>> 92889699 (Add product tour video and login/reset page)
  return (
    <div className={styles.developerExperts}>
      <header>
        <h3 className={styles.developerExpertsTitle}>{title}</h3>
        <p className={styles.developerExpertsDescription}>
          {description}
        </p>
      </header>
      <div className={styles.developerExpertsLinks}>
        {links.map((link, index) => (
          <a 
            key={index}
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {link.text} →
          </a>
        ))}
      </div>
    </div>
  );
}