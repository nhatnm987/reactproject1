import React from "react";
import { toast } from "react-toastify";

class AddTodo extends React.Component {
    state = {
        title: "",
    };

    handleOnchangeTitle = (event) => {
        this.setState({
            title: event.target.value,
        });
    };

    handleAddTodo = () => {
        if (!this.state.title) {
            toast.error(`Missing title's Todo!`);
            return;
        }
        // let todo = {
        //     id: Math.floor(Math.random() * 10000),     //////cach 1
        //     title: this.state.title,
        // };

        // this.props.addNewTodo(todo);
        this.props.addNewTodo({
            id: Math.floor(Math.random() * 10000),
            title: this.state.title,
        });

        this.setState({
            title: "",
        });
    };

    render() {
        let { title } = this.state;
        return (
            <div className="add-todo">
                <input
                    type="text"
                    value={title}
                    onChange={(event) => this.handleOnchangeTitle(event)}
                />
                <button
                    className="add"
                    type="button"
                    onClick={() => this.handleAddTodo()}
                >
                    <i className="bx bx-alarm-add"></i>
                </button>
            </div>
        );
    }
}

export default AddTodo;
