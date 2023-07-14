import React, {FC} from 'react';
import classes from "./footer.module.scss";
const Footer: FC = () => {
    return (
        <footer className={classes.footer}>
        <div className={classes.top}>
          <div className={classes.label}>Подпишитесь</div>
          <p>
            Вам будет приходить рассылка о новых товарах и ограниченных
            предложениях
          </p>
          <input placeholder="E-mail" />
          <button>Перейти</button>
        </div>
        <hr />
        <div className={classes.bottom}>
          <div className={classes.info}>
            <div className={classes.logo}>Brighter</div>
            <p>suppor.brighter@mail.ru</p>
            <p>+7 935 557-67-98</p>
            <p>
              Амурская область, город <br />
              Шаховская, шоссе Бухарестская, 87
            </p>
          </div>
  
          <div className={classes.labels}>
            <div className={classes.label}>Женщинам</div>
            <div className={classes.label}>Мужчинам</div>
            <div className={classes.label}>Обувь</div>
            <div className={classes.label}>Интерьер</div>
            <div className={classes.label}>Кухня</div>
          </div>
        </div>
      </footer>
);
};

export default Footer