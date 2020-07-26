import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters - Rendered");

    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {/* <Counter /> */}
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
            // value={counter.value}
            // id={counter.id}
          />
          // <Counter key={counter.id} value={counter.value} id={counter.id}>
          //   <h4>Counter #{counter.id}</h4>
          // </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
