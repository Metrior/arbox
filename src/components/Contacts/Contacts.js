import React from 'react';
import styles from "./Contacts.module.scss"

const Contacts = ({callClub,goWebsiteClub,emailClub}) => {
    return (
        <div className={styles.contactsBlock}>
            <div className={styles.contact} onClick={()=>callClub()}>Phone</div>
            <div className={styles.contact} onClick={()=>goWebsiteClub()}>Website</div>
            <div className={styles.contact} onClick={()=>emailClub()}>Email</div>
        </div>
    );
};

export default Contacts;
