package sesac.sesac.spring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

// Controller를 작성해줘야 Controller로 작동을 한다.
// import 확인 필요
@Controller
public class HelloController {

    // import 확인 필요
    // 사용자가 "/hi" 라는 url에 접속했을 때 getHi() 함수를 실행시키겠다.
    // app.get('/hi')
//    @GetMapping("/hi")
//    public String getHi() {
//        // return에서 문자로 작성하면, res.render("hi")와 같은 역할
//        // resources/templates/hi 파일을 보여준다는 의미이다.
//        return "hi";
//    }
    @GetMapping("/hi")
    public String getHi(Model model) {
        model.addAttribute("msg", "메세지입니다!");
        model.addAttribute("utext", "<strong>utext 입니다.</strong>");
        return "hi";
    }
}
