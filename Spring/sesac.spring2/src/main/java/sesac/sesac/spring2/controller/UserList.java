package sesac.sesac.spring2.controller;

import org.springframework.beans.factory.annotation.Required;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesac.sesac.spring2.dto.UserDTO2;
import sesac.sesac.spring2.vo.UserVO2;

import java.util.ArrayList;

    @Controller
    public class UserList {
        ArrayList<UserDTO2> userList = new ArrayList<UserDTO2>();

        @GetMapping({"/practice6", "/practice6/login"})
        public String practice6() {
            return "practice6-login";
        }
        @GetMapping("/practice6/register")
    public String practice6Register() {
        return "practice6-register";
    }
    @GetMapping("/practice6/mypage")
    public String practice6Mypage(Model model) {
//        System.out.println("userList :" + userList);
//        System.out.println("userList :" + userList.get(0));
        model.addAttribute("id", userList.get(0).getId());
        model.addAttribute("gender", userList.get(0).getGender());
        model.addAttribute("birthday", userList.get(0).getBirthday());
        return "practice6-mypage";
    }

    @PostMapping("/axios/practice6-register")
    @ResponseBody
    public String practice6Register(@RequestBody UserDTO2 userDTO2) {
        // System.out.println("userDTO2" + userDTO2);
        // System.out.println("userDTO2" + userDTO2.getId());
        userList.add(userDTO2);
        String msg = "회원가입이 완료되었습니다.";
        return msg;
    }

    @PostMapping("/axios/practice6-login")
    @ResponseBody
    public Boolean practice6Login(@RequestBody UserVO2 userVO2) {
//        System.out.println("userList" + userList);
//        System.out.println("userVO2.getId()" + userVO2.getId());
//        System.out.println("userList.get(0)" + userList.get(0));
//        System.out.println("userList.get(0).getId()" + userList.get(0).getId());
        for (UserDTO2 userDTO2 : userList) {
            if (userDTO2.getId().equals(userVO2.getId()) && userDTO2.getPwd().equals(userVO2.getPwd())) {
                return true;
            }
        }
//        for(int i = 0; i < userList.size(); i++) {
//            if(userList.get(i).getId().equals(userVO2.getId()) && userList.get(i).getPwd().equals(userVO2.getPwd())) {
//                return true;
//            }
//        }
        return false;
    }

    @DeleteMapping("/axios/practice6-delete")
    @ResponseBody
    public Boolean practice6Delete(@RequestBody UserVO2 userVO2) {
        System.out.println("userVO2" + userVO2.getId());
        userList.removeIf(userDTO2 -> userDTO2.getId().contains(userVO2.getId()));
//        for (UserDTO2 userDTO2 : userList) {
//            if(userDTO2.getId().contains(userVO2.getId())) {
//                userList.remove(userDTO2);
//            }
//        }
        return true;
    }

    @PatchMapping("/axios/practice6-update")
    @ResponseBody
    public Boolean practice6Update(@RequestBody UserVO2 userVO2) {
        for (UserDTO2 userDTO2 : userList) {
            if (userDTO2.getId().equals(userVO2.getId()) && userDTO2.getPwd().equals(userVO2.getPwd())) {
                userDTO2.setGender(userVO2.getGender());
                userDTO2.setBirthday(userVO2.getBirthday());
                return true;
            }
        }
        return null;
    }
}