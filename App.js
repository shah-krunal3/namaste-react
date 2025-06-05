import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{ id: "heading"}, "Hello World from React!");

const parent = React.createElement("div", { id: "parent" }, 
        React.createElement("div", { id: "child1" },
            React.createElement("h1", {}, "Child 1 Text")
        )
);


const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 * 
 *  <div id="parent" class="parent">
 *      <div id="child1" class="child1">
 *          <h1>Child 1 Text</h1>
 *      </div>
 *      <div id="child2" class="child2">
 *          <h1>Child 2 Text</h1>
 *      </div>
 * <div>
 * 
 * 
 */

 
root.render(parent);
