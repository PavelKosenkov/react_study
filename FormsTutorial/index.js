class FormClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            testText : ""
        }

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTextChange(event){
        this.setState({testText: event.target.value});
    }

    handleSubmit(event) {
        alert(this.state.testText);
        event.preventDefault();
    }

    render() { 
        return ( 
            <div>
                <form action="">
                    <SelectComponent/>
                    <br/>
                    <textarea name="ta" id="" value={this.state.testText} onChange={this.handleTextChange}></textarea>
                    <br/>
                    <input type="text" value={this.state.testText} name="testText" id="testText" onChange={this.handleTextChange}/>
                    <br/>
                    <input type="submit" value="Submit" onClick={this.handleSubmit}/>
                </form>
            </div>
         )
    }
}
 
// ReactDOM.render(
//     <FormClass/>,
//     document.getElementById("target")
// );

ReactDOM.render(<input value="sdfsd" />, document.getElementById("target"));
