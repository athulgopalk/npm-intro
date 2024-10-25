const innerParent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an H1 tag From React"),
    React.createElement("h2", {}, "I am an H1 tag From React"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an H1 tag From React"),
    React.createElement("h2", {}, "I am an H1 tag From React"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(innerParent);

console.log(innerParent);

//But this is not a optimal way, this makes it like ugly