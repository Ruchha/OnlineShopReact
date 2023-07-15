import React, {FC, useState} from 'react';
import classes from './account.module.scss'
import CityList from '../../../components/CityList/CityList';


const Account: FC = () => {
    const [isPersonalInfo, setPersonalInfo] = useState(false)
    const [isPublicInfo, setPublicInfo] = useState(false)
    return (
        <div className={classes.info}>
        <div className={classes.personalInfo}>
          <div className={classes.header}>
            Учетные данные
          </div>
          <div className={classes.field}>
          <div className={classes.fieldName}>
          ФИО
        </div>
        <div className={classes.fieldInfo}>
          {isPersonalInfo ? <input className={classes.fieldInput} defaultValue={"Бастрон Ангел"}/> : "Бастрон Ангел"}
        </div>
          </div>
          <div className={classes.field}>
          <div className={classes.fieldName}>
          Дата рождения
        </div>
        <div className={classes.fieldInfo}>
        {isPersonalInfo ? <input className={classes.fieldInput} defaultValue={"20.01.2003"}/> : "13 января 2003"}
        </div>
          </div>
          <div className={classes.field}>
          <div className={classes.fieldName}>
          Пол
        </div>
        <div className={classes.fieldInfo}>
          {isPersonalInfo
          ?
          <>
          <input type='radio' id="sex"/>
          <label htmlFor="sex">Не указан</label>
          <input type='radio' id="male"/>
          <label htmlFor="male">Мужской</label>
          <input type='radio' id="female"/>
          <label htmlFor="female">Женский</label>
          <input type='radio' id="other"/>
          <label htmlFor="other">Другой</label>
          </>
          :
          "Не указан"
          }
        </div>
          </div>
        <div className={classes.field}>
          <div className={classes.fieldName}>
          Телефон
        </div>
        <div className={classes.fieldInfo}>
        {isPersonalInfo ? <input className={classes.fieldInput} defaultValue={"+7 927 514 38 13"}/> : "+7 927 514 38 13"}
  
        </div>
          </div>
          {!isPersonalInfo ? <a onClick={() => setPersonalInfo(true)}>Редактировать</a> 
          :
          <>
          <button>Применить</button>
          <button onClick={() => setPersonalInfo(false)}>Отменить</button>
          </>
          }

          </div>
        <div className={classes.publicInfo}>
        <div className={classes.header}>
            Публичные данные
          </div>
        <div className={classes.field}>
          <div className={classes.fieldName}>
          Информацию, которую вы укажите, будет публичной. Она будет видна всем пользователям и указана 
  в отзывах. Не советуем распространять учетные данные неопределенному кругу людей.
        </div>
        </div>
        <div className={classes.field}>
          <div className={classes.fieldName}>
          Имя
        </div>
        <div className={classes.fieldInfo}>
          Ангел Б.
        </div>
          </div>
        <div className={classes.field}>
          <div className={classes.fieldName}>
          Страна, город
        </div>
        <div className={classes.fieldInfo}>
          {isPublicInfo ? <CityList/> : "Не указан"}
        </div>
        </div>
        <div className={classes.field}>
          <div className={classes.fieldName}>
          Возраст
        </div>
        <div className={classes.fieldInfo}>
          20(скрыт)
        </div>
          </div>
          {!isPublicInfo ? <a onClick={() => setPublicInfo(true)}>Редактировать</a> 
          :
          <>
          <button>Применить</button>
          <button onClick={() => setPublicInfo(false)}>Отменить</button>
          </>
          }
        </div>
      </div>
);
};

export default Account