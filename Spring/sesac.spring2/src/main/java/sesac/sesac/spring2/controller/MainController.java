package sesac.sesac.spring2.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesac.sesac.spring2.dto.UserDTO;
import sesac.sesac.spring2.vo.UserVO;
import sesac.sesac.spring2.vo.UserVO2;

@Controller
public class MainController {

    @GetMapping("/")
    public String main() {
        return "request";
    }


    // Get 방식

    @GetMapping("/get/response1")
    // 보내준 값 중에서 name으로 보내준 값이 있으면 String name에 저장한다.
    // 이름이 같아야 한다.
    //  public String getAPI1(@RequestParam String name, Model model) {
    //      model.addAttribute("name", name);
    //      return "response";
    //  }
    // 이름이 다른 변수에 저장하고 싶은 경우에는 아래와 같이 작성한다.
    // name으로 넘어오는 값을 test 변수에 저장한다.
    //  public String getAPI1(@RequestParam("name") String test) {}

    public String getAPI1(@RequestParam(value = "name", required = true) String name2, Model model) {
        model.addAttribute("name", name2);
        return "response";
    }

    @GetMapping("/get/response2")
    public String getAPI2(@RequestParam(value = "name", required = false) String name2, Model model) {
        // required = false로 되어 있으면 name 값이 없어도 form을 전송하겠다는 의미로 받아들여서 에러가 발생하지 않는다.
        // required = true로 설정하면 name 값이 무조건 있어야 하기 때문에 에러가 발생한다.
        model.addAttribute("name", name2);
        return "response";
    }

    @GetMapping("/get/response3/{name}/{age}")
    //  url의 값을 각각 name, age에 저장한다.
    // 이 경우에는 name, age를 무조건 전부 보내줘야 한다.
    // url이 달라지면 다른 것으로 인식하게 된다.
    public String getAPI3(@PathVariable String name, @PathVariable("age") String age, Model model) {
        // PathVariabel은 GetMapping에서 저장한 변수를 다시 저장한다.
        // 변수 이름이 같으면 name처럼 처리하고, 다르면 age처럼 처리하면 된다.
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "response";
    }

    @GetMapping({"/get/response4/{name}", "/get/response4/{name}/{age}"})
    // 다음과 같이 설정하면, name, name+age 2개에 대한 url을 받을 수 있게 된다.
    // 단, 배열로 설정해줘야 한다.
    // 이 상태에서 그냥 실행을 하면 age를 보내지 않고 있기 때문에 Error가 발생한다.
    //  public String getAPI4(@PathVariable String name, @PathVariable String age, Model model) {}
    // 그래서 age에는 required=false를 설정해야 한다.
    public String getAPI4(@PathVariable String name, @PathVariable(value="age", required=false) String age, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "response";
    }



    // Post 방식

    @GetMapping("/post")
    public String mainPost() {
        return "request2";
    }
    @PostMapping("/post/response1")
    // Post로 데이터를 받을 때는 PostMapping을 사용한다.
    public String postAPI1(@RequestParam String name, Model model) {
        model.addAttribute("name", name);
        return "response";
    }

    @PostMapping("/post/response2")
    public String postAPI2(@RequestParam(required = false) String name, Model model) {
        model.addAttribute("name", name);
        return "response";
    }

    @PostMapping("/post/response3")
    @ResponseBody
    // res.send("response");
    // response.html 보여주는 것이 아니라, 값을 전달하겠다는 의미로 변경된다.
    public String postAPI3(@RequestParam(required = false) String name, Model model) {
        model.addAttribute("name", name);
        // return "response";
        return "이름은 " + name;
    }


    // 실습1
    @GetMapping("/practice1/{name}")
    public String practice1(@PathVariable String name, Model model) {
        model.addAttribute("name", name);
        return "practice1";
    }

    @GetMapping("/practice2")
    public String practice2Main() {
        return "practice2";
}
    @GetMapping("/practice2-introduce")
    public String practice2(@RequestParam String name, String age, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "practice2-response";
    }

