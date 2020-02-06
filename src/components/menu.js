import React from 'react';
import { Link } from 'gatsby';

export default function Menu() {
    const [showMenu, toggleMenu] = React.useState(false);
    const [menuItems] = React.useState([
        {
            id: 1,
            text: 'home',
            path: '/',
        },
        {
            id: 2,
            text: 'blog',
            path: '/blog',
        },
        {
            id: 3,
            text: 'about',
            path: '/about',
        },
        {
            id: 4,
            text: 'contact',
            path: '/contact',
        },
    ]);
    return (
        <>
            <button
                className="menu__toggle"
                type="button"
                onClick={() => {
                    toggleMenu(!showMenu);
                }}
            ></button>
            <ul className={`menu shadow ${showMenu ? '' : ' menu--hide'}`}>
                {menuItems.map(item => (
                    <li className="menu__item" key={item.id}>
                        <Link
                            className="menu__link"
                            activeClassName="menu__link--active"
                            to={item.path}
                        >
                            {item.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
