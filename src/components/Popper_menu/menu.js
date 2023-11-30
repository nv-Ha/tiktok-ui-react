import Tippy from '@tippyjs/react/headless';
import styles from './menu.module.scss';
import classNames from 'classnames/bind';
import { wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './menuItem';
import HeaderMenu from './Header';
import { useState } from 'react';

const defaultValue = () => {};

function Menu({ children, items = [], onChange = defaultValue }) {
    const cx = classNames.bind(styles);
    const [history, setHistory] = useState([{ data: items }]);
    const currrent = history[history.length - 1];
    const renderItems = () => {
        return currrent.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            delay={[0, 500]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('bg_menu')}>
                        {history.length > 1 && (
                            <HeaderMenu
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
