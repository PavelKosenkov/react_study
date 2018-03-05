function BoilingVerdict(props) {
    if(props.celsius >=100){
        return <p>The water will boil</p>
    }
    return <p>The water will not boil</p>
}

const scaleNames={
    c: 'celsius',
    f: 'fahrenheit'
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

//careful : here we accept convert object
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
  
  

class TemperatureInput extends React.Component {
    constructor(props){
        super(props)
        this.state = {temperature: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
        //this.setState({temperature: e.target.value});
    }

    render() {
        //obviously this is not part of the return function
        const temperature = this.props.temperature;
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

class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);

        this.state = {
          temperature: '212',
          scale: 'f'
        };
    }

    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;

        //a good use of an expression
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        //we do not need to use if in an event to determine which temperature convert to which
        //we know which edit box have supplied the value
        //so we can just create 2 separate events and call them accordingly.
        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange} />
                <BoilingVerdict
                celsius={parseFloat(celsius)} />
            </div>
        );
    }
}

class Calculator_old extends React.Component{
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