    @GetMapping("/practice3")
    public String practice3Main() {
//        LocalDate date = LocalDate.now();
//        System.out.println(date.getYear());
//        System.out.println(date.getMonth());
//        System.out.println(date.getDayOfMonth());
//        int[] month = new int[12];
//        for(int i = 1; i <= month.length; i++) {
//            month[i] = i;
//        }
        return "practice3";
    }

    @PostMapping("/practice3-register")
    public String practice3Register(@RequestParam String name, @RequestParam String gender, @RequestParam String birthdayYear,
                                    @RequestParam String birthdayMon, @RequestParam String birthdayDay,
                                    @RequestParam String interest, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("gender", gender);
        model.addAttribute("birthday", birthdayYear + "-" + birthdayMon + "-" + birthdayDay);
        model.addAttribute("interest", interest);
        return "practice3-response";
    }

//    res.send() 데이터를 보내는 방법 + <br /> 태그 사용 가능
//    @PostMapping("/practice3-register")
//    @ResponseBody
//    public String practice3Register(@RequestParam String name, @RequestParam String gender, @RequestParam String birthdayYear, @RequestParam String birthdayMon,
//                                    @RequestParam String birthdayDay, @RequestParam String interest, Model model) {
//        return "이름은 : " + name + "<br /> 성별은 : " + gender;
//    }



    // DTO

    @GetMapping("/dto")
    public String getDto() {
        return "dto1";
    }

    @GetMapping("/dto/response1")
    @ResponseBody
    public String dtoAPI1(UserDTO userDTO) {
        String msg = userDTO.getName() + " " + userDTO.getAge() + "!!!";
        return msg;
    }

    @PostMapping("/dto/response2")
    @ResponseBody
    public String dtoAPI2(UserDTO userDTO) {
        String msg = userDTO.getName() + " " + userDTO.getAge() + "!!!";
        return msg;
    }

    @PostMapping("/dto/response3")
    @ResponseBody
    // RequestBody는 application json 형태의 데이터만 mapping을 해준다.
    // form 전송에서는 사용할 수 없다.
    public String dtoAPI3(@RequestBody UserDTO userDTO) {
        // 에러 뜨는게 정상
        String msg = userDTO.getName() + " " + userDTO.getAge() + "!!!";
        return msg;
    }


    // vo

    @GetMapping("/vo")
    public String vo() {
        return "practice4-vo";
    }

    @GetMapping("/vo/response1")
    @ResponseBody
    // 클래스 안의 set함수를 이용해서 값을 대입하는데, VO에는 set함수가 없어서 Null이 나오는 것이다.
    public String voAPI1(UserVO userVO) {
        String msg = "이름 : " + userVO.getName() + "\n나이 : " + userVO.getAge();
        return msg;
    }
    @PostMapping("/vo/response2")
    @ResponseBody
    // 클래스 안의 set함수를 이용해서 값을 대입하는데, VO에는 set함수가 없어서 Null이 나오는 것이다.
    public String voAPI2(UserVO userVO) {
        String msg = "이름 : " + userVO.getName() + "\n나이 : " + userVO.getAge();
        return msg;
    }
    @PostMapping("/vo/response3")
    @ResponseBody
    // RequestBody는 application json 형태의 데이터만 mapping을 해준다.
    // form 전송에서는 사용할 수 없다.
    public String voAPI3(@RequestBody UserVO userVO) {
        String msg = "이름 : " + userVO.getName() + "\n나이 : " + userVO.getAge();
        return msg;
    }


    // axios + DTO
    @GetMapping("/axiosDto")
    public String axiosDto() {
        return "axiosDto";
    }

    @GetMapping("/axios/response1")
    @ResponseBody
    public String axiosAPI1(@RequestParam(value="name") String name, @RequestParam(value="age") String age) {
        String msg = "이름 : " + name + "\n나이 : " + age;
        return msg;
    }
    @GetMapping("/axios/response2")
    @ResponseBody
    public String axiosAPI2(UserDTO userDTO) {
        String msg = "이름 : " + userDTO.getName() + "\n나이 : " + userDTO.getAge();
        return msg;
    }

