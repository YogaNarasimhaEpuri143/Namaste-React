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
