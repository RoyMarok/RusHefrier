import React, {Component} from 'react';
import style from './CurrentIssue.css';

class CurrentIssue extends Component{
    constructor(props){
        super(props);
        this.style = style;
        this.defaultIssue = {
            date: new Date('02.02.2015'),
            name: 'i',
            mom: 'Rus_Hefrier__Delightful_Idea',
            dad: 'Northworth__Go_For_Goal',
        };
    }
    slider(){
        return (
            <div className="content__slider">
                <div className="content__sliderElement"><a href="imageBig001.jpg"><img src="image/image001.jpg" alt="" /></a></div><div className="content__sliderElement"><a href="imageBig002.jpg"><img src="image/image001.jpg" alt="" /></a></div><div className="content__sliderElement"><a href="imageBig003.jpg"><img src="image/image001.jpg" alt="" /></a></div><div className="content__sliderElement"><a href="imageBig004.jpg"><img src="image/image001.jpg" alt="" /></a></div><div className="content__sliderElement"><a href="imageBig005.jpg"><img src="image/image001.jpg" alt="" /></a></div><div className="content__sliderElement"><a href="imageBig006.jpg"><img src="image/image001.jpg" alt="" /></a></div>
            </div>
        );
    }
    render(){
        return (
            <div>
                <div className={this.style.ornamentGrey}><div className={this.style.date}>Помёт<br/>
                {`${this.defaultIssue.date.getDate()<10?0:''}${this.defaultIssue.date.getDate()}.${this.defaultIssue.date.getMonth()<9?0:''}${this.defaultIssue.date.getMonth()+1}`}<br/>
                {this.defaultIssue.date.getFullYear()}</div><div className={this.style.parents}><a href="/dogs/Northworth__Go_For_Goal"><span className="flag fin"></span><span className="flag rus"></span><span className="gender male"></span><span className="dogColor red"></span><strong>Northworth</strong> Go For Goal</a><a href="/dogs/Rus_Hefrier__Delightful_Idea" className="female"><strong>Rus Hefrier</strong> Delightful Idea</a></div></div>

    		</div>
        );
    }
}

export default CurrentIssue;
