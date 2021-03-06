import style from './PostTime.module.css';
import formatDate from '../../../../../utils/formatDate';
import {postData} from '../../../../../data';

export const PostTime = () => {
  const {date} = postData;
  console.log(style);

  return (
    <time
      className={style.date}
      dateTime={date}>{formatDate(date)}
    </time>
  );
};
