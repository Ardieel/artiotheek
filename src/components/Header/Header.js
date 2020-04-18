import React from 'react';

function Header() {
    {/* future hook logic will go here */}

    return (
        <header className={`header ${scrollStyle} ${shadowStyle}`}>
            <div className="Logo">Logo</div>
            <ul className="Links">
                <li className="link-item">Home</li>
                <li className="link-item">Login</li>
            </ul>
        </header>
    );
}

export default Header;