import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';


class HelloUser extends React.Component{

    render(){

        console.log(this.props);
        return (
            <div className="hello" style={ {border: '3px solid green'} }>
                <p>Hello { this.props.name } </p>
                <p>This is coming to you from withina  different component called HelloUser</p>
                <img src={`http://placebear.com/${this.props.imgWidth}/200`}alt={this.props.name} />
            </div>
        )

    } //render 

}; //class HelloUser


export default HelloUser;


