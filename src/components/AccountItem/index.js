import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fhan18-1.fna.fbcdn.net/v/t1.6435-9/79708883_568321130629916_4581882986957373440_n.jpg?stp=dst-jpg_p960x960&_nc_cat=109&ccb=1-7&_nc_sid=0bb214&_nc_ohc=gUnC16h44gkAX_XZrEO&_nc_ht=scontent.fhan18-1.fna&oh=00_AfAtQRGPYO6FsI1OID3nfgAu487fWqjFnlt-vD5QWyWOfw&oe=658C1255"
                alt="avatar"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck}></FontAwesomeIcon>
                </p>
                <span className={cx('username')}>nguuyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
