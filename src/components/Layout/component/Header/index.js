import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import image from '~/asset/images';
import TippyContent from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    // faCloudUpload,
    faCoins,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faLanguage,
    // faMessage,
    faRightFromBracket,
    // faUpload,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import ButtonStyle from '~/components/Button';
import { Menu as PopperMenu } from '~/components/Popper_menu';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { BoxIcon, ChangeIcon, SentIcon } from '~/components/Icons';

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
    const [seachResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            // setSearchResult([1, 2, 3]);
        }, 2000);
    });
    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                {/* logo */}
                <div className={cx('logo')}>
                    <img src={image.logo} alt=""></img>
                </div>
                {/* search */}
                <TippyContent
                    interactive={true}
                    visible={seachResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search_result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search_title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            className={cx('search-input')}
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                        ></input>

                        <button className={cx('clear-btn')}>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </button>
                        <FontAwesomeIcon className={cx('load-btn')} icon={faSpinner}></FontAwesomeIcon>

                        <button className={cx('button-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                        </button>
                    </div>
                </TippyContent>

                {/* action */}
                <div className={cx('action')}>
                    {CurrentUser ? (
                        <>
                            {/* <Tippy delay={[0, 50]} content="Upload Video" placement="bottom">
                                <button className={cx('btn_user')}>
                                    <UploadIcon />
                                </button>
                            </Tippy> */}
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
                            <img
                                className={cx('userAVT')}
                                alt="avt"
                                src="https://i.guim.co.uk/img/media/6bc0489ce42214d466b5a00cbf9d6a9b383025a2/0_84_2400_2455/master/2400.jpg?width=445&dpr=1&s=none"
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
