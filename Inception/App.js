/**
 * <div id="parent">
 *    <div id="child">
 *      <h1>I am a h1 Tag</h1>
 *      <h2>I am a h2 Tag</h2>
 *    </div>
 * </div>
 *
 */

const parent = React.createClass("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am a f1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am a f1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
]);

// React Element Object
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

// tell react where to inject and perform DOM Manipulations.
const root = ReactDOM.createRoot(document.getElementById("root")); // created a root element for react application.

// Convert Object into html Element and put it inside the DOM. (root element)
root.render(heading);
