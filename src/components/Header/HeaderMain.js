import React, {useState} from 'react';
import useDocumentScrollThrottled from "../useDocumentScrollThrottled";
import './Header.css';
import {Link} from "@material-ui/core";
import {UserLoggedIn} from "./Sections/UserLoggedIn";

function HeaderMain() {
    const [shouldHideHeader, setShouldHideHeader] = useState(false);
    const [shouldShowShadow, setShouldShowShadow] = useState(false);

    const MINIMUM_SCROLL = 80;
    const TIMEOUT_DELAY = 400;

    useDocumentScrollThrottled(callbackData => {
        const { previousScrollTop, currentScrollTop } = callbackData;
        const isScrolledDown = previousScrollTop < currentScrollTop;
        const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

        setShouldShowShadow(currentScrollTop > 2);

        setTimeout(() => {
            setShouldHideHeader(isScrolledDown && isMinimumScrolled)
        }, TIMEOUT_DELAY);
    });

    const shadowStyle = shouldShowShadow ? 'shadow' : '';
    const hiddenStyle = shouldHideHeader ? 'hidden' : '';

    return (
        <header className={`header ${shadowStyle} ${hiddenStyle}`}>
            <div className="logo">Logo</div>
            <ul className="links">
                <li className="link-item">
                    <UserLoggedIn />
                </li>
            </ul>
        </header>
    );
}

export default HeaderMain;