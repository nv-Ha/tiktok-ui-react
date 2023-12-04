import classNames from 'classnames/bind';
import styles from './menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

function HeaderMenu({ title, onBack }) {
    const cx = classNames.bind(styles);

    return (
        <header className={cx('header')}>
            <button className={cx('buttonBack')}>
                <FontAwesomeIcon icon={faChevronLeft} onClick={onBack}></FontAwesomeIcon>
            </button>
            <p className={cx('header_title')}>{title}</p>
        </header>
    );
}

HeaderMenu.prototype = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default HeaderMenu;
