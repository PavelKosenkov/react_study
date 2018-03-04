const listArray = [1,2,3,4,5]

function EmpaddedListItem(props){
    const data = props.data;
    return (
        <ul>
            {data.map(i=><li key={i}>{i}</li>)}
        </ul>
    )
}

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
    <EmpaddedListItem data={listArray}/>,
    //<ListItems data={listArray}/>,
    document.getElementById("target")
);