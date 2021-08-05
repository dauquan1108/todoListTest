import React, {Component} from 'react';
// id
import { v4 as uuIdv4 } from "uuid";

// component
import HeaderTodo from "./HeaderTodo";
import ViewTodo from "./ViewTodo";
import FooterTodo from "./FooterTodo";
class MainTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listTodo: [
                {id: 1, name: 'viec 1', status: false},
                {id: 2, name: 'viec 2', status: false},
                {id: 3, name: 'viec 3', status: false},
            ],
            viewTodoList: [],
            showActive: 'All',
        }
    }
    static getDerivedStateFromProps(nextProps, prevState){
        const { showActive, listTodo } = prevState;
        let viewTodoList = [...listTodo];
        switch (showActive) {
            case 'Active': {
                viewTodoList = listTodo.filter((item) => item.status);
                break;
            };
            case 'Completed': {
                viewTodoList = listTodo.filter((item)=> !item.status );
                break;
            };
            default:{
                break;
            };
        };
        return  {
            viewTodoList,
        };
    };

    addTodo = (value) => {
        const {listTodo} = this.state;
        this.setState({
            listTodo:  [{id: uuIdv4(), name: value, status: false}, ...listTodo]
        });
    };
    editTodo = (ids, value) => {
        const {listTodo} = this.state;
        listTodo.forEach((item) => {
            if (item.id === ids){
                item.name = value;
            };
        });
    };
    onDeleteItem = (id) => {
        const {listTodo} = this.state;
        const todoNew = listTodo.filter(e => e.id !== id);
        this.setState({
            listTodo: todoNew,
        });
    };
    onCheckStatus = (id) => {
        const {listTodo} = this.state;
        listTodo.forEach((item) => {
           if (item.id === id) {
               item.status = !item.status;
           };
        });
        this.setState({
            listTodo,
        });
    };

    onShowActive = (event) =>{
        this.setState({
            showActive: event,
        });
    };

    countNumberTodo = () => {
        const {listTodo} = this.state;
        const todoNumber = listTodo.filter(num => !num.status);
        return todoNumber.length;
    };

    onClearAllItem = (id) => {
        const {listTodo} = this.state;
        const todoListClear = listTodo.filter((item) => item.status === false);
        this.setState({
            listTodo: todoListClear,
        });
    };

    render() {
        const {listTodo, viewTodoList, showActive, status} = this.state;
        const count = this.countNumberTodo();
        return (
            <div className="MainTodo">
                <HeaderTodo addTodo={this.addTodo}/>
                {
                    viewTodoList.map((item) => {
                        return  <ViewTodo
                                key={item.id}
                                item={item}
                                statusItem={item.status}
                                status={status}
                                editTodo={this.editTodo}
                                onDeleteItem={this.onDeleteItem}
                                onCheckStatus={this.onCheckStatus}
                        />
                    })
                }
                {
                    count &&  <FooterTodo
                        onShowActive={this.onShowActive}
                        countTodo={count}
                        onClearAllItem={this.onClearAllItem}
                    />
                }
            </div>
        );
    }
}

export default MainTodo;
