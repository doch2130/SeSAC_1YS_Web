package sesac.sesac.spring3.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import sesac.sesac.spring3.domain.User;
import sesac.sesac.spring3.dto.UserDTO;
import sesac.sesac.spring3.service.MainService;

import java.util.ArrayList;

@Controller
public class MainController {
    @Autowired
    MainService mainService;

    @GetMapping("/users")
    public String getUsers(Model model) {
        ArrayList<UserDTO> userList = (ArrayList<UserDTO>) mainService.getUserList();
        model.addAttribute("list", userList);
        return "user";
    }

    @GetMapping("/user/insert")
    public String getInsertUser(@RequestParam String name, @RequestParam String nickname, Model model) {
        // 원래는 dto로 받아서 service에 전달해서 처리해야 하는 것이 맞다.
        User user = new User();
        user.setName(name);
        user.setNickname(nickname);

        mainService.addUser(user);

        model.addAttribute("list", null);
        return "user";
    }
}
