import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: "nhat123", title: "Minh Nhật Developer", salary: "500 $" },
            { id: "my123", title: "Testers", salary: "400 $" },
            {
                id: "vy123",
                title: "Lộc Project managers",
                salary: "1000 $",
            },
        ],
    };

    addNewJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs.push(job);
        this.setState({
            // arrJobs: [...this.state.arrJobs, job],
            arrJobs: currentJobs,
        });
    };

    deleteJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter((item) => item.id !== job.id);
        this.setState({
            arrJobs: currentJobs,
        });
    };

    componentDidUpdate(prevProps, prevState) {
        console.log(
            ">>> run didupdate:",
            "prev state",
            prevState,
            "current state",
            this.state
        );
    }

    componentDidMount() {
        console.log(">>> run component did mount");
    }

    render() {
        console.log(">>> call render: ", this.state);
        return (
            <>
                <AddComponent addNewJob={this.addNewJob} />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteJob={this.deleteJob}
                />
            </>
        );
    }
}

export default MyComponent;
