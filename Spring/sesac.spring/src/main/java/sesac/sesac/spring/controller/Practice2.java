package sesac.sesac.spring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;


@Controller
public class Practice2 {
    @GetMapping("/people")
    public String people(Model model) {
        ArrayList<Person> person = new ArrayList<Person>();
        person.add(new Person("kim", 10));
        person.add(new Person("lee", 20));
        person.add(new Person("hong", 30));
        person.add(new Person("park", 40));
        person.add(new Person("shin", 50));
        model.addAttribute("person", person);
        return "practice2";
    }
}

class Person {
    String name;
    int age;

    Person (String name, int age) {
        this.name = name;
        this.age = age;
    }
    public String getName() {
        return name;
    }
    public int getAge() {
        return age;
    }
}