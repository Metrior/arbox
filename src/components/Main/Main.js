import React, {useEffect} from 'react';
import {connect} from "react-redux";

import Poll from "../Poll"

import {getPolls, submitVoteAsync, switchPageAsync} from "../../redux/actions/poll"
import styles from "./Main.module.scss"
import Button from "../common/Button";

const Main = (props) => {

    useEffect(()=>{
        props.getPolls()
    })

    return (
        <div className={styles.main}>

            <div className={styles.pollsList}>
                {props.polls.map((poll,i)=>(
                    <Poll key={i} poll={poll} submitVote={props.submitVote}/>
                ))}
            </div>

            <div className={styles.pageSwitch}>
                <Button text={"Prev"} action={()=>props.switchPage(props.page-1)} disabled={props.page===1 && props.complete}/>
                <Button text={"Next"} action={()=>props.switchPage(props.page+1)} disabled={props.page>1 && props.complete}/>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        polls: state.polls.polls,
        page: state.polls.page,
        complete: state.polls.complete,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getPolls: () => dispatch(getPolls()),
        submitVote: (pollId, choice) => dispatch(submitVoteAsync(pollId, choice)),
        switchPage: (page) => dispatch(switchPageAsync(page)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
