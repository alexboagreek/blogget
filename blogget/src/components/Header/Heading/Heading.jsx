import style from './Heading.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../UI/Text';

export const Heading = () => (
  <Text As='h1'
    size={22}
    tsize={26}
    center
    className={style.heading}>Главная</Text>
);

Heading.propTypes = {
  text: PropTypes.string,
};
