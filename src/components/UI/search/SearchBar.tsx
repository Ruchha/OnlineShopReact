import React, {FC, useState} from 'react';
import classes from "./search.module.scss"
interface ISearch{
    search: (arg0:string)=> void;
}

const SearchBar:FC<ISearch> = ({search}) => {
    const [query, setQuery] = useState('')

    const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        search(e.target.value);
    }
    return (
        <input className={classes.input} value={query} onChange={handleInput}/>
);
};

export default SearchBar