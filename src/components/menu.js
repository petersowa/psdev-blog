import React from 'react';
import { Link } from 'gatsby';

export default function Menu() {
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
    ]);
    console.log(menuItems);
    return (
        <ul className="menu">
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
    );
}
