import React, {FC, useState} from 'react';
import classes from './account.module.scss'

const Account: FC = () => {
    const [isPersonalInfo, setPersonalInfo] = useState(false)
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
          <a onClick={() => setPersonalInfo(prev => !prev)}>Редактировать</a>
          {isPersonalInfo && <><button>Применить</button>
          <button>Отменить</button></>}
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
          Не указан
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
          <a>Редактировать</a>
        </div>
      </div>
);
};

export default Account