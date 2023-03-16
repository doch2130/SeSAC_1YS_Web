package sesac.sesac.spring4.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesac.sesac.spring4.domain.User2Entity;
import sesac.sesac.spring4.domain.UserEntity;
import sesac.sesac.spring4.dto.PersonDTO;
import sesac.sesac.spring4.dto.UserDTO;
import sesac.sesac.spring4.dto.UserDTO2;
import sesac.sesac.spring4.service.MainService2;
import sesac.sesac.spring4.service.PersonService;

import java.util.ArrayList;

@Controller
// @RestController
// PersonController 안에 있는 모든 함수들이 @ResponseBody 가 붙는다.
 // @RequestMapping("/person")
// GetMapping, PostMapping이 나오기전에 url과, 함수를 따로 작성해주는 기능이 있었다.
// 클래스 위에 적는 방식인데, url 값이 들어가 있으면 기본 url이 설정이 된다고 보면 된다.
// ex) login => @GetMapping("/login") => /person/login
// ex2) register => @GetMapping("/register") => /person/register
public class PersonController2 {

    @Autowired
    MainService2 mainService2;




    @GetMapping("/users")
    public String getUsers(Model model) {
        ArrayList<UserDTO2> userList = (ArrayList<UserDTO2>) mainService2.getUserList();
        model.addAttribute("list", userList);
        return "user";
    }

    @GetMapping("/user/insert")
    public String getInsertUser(@RequestParam String name, @RequestParam String nickname, Model model) {
        // User user = new User();
        User2Entity user = new User2Entity();
        user.setName(name);
        user.setNickname(nickname);

        mainService2.addUser(user);

        model.addAttribute("list", null);
        return "user";
    }

    @GetMapping("/user")
    public String getUser(@RequestParam String name, Model model) {
        ArrayList<UserDTO2> userList = mainService2.getUserName(name);
        model.addAttribute("list", userList);
        return "user";
    }
}
