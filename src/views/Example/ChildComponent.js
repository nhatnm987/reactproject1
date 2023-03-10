import React from "react";
import "./demo.scss";

class ChildComponent extends React.Component {
    state = {
        showJobs: false,
    };

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs,
        });
    };

    handleOnclickDelete = (job) => {
        console.log(">>> handleOnclickDelete: ", job);
        this.props.deleteJob(job);
    };

    render() {
        let { arrJobs } = this.props; // cach 2
        let { showJobs } = this.state;
        let check = showJobs === true ? "showJobs = true" : "showJobs = false";
        return (
            <>
                {showJobs === false ? (
                    <div>
                        <button
                            className="btn"
                            onClick={() => this.handleShowHide()}
                        >
                            Show
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="job-list">
                            {arrJobs.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        {item.title} - {item.salary} <> </>
                                        <span
                                            onClick={() =>
                                                this.handleOnclickDelete(item)
                                            }
                                        >
                                            <i className="bx bxs-message-x icon"></i>
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                        <div>
                            <button
                                className="btn"
                                onClick={() => this.handleShowHide()}
                            >
                                Hide
                            </button>
                        </div>
                    </>
                )}
            </>
        );
    }
}

// const ChildComponent = (props) => {
//     let { arrJobs } = props;
//     return (
//         <>
//             <div className="job-list">
//                 {arrJobs.map((item, index) => {
//                     if (+item.salary >= 500) {
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.salary} $
//                             </div>
//                         );
//                     }
//                 })}
//             </div>
//         </>
//     );
// };
export default ChildComponent;
