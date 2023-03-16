package sesac.sesac.spring3add.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesac.sesac.spring3add.dto.PersonDTO;
import sesac.sesac.spring3add.service.PersonService;

@Controller
// @RestController
// PersonController 안에 있는 모든 함수들이 @ResponseBody 가 붙는다.
 @RequestMapping("/person")
// GetMapping, PostMapping이 나오기전에 url과, 함수를 따로 작성해주는 기능이 있었다.
// 클래스 위에 적는 방식인데, url 값이 들어가 있으면 기본 url이 설정이 된다고 보면 된다.
// ex) login => @GetMapping("/login") => /person/login
// ex2) register => @GetMapping("/register") => /person/register
public class PersonController {

    @Autowired
    PersonService personService;

    @GetMapping("/login")
    public String getPersonLogin() {
        return "login2";
    }

    @GetMapping("/register")
    public String getPersonRegister() {
        return "register2";
    }

    @PostMapping("/register")
    @ResponseBody
    public String postRegister(@RequestBody PersonDTO personDTO) {
        String result = personService.insertPerson(personDTO);
        if(result.equals("true")) {
            return "true";
        } else {
            return result;
        }
    }

    @PostMapping("/login")
    @ResponseBody
    public Boolean postLogin(@RequestBody PersonDTO personDTO) {
        PersonDTO person = personService.getPerson(personDTO);
        if (person == null) return false;
        else return true;
    }

    @PostMapping("/info")
    public String postInfo(PersonDTO personDTO, Model model) {
        PersonDTO person = personService.getPerson(personDTO);
        model.addAttribute("person", person);
        return "my-page2";
    }

    @PatchMapping("/update")
    @ResponseBody
    public String patchInfoEdit(@RequestBody PersonDTO personDTO) {
        personService.updatePerson(personDTO);
        return "";
    }

    @DeleteMapping("/delete")
    @ResponseBody
    public String deleteInfoDelete(@RequestBody PersonDTO personDTO) {
        personService.deletePerson(personDTO);
        return "";
    }
}
