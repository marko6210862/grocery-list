import { Component } from "react";
import check from './check.png';

class GroceryList extends Component{
    state = {
        userInput: '',
        groceryList: []
    }

    onChandeEvent(event){
        this.setState({userInput:event});
    }

addItem(input) {
    if (input === ''){
        alert ("Please enter in item")
    } 
    else {
    let listArray = this.state.groceryList;
    listArray.push(input);
    this.setState({groceryList: listArray, userInput: ''})
}
}

deleteItem() {
    let listArray = this.state.groceryList;
    listArray = [];
    this.setState({groceryList: listArray})
}

crosseWord(event) {
    const li = event.target;
    li.classList.toggle('crossed');
}

onFormSubmit(e){
    e.preventDefault();
}


    render (){
        return(
        <div>
            <form onSubmit={this.onFormSubmit}>  
            <div className="Conteiner">
                <input tupe="text"
                placeholder="What do you want to buy today?"
                onChange={(event) => {this.onChandeEvent(event.target.value)}}
                value={this.state.userInput}/>
            </div>
            <div className="Conteiner">
                <button onClick={() => this.addItem(this.state.userInput)} className="btn Add">Add</button>
            </div>
            <ul>
                {this.state.groceryList.map((item, index) => (
                    <li onClick={this.crosseWord} key={index}>
                        <img src={check} width="40px" alt="check"/>{item}
                    </li>
                ))}
            </ul>
            <div className="Conteiner">
                <button onClick = {() => this.deleteItem()} className="btn Del">Delete</button>
            </div>
            </form>
        </div> 
        )

        
    } 
}

export default GroceryList;