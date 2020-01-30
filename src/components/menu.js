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
        <div>
            <ul className="main__menu">
                {menuItems.map(item => (
                    <li className="main__menu__item" key={item.id}>
                        <Link
                            className="main__menu__item__link"
                            activeClassName="active"
                            to={item.path}
                        >
                            {item.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
