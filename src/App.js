import React from 'react';
import Header from './components/layout/header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import Search from './components/Search';
import SubHeader from './components/layout/Subheader';
import uuid from 'uuid';

import './App.css';

class App extends React.Component {
  state = {
    list:[
      {
        id : uuid.v4(),
        title : 'something title',
        completed : false,
      },
      {
        id : uuid.v4(),
        title : 'something title2',
        completed : false,
      },
      {
        id : uuid.v4(),
        title : 'something title3',
        completed : false,
      }
    ],
    todos:[],
    filtered:[],
  }
  delTodo = (id) => {
    this.setState({
      todos : this.state.todos.filter(todo => todo.id!==id),
      list : this.state.list.filter(todo => todo.id!==id)
    })
  }
  markComplete = (id) => {
    this.setState({list : this.state.list.map(todo =>{
      if (todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    })})
  }
  addTodo =(title)=>{
    let newTodo = {
      id:uuid.v4(),
      title:title,
      completed:false
    }
    this.setState({
      list:[...this.state.list,newTodo],
      todos:[...this.state.todos,newTodo]
    });

  }

  search = (title) => {
    this.setState({

      todos:this.state.filtered.filter((todos)=>{
      return todos.title.toLowerCase().includes(title.toLowerCase())
    }),
    });

  }

  allTodo = () =>{
    this.setState({
      todos:this.state.list,
      filtered:this.state.list,
    })

  }

  completedTodo = () =>{
    this.setState({
      todos:this.state.list.filter((todos)=>{
        return todos.completed === true; 
      }),
      filtered:this.state.list.filter((todos)=>{
        return todos.completed === true; 
      }),

    })
  }

 remainingTodo = () =>{
    this.setState({
      todos:this.state.list.filter((todos)=>{
        return todos.completed === false; 
      }),
      filtered:this.state.list.filter((todos)=>{
        return todos.completed === false; 
      }),
    })
  }

componentDidMount(){
  this.setState({todos:this.state.list,filtered:this.state.list});
}

  render(){

    return (
      <div className="App">
        <div className = 'container'>
          <Header />
          <SubHeader allTodo = {this.allTodo} completedTodo = {this.completedTodo} remainingTodo = {this.remainingTodo}/>
          <Search search = {this.search} />
          <AddTodo addTodo = {this.addTodo} />
          <Todos todos = {this.state.todos} markComplete = {this.markComplete} delTodo = {this.delTodo}/>
        </div>
      </div>
    );
  }
  
}

export default App;
