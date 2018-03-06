
//here we use prop [children]
function ComponentContainer1(props){
    return (
        <div>
            <h4>Container</h4>
                {props.children}
            <h4>Container</h4>
        </div>
    )
}

//giving my own container names
function ComponentContainer2(props){
    return (
        <fieldset>
            <legend>Container1</legend>
            {props.custom1}
        </fieldset>
    )
}

function StandartItems(props){
    return (
        <div>
            {props.title}
            {props.message}
        </div>
    );
}


//here we fill the component with children
function Main(props){
    return (
        <ComponentContainer1>
            <p>qwewqer</p>
            <p>qwewqer</p>
            <p>qwewqer</p>
            <ComponentContainer2 custom1={
                <div>
                    some extra stuff
                </div>    
            }/>
            <StandartItems title='title' message='message'/>
        </ComponentContainer1>
    );
}



ReactDOM.render(
    <Main/>,
    document.getElementById("target")
);