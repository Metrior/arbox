import React from 'react';
import styles from "./ProfilePage.module.scss"

import blackImage from "../../../assets/blankProfilePicture.png";

const ProfilePage = (props) => {

    const {saveUser, profileImage, name, bio, clubItem, birth, colors, clubImage, title } = props

    return (
        <div style={{backgroundColor:colors}} className={styles.userWrapper}>

            <div>
                <img className={styles.profileImage} src={profileImage} alt={blackImage}/>

                <div>
                    <div>{name}</div>
                    <div>{bio}</div>
                </div>
            </div>

            <div className={styles.userData}>
                <div>
                    <div className={styles.userDataHeader}></div>
                    <div className={styles.userDataInfo}>
                        <img className={styles.clubImage} src={clubImage} alt={blackImage}/>
                        {title}
                    </div>
                </div>
                <div>
                    <div className={styles.userDataHeader}>

                    </div>
                    <div className={styles.userDataInfo}>{birth}</div>
                </div>
                <div>
                    <div className={styles.userDataHeader}></div>
                    <div className={styles.userDataInfo}></div>
                </div>
            </div>
            
        </div>
    );
};

export default ProfilePage;
