// import { useState } from 'react'; 
"use client"
import React, { useState } from 'react';
// import styles from './ccordion.module.css';
import styles from '@/app/styles/accordion.module.css'


const AccordionNextJs = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordion}>
      use client
      <div className={styles.accordionTitle} onClick={toggleAccordion}>
        {title}
      </div>
      {isOpen && <div className={styles.accordionContent}>{content}</div>}
    </div>
  );
};

export default AccordionNextJs