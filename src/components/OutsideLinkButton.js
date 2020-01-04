import React, {Component} from 'react';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

export class OutsideLinkButton extends Component {
    state = {
        hovered: false
    }

    getStyle = () => {
        return {
            cursor: 'pointer',
            padding: '10px',
            fontSize: '16px',
            backgroundColor: this.state.hovered ? 'blue' : 'purple',
            color: 'white',
            textDecoration: 'none',
            lineHeight: '25px'
        }
    }

    toggleHover = () => {
        this.setState({
            hovered: !this.state.hovered
        });
    }

    render() {
        return (
            <div 
            style={this.getStyle()}
            onMouseEnter={this.toggleHover}
            onMouseLeave={this.toggleHover}>
                <a style={this.getStyle()}
                target="_blank" 
                href={this.props.link}>{this.props.text}</a>
            </div>
        )
    }
}

export default OutsideLinkButton