import React, {useState} from 'react';
import Button from "../common/Button";

import styles from "Poll.module.scss"

const Poll = ({submitVote, poll}) => {

    const [choice,setChoice] = useState(null)

    return (
        <div>
            <form>
                {poll.option.map(option=>(
                    <div className={styles.option}>
                        <input value={option} type="radio"/>
                        <label>{option}</label>
                    </div>
                ))}
            </form>

            <Button action={()=>submitVote(poll.id,choice)}/>
        </div>
    );
};

export default Poll;
