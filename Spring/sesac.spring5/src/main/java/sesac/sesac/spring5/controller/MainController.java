package sesac.sesac.spring5.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesac.sesac.spring5.domain.BoardEntity;
import sesac.sesac.spring5.dto.BoardDTO;
import sesac.sesac.spring5.service.MainService;

import java.util.ArrayList;

@Controller
public class MainController {

    @Autowired
    MainService mainService;

    @GetMapping("/")
    public String getBoard(Model model) {
        ArrayList<BoardDTO> boardList = (ArrayList<BoardDTO>) mainService.getBoardList();
        model.addAttribute("list", boardList);
        return "board";
    }

    @GetMapping("/write")
    public String getWriteBoard() {
        return "boardWrite";
    }

    @PostMapping("/write")
    @ResponseBody
    public boolean postWriteBoard(@RequestBody BoardDTO boardDTO) {
        BoardEntity board = new BoardEntity();
        board.setTitle(boardDTO.getTitle());
        board.setContent(boardDTO.getContent());
        return mainService.boardWrite(board);
    }

    @PostMapping("/read/check")
    @ResponseBody
    public boolean postReadBoardCheck(@RequestBody BoardDTO boardDTO) {
        // System.out.println("id " + id);
        BoardDTO board = mainService.getReadBoard(boardDTO.getId());
        // System.out.println("board " + board.getId());
        return board != null;
    }

    @GetMapping("/board/read")
    public String getReadBoard(@RequestParam int id, Model model) {
        BoardDTO board = mainService.getReadBoard(id);
//        System.out.println("board result result " + board);
//        System.out.println("board result result " + board.getId());
//        System.out.println("board result result " + board.getTitle());
//        System.out.println("board result result " + board.getContent());
        model.addAttribute("board", board);
        return "boardRead";
    }

    @DeleteMapping("/board/delete")
    @ResponseBody
    public Boolean deleteBoard(@RequestBody BoardDTO boardDTO) {
        return mainService.deleteBoard(boardDTO.getId());
    }

    @GetMapping("/update")
    public String getUpdateBoard(@RequestParam int id, Model model) {
        BoardDTO board = mainService.getReadBoard(id);
        model.addAttribute("board", board);
        return "boardUpdate";
    }

    @PatchMapping("/board/update")
    @ResponseBody
    public Boolean updateBoard(@RequestBody BoardDTO boardDTO) {
        BoardEntity board = new BoardEntity();
        board.setId(boardDTO.getId());
        board.setTitle(boardDTO.getTitle());
        board.setContent(boardDTO.getContent());
        return mainService.updateBoard(board);
    }
}
