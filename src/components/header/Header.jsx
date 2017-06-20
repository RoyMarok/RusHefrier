import React, {Component} from 'react';
import Bem from 'bem-react-core';
import './Header.css';
class Header extends Component{
    constructor(props){
        super(props);
        this.menu = [
            {
                name: 'собаки',
                href: '/dogs',
                state: ''
            },
            {
                name: 'щенки',
                href: '/puppies',
                state: ''
            },
            {
                name: 'потомки',
                href: '/children',
                state: ''
            },
            {
                name: 'мероприятия',
                href: '/events',
                state: 'faded'
            },
            {
                name: 'контакты',
                href: '/contacts',
                state: 'faded'
            },
        ];
    }
    render() {
        return (
            <Bem block="header">
                <Bem elem="logo"><a href="/" title="Rus Hefrier - питомник английских кокер спаниэлей"><span></span></a></Bem>
                <Bem block="menu">
                    {
                        this.menu.map((item, index) => {
                            return (
                                <Bem elem="menuItem" key={`item_${index}`} mods={item.state.length>0?{view: item.state}:''}><a href={item.href} title={item.name}>{item.name}</a></Bem>
                            );
                        })
                    }
                </Bem>
            </Bem>
        );
    }

}
export default Header;
