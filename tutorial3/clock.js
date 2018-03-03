class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }

    componentDidMount(){
        this.timerID = setInterval(()=>this.tick(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }
  }

  function ClockContainer(prop){
        return (
        <div>
            <Clock/>
            <Clock/>
            <Clock/>
        </div>
        );
  }

  class ClockContainer2 extends React.Component{
      constructor(prop){
          super(prop);
      }

      render(){
          return(
            <div>
                <Clock/>
                <Clock/>
                <Clock/>
            </div>           
          )
      }
  }
  
  ReactDOM.render(
    <ClockContainer2 />,
    document.getElementById('target')
  );
  
  