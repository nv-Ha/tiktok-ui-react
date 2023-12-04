import { useEffect, useState, useRef } from 'react';
// import axios from 'axios';
import request from '~/untils/request';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TippyContent from '@tippyjs/react/headless';
import { wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useDebounce } from '~/components/hooks';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [ShowResult, setShowResult] = useState(true);
    const [seachResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);

    const inpuRef = useRef();

    const decounce = useDebounce(searchValue, 1000);

    useEffect(() => {
        if (!decounce.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        request
            .get(`users/search`, {
                params: {
                    q: decounce,
                    type: 'less',
                },
            })
            .then((res) => {
                setSearchResult(res.data.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [decounce]);

    const HangdleDelete = () => {
        setSearchValue('');
        setSearchResult([]);
        inpuRef.current.focus();
    };

    const HangdleHideResult = () => {
        setShowResult(false);
    };

    return (
        <div>
            <TippyContent
                appendTo={() => document.body}
                interactive={true}
                visible={ShowResult && seachResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search_result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search_title')}>Accounts</h4>
                            {seachResult.map((res) => (
                                <AccountItem key={res.id} data={res} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={HangdleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inpuRef}
                        value={searchValue}
                        className={cx('search-input')}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => setShowResult(true)}
                    ></input>
                    {!!searchValue && !loading && (
                        <button className={cx('clear-btn')} onClick={HangdleDelete}>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </button>
                    )}

                    {loading && <FontAwesomeIcon className={cx('load-btn')} icon={faSpinner}></FontAwesomeIcon>}

                    <button className={cx('button-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                    </button>
                </div>
            </TippyContent>
        </div>
    );
}

export default Search;
