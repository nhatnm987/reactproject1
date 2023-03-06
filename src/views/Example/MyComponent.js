import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        arrJobs: [
            { id: "nhat123", title: "Minh Nhật Developer", salary: "500 $" },
            { id: "my123", title: "Testers", salary: "400 $" },
            {
                id: "vy123",
                title: "Lộc paylak Project managers",
                salary: "1000 $",
            },
        ],
    };

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value,
        });
    };

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        alert("Hi Minh Nhật");
    };

    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label> <br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)}
                    />
                    <br />
                    <label htmlFor="lname">Last name:</label> <br />
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={(event) => this.handleChangeLastName(event)}
                    />
                    <br />
                    <input
                        className="btn"
                        type="submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>

                <ChildComponent
                    name={this.state.firstName}
                    age={"22"}
                    address={"Hà Lam"}
                    arrJobs={this.state.arrJobs}
                />
            </>
        );
    }
}

export default MyComponent;
