import { useState } from "react";
import styles from './Faq.module.css';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function Faq({question,answer}){
    const [activeIndex, setActiveIndex] = useState(false);

    const handleToggle = () => {
        setActiveIndex((prevState)=>!prevState);
    };

    return(
        <div className={styles.faqContainer}>
            <div className={styles.faqItem}>
                <div className={styles.faqQuestion} onClick={handleToggle}>
                        <span>{question}</span>
                        <span className={styles.faqIcon}>{activeIndex ? <IoIosArrowUp/> : <IoIosArrowDown/>}</span>
                </div>
                {activeIndex&& (
                    <div className={styles.faqAnswer}>
                        <p>{answer}</p>
                    </div>
                )}
            </div>
        </div>
    )
}