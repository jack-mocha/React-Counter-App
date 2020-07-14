import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.value,
  //   tags: ["tag1", "tag2", "tag3"],
  // };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  style = {
    fontSize: 20,
    fontWeight: "bold",
  };

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  // handleIncrement = () => {
  //   console.log("Increment clicked", this);
  //   this.setState({ value: this.state.value + 1 });
  // };

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags!</p>;

  //   return (
  //     <ul>
  //       {/*Key only needs to be unique within the list not the entire application*/}
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    const {
      counter,
      onDelete,
      onIncrement,
      onDecrement,
      children,
    } = this.props;

    return (
      <React.Fragment>
        {/*React.Fragment will not add redundant div tag */}
        {/* {children} */}
        <div className="row">
          <div className="col-1">
            <span style={this.style} className={this.getBadgeClasses()}>
              {/*Style takes an object */}
              {this.formatCount()}
            </span>
            {/* <span style={{ fontSize: 20 }} className={this.getBadgeClasses()}>
              {this.formatCount()}
            </span> */}
          </div>
          <div className="col-4">
            <button
              onClick={() => onIncrement(counter)}
              className="btn btn-secondary btn-sm m-2"
            >
              +
            </button>
            <button
              onClick={() => onDecrement(counter)}
              className="btn m-2 btn-sm btn-secondary"
              disabled={counter.value === 0 ? "disabled" : ""}
            >
              -
            </button>
            <button
              className="btn btn-danger btn-sm m-2"
              onClick={() => onDelete(counter.id)}
            >
              x
            </button>
          </div>
        </div>
        {/* {this.renderTags()} */}
      </React.Fragment>
    );
  }
}
export default Counter;
