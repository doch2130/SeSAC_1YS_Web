// React 따라하기

function HelloWorldButton () {
    return React.createElement("button", { onClick: () => {} }, "Hello, REACT world!");
}

const e = React.createElement;
const domContainer = document.querySelector("#app");
const root = ReactDOM.createRoot(domContainer);
root.render(e(HelloWorldButton));
