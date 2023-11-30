import Button from '~/components/Button';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <Button outline big>
                Log in
            </Button>
        </aside>
    );
}

export default SideBar;
