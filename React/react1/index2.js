// React 따라하기
// JSX 문법 사용하기 전
// 그냥 맛보기용 이므로 이거는 잊어버리세여~

function HelloWorldButton () {
    const [ isClick, setClickState ] = React.useState("it isn't clicked");
    console.log(isClick);

    return React.createElement("button", { onClick: () => { setClickState("It's clicked") } }, isClick);
}

const e = React.createElement;
const domContainer = document.querySelector("#app");
const root = ReactDOM.createRoot(domContainer);
root.render(e(HelloWorldButton));

