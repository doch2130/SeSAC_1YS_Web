package sesac.sesac.spring4.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesac.sesac.spring4.domain.User;
import sesac.sesac.spring4.dto.UserDTO;
import sesac.sesac.spring4.service.MainService;

import javax.servlet.http.HttpSession;

@Controller
public class MainController {
    @Autowired
    MainService mainService;

    @GetMapping("/")
    public String getLogin() {
        return "login";
    }
    @GetMapping("/register")
    public String getRegister() {
        return "register";
    }

    @PostMapping("/axios/register")
    @ResponseBody
    public Boolean registerUser(@RequestBody UserDTO userDTO) {
//        System.out.println("userDTO " + userDTO);
//        System.out.println("userDTO " + userDTO.getId());
//        System.out.println("userDTO " + userDTO.getPassword());
        mainService.userRegister(userDTO);
        return true;
    }

    @PostMapping("/axios/login")
    @ResponseBody
//    public Boolean loginUser(@RequestBody User user, HttpServletRequest request) {
    public Boolean loginUser(@RequestBody User user, HttpSession session) {
//        System.out.println("user " + user);
//        System.out.println("user " + user.getId());
//        System.out.println("user " + user.getPassword());
        Boolean result = mainService.userLogin(user);
        //  System.out.println("userLogin result " + result);

        if(result) {
//            HttpSession session = request.getSession();
            session.setAttribute("sessionId", user.getId());
            System.out.println("session " + session.getAttribute("sessionId"));
        }

        return result;
    }

    @GetMapping("/mypage")
    public String getMypage(HttpSession session, Model model) {
        System.out.println("session2 " + session.getAttribute("sessionId"));
        String id = (String) session.getAttribute("sessionId");
        UserDTO userInfo = mainService.getUserInfo(id).get(0);
//        System.out.println("userInfo " + userInfo);
//        System.out.println("userInfo " + userInfo.getId());
//        System.out.println("userInfo " + userInfo.get(0));
//        System.out.println("userInfo " + userInfo.get(0)["id"]);
        model.addAttribute("id", userInfo.getId());
        model.addAttribute("name", userInfo.getName());
        model.addAttribute("nickname", userInfo.getNickname());
        return "mypage";
    }

    @PostMapping("/axios/logout")
    @ResponseBody
    public Boolean userLogout(HttpSession session) {
//        System.out.println("session log out " + session.getAttribute("sessionId"));
        session.removeAttribute("sessionId");
        return true;
    }

    @DeleteMapping("/axios/userDelete")
    @ResponseBody
    public Boolean userDelete(HttpSession session) {

        mainService.userDelete((String) session.getAttribute("sessionId"));
        session.removeAttribute("sessionId");
        return true;
    }

    @PatchMapping("/axios/update")
    @ResponseBody
    public Boolean userUpdate(@RequestBody User user) {
        mainService.userUpdate(user);
        return true;
    }

}
