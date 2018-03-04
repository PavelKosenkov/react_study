class SelectComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {selectValue : []}

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        let values = [];
        for(let i = 0; i < event.target.options.length; i++){
            let option = event.target.options[i];
            if(option.selected){
                values.push(option.value);
            }
        }
        this.setState({selectValue : values});
    }

    render() {
        return (
            <select multiple={true} onChange={this.handleChange} value={this.state.selectValue}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">Coconut</option>
            <option value="mango">Mango</option>
            </select>
        )
    }
}

