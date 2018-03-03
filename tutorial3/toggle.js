class ToggleButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {isToggled : true};

        this.handleClick = this.handleClick.bind(this);
    }

    render(){
        return(
            <button onClick={this.handleClick}>
                {this.state.isToggled ? "On" : "Off"}
            </button>
        );
    }

    handleClick(){
        this.setState(prevState=>({
            isToggled : !prevState.isToggled
        }));
    }
}

ReactDOM.render(
    <ToggleButton/>,
    document.getElementById("target")
)

