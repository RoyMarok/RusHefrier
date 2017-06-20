import React, {Component} from 'react';
import style from './Header.css';
class Header extends Component{
    constructor(props){
        super(props);
        this.style = style;
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
            <div className={this.style.header}>
                <div className={this.style.logo}><a href="/" title="Rus Hefrier - питомник английских кокер спаниэлей"><span></span></a></div>
                <div className={this.style.menu}>
                    {
                        this.menu.map((item, index) => {
                            return (
                                <div className={item.state.length>0?this.style[item.state]:this.style.menuItem} key={`item_${index}`} ><a href={item.href} title={item.name}>{item.name}</a></div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }

}
export default Header;
