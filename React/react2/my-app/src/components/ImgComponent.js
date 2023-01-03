import logo from '../mococo-01.png';

// JavaScript로 import를 하는 경우에는 src 폴더 내부까지만 사용이 가능하다.
// 다음과 같이 public 폴더 접근하면 Error가 발생한다.
// import logo from "../../public/logo192.png";

function ImgComponent () {
    return (
        <img src={logo} alt='이미지' />

        // 해당 설정으로 public 폴더에 바로 접근 할 수 있다.
        // <img src="/logo192.png" alt='이미지' />
    )
}

export default ImgComponent;
