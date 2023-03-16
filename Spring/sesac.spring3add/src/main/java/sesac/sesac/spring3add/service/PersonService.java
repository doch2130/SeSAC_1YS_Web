package sesac.sesac.spring3add.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sesac.sesac.spring3add.domain.Person;
import sesac.sesac.spring3add.dto.PersonDTO;
import sesac.sesac.spring3add.mapper.PersonMapper;

@Service
public class PersonService {

    @Autowired
    PersonMapper personMapper;

    public String insertPerson(PersonDTO personDTO) {
        try {
            Person person = new Person();
            person.setId(personDTO.getId());
            person.setPassword(personDTO.getPassword());
            person.setName(personDTO.getName());

            personMapper.insertPerson(person);
            return "true";
        } catch (Exception e) {
            return e.getMessage();
        }
    }

    public PersonDTO getPerson(PersonDTO personDTO) {
        try {
            Person person = personMapper.getPerson(personDTO.getId(), personDTO.getPassword());

            if(person == null) return null;

            PersonDTO info = new PersonDTO();
            info.setId(person.getId());
            info.setPassword(person.getPassword());
            info.setName(person.getName());
            info.setNickname(person.getId() + person.getName());

            return info;

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return null;
    }

    public void updatePerson(PersonDTO personDTO) {
        Person person = new Person();
        person.setId(personDTO.getId());
        person.setName(personDTO.getName());
        person.setPassword(personDTO.getPassword());

        personMapper.updatePerson(person);
    }

    public void deletePerson(PersonDTO personDTO) {
        personMapper.deletePerson(personDTO.getId());
    }
}
