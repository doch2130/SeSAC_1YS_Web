package sesac.sesac.spring4.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sesac.sesac.spring4.domain.User;
import sesac.sesac.spring4.domain.User2Entity;
import sesac.sesac.spring4.domain.UserEntity;
import sesac.sesac.spring4.dto.UserDTO;
import sesac.sesac.spring4.dto.UserDTO2;
import sesac.sesac.spring4.mapper.MainMapper;
import sesac.sesac.spring4.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MainService2 {
    @Autowired
    private MainMapper mainMapper;

    @Autowired
    private UserRepository userRepository;


    public List<UserDTO2> getUserList() {
        List<User2Entity> result = userRepository.findAll();
        List<UserDTO2> users = new ArrayList<UserDTO2>();

        for ( int i = 0; i < result.size(); i++ ) {
            UserDTO2 user = new UserDTO2();
            user.setId(result.get(i).getId());
            user.setName(result.get(i).getName());
            user.setNickname(result.get(i).getNickname());
            user.setNo(i+1);

            // users 변수에 검색된 user 리스트 데이터를 다시 저장해준다.
            users.add(user);
        }
        return users;
    }

    public ArrayList<UserDTO2> getUserName(String name) {
        Optional<User2Entity> user = userRepository.findByName(name);
        ArrayList<UserDTO2> userList = new ArrayList<>();

        if(user.isPresent()) {
            UserDTO2 dto = new UserDTO2();
            dto.setId(user.get().getId());
            dto.setNo(0);
            dto.setName(user.get().getName());
            dto.setNickname(user.get().getNickname());
            userList.add(dto);
        }
        return userList;
    }

    public void addUser(User2Entity user) {
        userRepository.save(user);
    }

}
