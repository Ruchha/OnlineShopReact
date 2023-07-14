import React, {FC} from 'react';
import classes from './select.module.scss'

interface SelectProps {
    category: string,
    content: string[]
}

const Select: FC<SelectProps> = ({category, content}) => {
    return (
        <div className={classes.dropdown}>
        <div className={classes.controls}>
        <button className={classes.dropbtn}>{category}</button>
            <svg className={classes.arrow} xmlns="http://www.w3.org/2000/svg" width="9" height="5" viewBox="0 0 9 5" fill="none">
            <path d="M1 1L4.5 4L8 1"/>
            </svg>
        </div>
        <div className={classes.dropdown_content}>
            {content.map((con, key) => <div key={key} className={classes.element}>{con}</div>)}
        </div>
    </div>
);
};

export default Select