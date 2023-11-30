import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    onClick,
    children,
    primary = false,
    outline = false,
    small = false,
    big,
    text,
    leftIcon,
    ...passProp
}) {
    let Comp = 'button';

    const Classes = cx('wrapper', { primary, outline, small, big, text, leftIcon });
    const props = {
        onClick,
        ...passProp,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={Classes} {...props}>
            <span className={cx('leftIcon')}>{leftIcon}</span>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
