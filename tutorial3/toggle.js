class ToggleButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isToggled : true,
            test : ''
        };
    }

    render(){
        return(
            <div>
                {this.state.test}
                <button onClick={this.handleClick.bind(this, 't1')}>
                    {this.state.isToggled ? "On" : "Off"}
                </button>
            </div>
        );
    }

    handleClick(testParam){
        this.setState(prevState=>({
            isToggled : !prevState.isToggled,
            test : testParam + prevState.test
        }));
    }
}

ReactDOM.render(
    <ToggleButton/>,
    document.getElementById("target")
)

