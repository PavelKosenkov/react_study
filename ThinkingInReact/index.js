const dataSample = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];

  

// FilterableProductTable
//     SearchBar

//     ProductTable
//         ProductCategoryRow
//         ProductRow

class FilterableProductTable extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <SearchBard data={dataSample}/>
                <ProductTable data={dataSample}/>
            </div>
        )
    }
}

class SearchBar extends React.Component{
    constructor(props){
        super(props);
    }

    render () {
        return (
            <fieldset>
                <Legend value="Product search"/>
                <input type="text" name="nameSearch" id="nameSearch"/>
                <Legend value="In stock"/>
                <input type="checkbox" name="instockSearch" id="instockSearch"/>
            </fieldset>
        )
    }
}

class ProductTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let productList = [];
        let currentCategory = "";

        props.propducts.forEach(item=>{
            if(currentCategory == item.category){
                productList.push(<ProductCategoryRow category={item.category}/>);
            }
            currentCategory = item.category;
            productList.push(<ProductRow name={item.name} price={item.price}/>)            
        });

        return (
            <table>
            </table>
        )
    }
}

class ProductCategoryRow extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
             <tr>
                <td colspan='2'>{props.category}</td>
            </tr>
        )
    }
}

class ProductRow extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <tr>
                <td>{props.name}</td>
                <td>{props.price}</td>
            </tr>
        )
    }
}


ReactDOM.render(
    'Test',
    document.getElementById("target")
);