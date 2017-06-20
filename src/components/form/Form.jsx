import React, {Component} from 'react';
import Bem from 'bem-react-core';
import './Form.css';
import Button from '../button/Button';

class Form extends Component{
    constructor(props){
        super(props);
        this.formBuild = {
                title: "Обратная связь",
                lines: [
                    {
                        fields: [
                            {
                                label: 'Имя',
                                value: 'Васисуалий',
                                type: 'text'
                            }
                        ]
                    },
                    {
                        fields: [
                            {
                                label: 'Телефон',
                                value: '',
                                type: 'text'
                            }
                        ]
                    },
                    {
                        fields: [
                            {
                                label: 'Фамилиё',
                                value: 'Пупкин',
                                type: 'text'
                            }
                        ]
                    },
                ]
        };
    }
    renderLine(line, index){
        console.log(line);
        return (
            <Bem elem="line" key={`line_${index}`}>
                {line.fields.map((oneField, fieldIndex) =>
                    <Bem elem="field" key={`field_${fieldIndex}`}>
                        <Bem elem="label">{oneField.label}</Bem>
                        <Bem elem="value">
                            {(oneField.type==='text')?<input type="text" defaultValue={oneField.value}/>:''}
                        </Bem>
                    </Bem>
                )}
            </Bem>
        );
    }
    render() {
        return (
            <Bem block="form" mods={{callback:true}}>
                <form >
                    <Bem elem="header">{this.formBuild.title}</Bem>
                    {
                        this.formBuild.lines.map((line, index) => this.renderLine(line, index))
                    }
                </form>
                <Button value="Отправить" mix="form" />
            </Bem>
        )
    }
}


export default Form;
