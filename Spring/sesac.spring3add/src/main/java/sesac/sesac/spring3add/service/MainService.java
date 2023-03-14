package sesac.sesac.spring3add.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sesac.sesac.spring3add.domain.User;
import sesac.sesac.spring3add.dto.UserDTO;
import sesac.sesac.spring3add.mapper.MainMapper;

import java.util.ArrayList;
import java.util.List;

@Service
public class MainService {
    @Autowired
    private MainMapper mainMapper;

    public List<UserDTO> getUserList() {
        // mainMapper이 SQL에 연결되어 있는 것이라고 보면 되는데,
        // 여기서는 retrieveAll = selectALL 이라고 생각하면 된다.
        List<User> result = mainMapper.retrieveAll();
        List<UserDTO> users = new ArrayList<UserDTO>();

        for ( int i = 0; i < result.size(); i++ ) {
            // DB에서 가져온 user 리스트를 userDTO에 저장하는 작업이다.
            UserDTO user = new UserDTO();
            user.setId(result.get(i).getId());
            user.setName(result.get(i).getName());
            user.setNickname(result.get(i).getNickname());
            user.setNo(i+1);

            // users 변수에 검색된 user 리스트 데이터를 다시 저장해준다.
            users.add(user);
        }

        return users;

    }

    public void addUser(User user) {
        mainMapper.insertUser(user);
    }


    public void userRegister(UserDTO userDTO) {
//        System.out.println(userDTO);
//        System.out.println(userDTO.getId());
//        System.out.println("password " + userDTO.getPassword());
        User user = new User();
        user.setId(userDTO.getId());
        user.setName(userDTO.getName());
        user.setNickname(userDTO.getNickname());
        user.setPassword(userDTO.getPassword());
//        System.out.println("user " + user);
        mainMapper.registerUser(user);
    }

    public Boolean userLogin(User user) {
        // mainMapper이 SQL에 연결되어 있는 것이라고 보면 되는데,
        // 여기서는 retrieveAll = selectALL 이라고 생각하면 된다.
//        System.out.println("user " + user);
//        System.out.println("user " + user.getPassword());
//        System.out.println("user " + user.getId());
//        Boolean result = mainMapper.loginUser(user);
        // select 실행 후 결과 값이 배열이라서 List로 설정해야한다.
        List<User> result = mainMapper.loginUser(user);
        System.out.println("result " + result);
//        System.out.println("result " + result.get(0));
//        System.out.println("result " + result.get(0).getId());
//        System.out.println("result " + result.get(0).getPassword());
        if(result.isEmpty()) {
            return false;
        } else {
            return true;
        }
    }

    public List<UserDTO> getUserInfo(String id) {
        List<UserDTO> users = new ArrayList<UserDTO>();
        List<User> result = mainMapper.getUserInfo(id);

        UserDTO user = new UserDTO();
        user.setId(result.get(0).getId());
        user.setName(result.get(0).getName());
        user.setNickname(result.get(0).getNickname());
        users.add(user);
        System.out.println("users " + users);

        return users;
    }

    public void userDelete(String id) {
        mainMapper.deleteUser(id);
    }

    public void userUpdate(User user) {
        mainMapper.updateUser(user);
    }
}
