package com.ensolvers.demo.controller;

import com.ensolvers.demo.models.Notes;
import com.ensolvers.demo.payload.CategoriesRequest;
import com.ensolvers.demo.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/notes")
public class NoteController {

    private final NoteService noteService;

    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @GetMapping
    public List<Notes> getNotes() {
        return noteService.getAllNotes();
    }

    @GetMapping("/{id}")
    public Notes getNoteById(@PathVariable("id") Integer id) {
        return noteService.getNoteById(id);
    }

    @GetMapping("/byCategory")
    public List<Notes> getNotesByCategory(@RequestParam("categories") String allParams) {

        return noteService.getNotesByCategory(allParams);
    }

    @PostMapping
    public Notes addNotes(@RequestBody Notes notes) {
        return noteService.addNotes(notes);
    }

    @PutMapping("/{id}")
    public Notes updateNotes(@PathVariable("id") Integer id, @RequestBody Notes notes) {
        return noteService.updateNotes(id, notes);
    }

    @DeleteMapping("/{id}")
    public void deleteNotes(@PathVariable("id") Integer id) {
        noteService.deleteNotes(id);
    }
}
