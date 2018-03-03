class ToDoApp extends React.Component{
    constructor(props){
        super(props);
        this.state = { items: [], text: '' };

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);    
    }

    render(){
        return(
            <div>
                dsafasdfsd
            </div>
        );
    }
}

ReactDOM.render(
    <ToDoApp/>,
    document.getElementById("target")
);