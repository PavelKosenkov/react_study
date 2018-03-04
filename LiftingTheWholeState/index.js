function BoilingVerdict(props) {
    if(props.celsius >=100){
        return <p>The water will boil</p>
    }
    return <p>The water will not boil</p>
}

const scaleName={
    c: 'celsius',
    f: 'fahrenheit'
}

class TemperatureUnit extends React.Component {
    constructor(props){
        super(props)
        this.state = {temperature: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({temperature: e.target.value});
    }

    render() {
        //obviously this is not part of the return function
        const temperature = this.state.temperature;
        const scale = this.props.scale;

        //and render an element. Mind the space bar
        //this is calling a function on a parent component
        //and we are passing it first 
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                    onChange={this.handleChange} />
            </fieldset>
        );
    }
}

class Calculator extends React.Component{
    constructor(props){
        super(props)
        this.state =
        {
            temperature : 0
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            temperature : event.target.value
        });
    }

    //fucking this is important for handlers. Otherwise they are undefined
     render() {
        return ( //this stupid line
            <div>
                <BoilingVerdict celsius={this.state.temperature}/>
                <br/>
                Celsius:
                <input type="number" name="temperatureInput" id="temperatureInput" onChange={this.handleChange}/>
                fahrenheit:
                <input type="number" name="temperatureInputF" id="temperatureInputF" onChange={this.handleChange}/>
            </div>
        );
    }
}

ReactDOM.render(
    <Calculator/>,
    document.getElementById("target")
);