    @PostMapping("/axios/response3")
    @ResponseBody
    // axios post 요청을 할 때는 RequestParam로 받을 수 없다.
    public String axiosAPI3(@RequestParam(value="name") String name, @RequestParam(value="age") String age) {
        String msg = "이름 : " + name + "\n나이 : " + age;
        return msg;
    }
    @PostMapping("/axios/response4")
    @ResponseBody
    // axios post 요청을 할 때 RequestBody가 없으면 NULL이 된다.
    public String axiosAPI4(UserDTO userDTO) {
        String msg = "이름 : " + userDTO.getName() + "\n나이 : " + userDTO.getAge();
        return msg;
    }
    @PostMapping("/axios/response5")
    @ResponseBody
    // axios post 요청을 할 때 RequestBody가 있어야 데이터 mapping이 가능하다.
    public String axiosAPI5(@RequestBody UserDTO userDTO) {
        String msg = "이름 : " + userDTO.getName() + "\n나이 : " + userDTO.getAge();
        return msg;
    }

    // axios + VO
    @GetMapping("/axiosVO")
    public String axiosVO() {
        return "axiosVO";
    }
    @GetMapping("/axios/vo/response1")
    @ResponseBody
    public String axiosvoAPI1(@RequestParam(value="name") String name, @RequestParam(value="age") String age) {
        String msg = "이름 : " + name + "\n나이 : " + age;
        return msg;
    }
    @GetMapping("/axios/vo/response2")
    @ResponseBody
    // VO에는 set 함수가 없어서 NULL이 나온다.
    public String axiosvoAPI2(UserVO userVO) {
        String msg = "이름 : " + userVO.getName() + "\n나이 : " + userVO.getAge();
        return msg;
    }

    @PostMapping("/axios/vo/response3")
    @ResponseBody
    // axios post 요청을 할 때는 RequestParam로 받을 수 없다.
    public String axiosvoAPI3(@RequestParam(value="name") String name, @RequestParam(value="age") String age) {
        String msg = "이름 : " + name + "\n나이 : " + age;
        return msg;
    }
    @PostMapping("/axios/vo/response4")
    @ResponseBody
    // axios post 요청을 할 때 RequestBody가 없으면 NULL이 된다.
    public String axiosvoAPI4(UserVO UserVO) {
        String msg = "이름 : " + UserVO.getName() + "\n나이 : " + UserVO.getAge();
        return msg;
    }
    @PostMapping("/axios/vo/response5")
    @ResponseBody
    // axios post 요청을 할 때 RequestBody가 있어야 데이터 mapping이 가능하다.
    // VO에 set함수가 없어도 RequestBody가 있으면 데이터 mapping 가능하다.
    public String axiosvoAPI5(@RequestBody UserVO userVO) {
        String msg = "이름 : " + userVO.getName() + "\n나이 : " + userVO.getAge();
        return msg;
    }


    // 동적 폼 실습
    @GetMapping("/practice5")
    public String practice5() {
        return "practice5";
    }

    @GetMapping("/axios/practice5-GET")
    @ResponseBody
    public String[] practice5GET(@RequestParam(value="name") String name, @RequestParam(value="gender") String gender,
                                 @RequestParam(value="birthday") String birthday, @RequestParam(value="interest") String interest) {
        String[] result = new String[2];
        String msg = "이름 : " + name + "\n성별 : " + gender + "\n생일 : " + birthday + "\n관심사 : " + interest;
        result[0] = msg;
        result[1] = name;
        return result;
    }

    @PostMapping("/axios/practice5-POST")
    @ResponseBody
    public String[] practice5POST(@RequestBody UserVO2 userVO2) {
        String[] result = new String[2];
        String msg = "아이디 : " + userVO2.getId() + "\n비밀번호 : " + userVO2.getPwd() + "\n성별 : " + userVO2.getBirthday() + "\n생일 : " + userVO2.getBirthday() + "\n관심사 : " + userVO2.getInterest();
        result[0] = msg;
        result[1] = userVO2.getId();
        return result;
    }
}



