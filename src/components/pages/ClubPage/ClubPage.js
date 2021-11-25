import React, {useState} from 'react';
import classnames from "classnames"
import {Link} from "react-router-dom";

import styles from "./ClubPage.module.scss"

import Contacts from "../../Contacts";

import blackImage from "../../../assets/blankProfilePicture.png"
import Button from "../../common/Button";

const ClubPage = (props) => {

    const {saveClub, clubImage, title, description, colors, memberships, forms} = props

    const [tab,setTab] = useState("memb")

    const changeTab = () => {
        if (tab==="memb") {
            setTab("forms")
        } else setTab("memb")
        console.log("here",tab)
    }

    return (
        <div style={{backgroundColor:colors}} className={styles.pageWrapper}>

            <div className={styles.link}>
                <Link className={styles.linkInner} to="/">Profile</Link>
            </div>

            <div className={styles.clubMainData}>
                <img className={styles.clubImage} src={clubImage} alt={blackImage}/>

                <div className={styles.clubMainData}>
                    <div>{title}</div>
                    <div>{description}</div>
                </div>
            </div>

            <Contacts/>
            <Button disabled={null} action={()=>console.log("shit")} text={"nona"}/>

            <div className={styles.tabs}>
                <div className={classnames(styles.tab,{[styles.tabSelected]:tab==="memb"})} onClick={changeTab}>My memberships</div>
                <div
                    className={classnames(styles.tab,{[styles.tabSelected]:tab==="forms"})}
                    color={"red"}
                    onClick={(changeTab)}>
                    My forms
                </div>
            </div>

            {tab==="memb" &&
                memberships.map((memb,i)=>(
                    <div key={i} className={styles.membership}>
                        <div className={styles.membershipHeader}>{memb.title}</div>
                        <div className={styles.membershipText}>{memb.description}</div>
                    </div>
                ))
            }

            {tab==="forms" &&
                forms.map((form,i)=>(
                    <div key={i} className={styles.membership}>
                        <div className={styles.membershipHeader}>{form.title}</div>
                        <div className={styles.membershipText}>{form.description}</div>
                    </div>
                ))
            }
        </div>
    );
};

export default ClubPage;
