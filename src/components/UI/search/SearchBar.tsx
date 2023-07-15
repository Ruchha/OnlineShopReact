import React, {FC, useState} from 'react';

interface ISearch{
    search: (arg0:string)=> void;
    query: string;
    setQuery:(arg0:string)=>void;
}
const SearchBar:FC<ISearch> = ({search, query, setQuery}) => {


    const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        search(e.target.value);
    }

    return (
        <input value={query} onChange={handleInput}/>
);
};

export default SearchBar