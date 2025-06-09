import React from "react";
import ReactDOM from "react-dom/client";

// React Element using JSX
const Title = () => (
    <h1 id="heading4">Hello, World! Using JSX</h1>
);

const HeadingComponent = () => (
        <div id="container">
            <Title />
            <h1 id="heading3">Hello, World! Using Functional Component</h1>
        </div>
   
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the React Element
root.render(<HeadingComponent />);