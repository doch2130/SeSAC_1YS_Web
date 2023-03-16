package sesac.sesac.spring5.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sesac.sesac.spring5.domain.BoardEntity;
import sesac.sesac.spring5.dto.BoardDTO;
import sesac.sesac.spring5.repository.BoardRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MainService {
    @Autowired
    private BoardRepository boardRepository;

    public List<BoardDTO> getBoardList() {
        List<BoardEntity> result = boardRepository.findAll();
        List<BoardDTO> boards = new ArrayList<BoardDTO>();

        for ( int i = 0; i < result.size(); i++ ) {
            BoardDTO board = new BoardDTO();
            board.setId(result.get(i).getId());
            board.setTitle(result.get(i).getTitle());
            board.setContent(result.get(i).getContent());
            board.setNo(i+1);

            // users 변수에 검색된 user 리스트 데이터를 다시 저장해준다.
            boards.add(board);
        }
        return boards;
    }

    public boolean boardWrite(BoardEntity board) {
        try{
            boardRepository.save(board);
            return true;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return false;
        }
    }

    public BoardDTO getReadBoard(int id) {
        try {
            Optional<BoardEntity> resultBoard = boardRepository.findById(id);
            // System.out.println("resultBoard " + resultBoard);
            BoardDTO board = new BoardDTO();

            if(resultBoard.isPresent()) {
//                System.out.println("resultBoard " + resultBoard.get().getId());
                board.setId(resultBoard.get().getId());
                board.setTitle(resultBoard.get().getTitle());
                board.setContent(resultBoard.get().getContent());
            }
//             System.out.println("board result " + board.getContent());
            return board;
        } catch (Exception e) {
            return null;
        }
    }

    public boolean deleteBoard(int id) {
        try {
            Optional<BoardEntity> result = boardRepository.deleteById(id);
            // System.out.println("delete result " + result);
            return true;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return false;
        }
    }

    public boolean updateBoard(BoardEntity board) {
        try {
            System.out.println("board update " + board.getId());
            System.out.println("board update " + board.getTitle());
            System.out.println("board update " + board.getContent());
            int result = boardRepository.updateBoard(board.getId(), board.getTitle(), board.getContent());
            // System.out.println("update result " + result);
            return true;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return false;
        }
    }
}
