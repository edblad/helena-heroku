import React from 'react';

class ColorChanger extends React.Component {
    constructor(props){
        super(props);
        this.state = { clicked: false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
        let isClicked = this.state.clicked ? "#a73c3c" : "#f37272"

        return (
            <div onClick={this.handleClick} style={{ background: isClicked, padding: "7px", borderRadius: "5px", cursor: "pointer" }}>
                Click me!
            </div>
        )
    }
}

export default ColorChanger;