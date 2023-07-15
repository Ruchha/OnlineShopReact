import React, { FC, useState } from 'react';
import SearchBar from '../UI/search/SearchBar';
import classes from "./cityList.module.scss";

interface IAddressList {
  id: number;
  name: string;
}

const CityList: FC = () => {
  const initialCities: IAddressList[] = [
    { id: 1, name: 'Волгоград' },
    { id: 2, name: 'Москва' },
    { id: 3, name: 'Сочи' },
    { id: 4, name: 'Краснодар' },
    { id: 5, name: 'Санкт-Петербург' },
    { id: 6, name: 'Воронеж' },
  ];

  const [citiesList, setCityList] = useState<IAddressList[]>(initialCities);
  const [query, setQuery] = useState('')
  const handleSearch = (query: string) => {
    const filteredCities = initialCities.filter((city) =>
      city.name.toLowerCase().includes(query.toLowerCase())
    );
    setCityList(filteredCities);
  };

  return (
    <>
      <SearchBar search={handleSearch} query={query} setQuery={setQuery} />
      <div className={query ? `${classes.dropdown_content} ${classes.visible}` : classes.dropdown_content}>
        <div>{citiesList.map(city => <div key={city.id} className={classes.element}>{city.name}</div>)}</div>
      </div>

    </>
  );
};

export default CityList;
