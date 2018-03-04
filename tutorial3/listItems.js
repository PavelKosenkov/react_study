const listArray = [1,2,3,4,5]

class ListItems extends React.Component
{
    constructor(props){
        super(props);
        this.mappedData = props.data.map(i=><li key={i}>{i}</li>);
    }

    render()
    {
        return (
            <ul>
                {this.mappedData}
            </ul>
        );
    }
}

ReactDOM.render(
    <ListItems data={listArray}/>,
    document.getElementById("target")
);