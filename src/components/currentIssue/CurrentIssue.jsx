import React, {Component} from 'react';
import Bem from 'bem-react-core';

class CurrentIssue extends Component{
    constructor(props){
        super(props);
        this.defaultIssue = {
            date: new Date('02.02.2015'),
            name: 'i',
            mom: 'Rus_Hefrier__Delightful_Idea',
            dad: 'Northworth__Go_For_Goal',
        };
    }
    render(){
        return (
            <div class="content__wide content__wide_ornamentGrey">
    			<div class="bornIssue__date right">Помёт<br/>02.02<br/>2015</div><div class="bornIssue__parents"><a href="/dogs/Northworth__Go_For_Goal"><span class="flag fin"></span><span class="flag rus"></span><span class="gender male"></span><span class="dogColor red"></span><strong>Northworth</strong> Go For Goal</a><a href="/dogs/Rus_Hefrier__Delightful_Idea" class="female"><strong>Rus Hefrier</strong> Delightful Idea</a></div>
    		</div>
    		<div class="content__slider">
    			<div class="content__sliderElement"><a href="imageBig001.jpg"><img src="image/image001.jpg" alt="" /></a></div><div class="content__sliderElement"><a href="imageBig002.jpg"><img src="image/image001.jpg" alt="" /></a></div><div class="content__sliderElement"><a href="imageBig003.jpg"><img src="image/image001.jpg" alt="" /></a></div><div class="content__sliderElement"><a href="imageBig004.jpg"><img src="image/image001.jpg" alt="" /></a></div><div class="content__sliderElement"><a href="imageBig005.jpg"><img src="image/image001.jpg" alt=""></a></div><div class="content__sliderElement"><a href="imageBig006.jpg"><img src="image/image001.jpg" alt=""></a></div>
    		</div>
        );
    }
}

export default CurrentIssue;
