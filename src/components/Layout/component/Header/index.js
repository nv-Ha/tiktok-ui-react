import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import image from '~/asset/images';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCoins,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faLanguage,
    faRightFromBracket,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import ButtonStyle from '~/components/Button';
import { Menu as PopperMenu } from '~/components/Popper_menu';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { BoxIcon, ChangeIcon, SentIcon } from '~/components/Icons';
import Images from '~/components/Images';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'VietNamese',
                },
                {
                    code: 'chn',
                    title: 'China',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const USER_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/profile',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coins',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faRightFromBracket} />,
        title: 'Log out',
        to: '/logout',
        line: true,
    },
];
const hangdleOnChange = (menuItem) => {
    console.log(menuItem);
};

const CurrentUser = true;

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                {/* logo */}
                <div className={cx('logo')}>
                    <img src={image.logo} alt=""></img>
                </div>
                {/* search */}
                <Search />

                {/* action */}
                <div className={cx('action')}>
                    {CurrentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Change Device" placement="bottom">
                                <button className={cx('btn_user')}>
                                    <ChangeIcon />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 50]} content="Sent Messenger" placement="bottom">
                                <button className={cx('btn_user')}>
                                    <SentIcon />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 50]} content="Box" placement="bottom">
                                <button className={cx('btn_user')}>
                                    <BoxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <ButtonStyle text>Regiter</ButtonStyle>
                            <ButtonStyle primary>Log in</ButtonStyle>
                        </>
                    )}
                    <PopperMenu items={CurrentUser ? USER_ITEMS : MENU_ITEMS} onChange={hangdleOnChange}>
                        {CurrentUser ? (
                            <Images
                                className={cx('userAVT')}
                                alt="avt"
                                src="ttps://i.guim.co.uk/img/media/6bc0489ce42214d466b5a00cbf9d6a9b383025a2/0_84_2400_2455/master/2400.jpg?width=445&dpr=1&s=none"
                            />
                        ) : (
                            <button className={cx('more_btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                            </button>
                        )}
                    </PopperMenu>
                </div>
            </div>
        </header>
    );
}

export default Header;
