import style from "./Events.module.scss";
import { VerticalCarousel } from "../../Components";

const Events = () => {
  return (
    <div className={style.container}>
      <img className={style.bimg} src="/Gallery/bg.png" alt="background" />
      <img className={style.bimgLeft} alt="flower" src="/Gallery/flowers.png" />
      <img className={style.bimgRight} alt="flower" src="/Gallery/flowers.png" />
      <div className={style.text}>
        <p>Events</p>
        <img src="/images/underline.svg" alt="underline" />
      </div>
      <div className={style.cardcontainer}>
        <VerticalCarousel />
      </div>
    </div>
  );
};

export default Events;
