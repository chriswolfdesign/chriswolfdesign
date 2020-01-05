import React, {Component} from 'react';
import OutsideLinkButton from './OutsideLinkButton';

export class TechnologyList extends Component {
    // state = {
    //     visibility: 'visible'
    // }

    // getStyle= () => {
    //     return {
    //         backgroundColor : 'purple',
    //         color: 'white',
    //         marginTop: '2.8%',
    //         width: '10%',
    //         height: '100vh',
    //         visibility: true
    //     }
    // }

    // toggleVisibility = () => {
    //     this.setState({
    //         visibility: this.state.visibility === 'visible' ? 'hidden' : 'visible'
    //     });
    // }

    render() {
        return (
            <div id="technologyList"
            style={technologyListStyle}>
                <OutsideLinkButton text="Visual Studio Code"
                link="https://code.visualstudio.com"/>
                <OutsideLinkButton text="GitHub"
                link="https://www.github.com"/>
                <OutsideLinkButton text="ReactJS"
                link="https://reactjs.org"/>
                <OutsideLinkButton text="Heroku"
                link="https://www.heroku.com"/>
            </div>
        )
    }
}

const technologyListStyle = {
    backgroundColor : 'purple',
    color: 'white',
    marginTop: '2.8%',
    width: '10%',
    height: '100vh',
    position: 'fixed',
    left: 0
    // visibility: true
}

export default TechnologyList