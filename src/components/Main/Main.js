import React, {useEffect} from 'react';
import {connect} from "react-redux";

import Poll from "../Poll"

import {getPolls} from "../../redux/actions/poll"
import styles from "./Main.module.scss"

const Main = (props) => {

    useEffect(()=>{
        props.getPolls()
    })

    return (
        <div className={styles.main}>

            <div className={styles.pollsList}>
                {props.polls.map((poll,i)=>(
                    <Poll key={i} poll={poll}/>
                ))}
            </div>

        </div>
    );
};

const mapStateToProps = state => {
    return {
        polls: state.polls.polls,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getPolls: () => dispatch(getPolls()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
