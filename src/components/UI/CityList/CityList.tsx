import React, { FC, useState } from 'react';
import SearchBar from '../search/SearchBar';
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
  const [isEmpty, setEmpty] = useState(true)
  const [citiesList, setCityList] = useState<IAddressList[]>(initialCities);
  const handleSearch = (query: string) => {
    query ? setEmpty(false) : setEmpty(true)
    const filteredCities = initialCities.filter((city) =>
      city.name.toLowerCase().includes(query.toLowerCase())
    );
    setCityList(filteredCities);
  };
 
  return (
    <>
      <SearchBar search={handleSearch}/>
      <div className={isEmpty ? classes.dropdown_content : `${classes.dropdown_content} ${classes.visible}`}>
        <div>{citiesList.map(city => <div key={city.id} className={classes.element}>{city.name}</div>)}</div>
      </div>

    </>
  );
};

export default CityList;
