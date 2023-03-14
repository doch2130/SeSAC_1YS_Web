package sesac.sesac.spring3.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sesac.sesac.spring3.domain.User;
import sesac.sesac.spring3.dto.UserDTO;
import sesac.sesac.spring3.mapper.MainMapper;

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
}
