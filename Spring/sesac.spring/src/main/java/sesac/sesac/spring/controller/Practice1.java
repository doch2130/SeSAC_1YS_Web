package sesac.sesac.spring.controller;

        import org.springframework.stereotype.Controller;
        import org.springframework.ui.Model;
        import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Practice1 {

    @GetMapping("/test1")
    public String getTest(Model model) {
        model.addAttribute("age", 25);
        model.addAttribute("age2", 12);
        return "practice1";
    }
}
