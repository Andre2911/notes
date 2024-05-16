package com.ensolvers.demo.service;

import com.ensolvers.demo.models.Notes;
import com.ensolvers.demo.payload.CategoriesRequest;
import com.ensolvers.demo.repository.NotesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class NoteServiceImpl implements NoteService{

    @Autowired
    private NotesRepository notesRepository;

    @Override
    public List<Notes> getAllNotes() {
        return notesRepository.findAll();
    }

    @Override
    public Notes getNoteById(Integer id) {
        return notesRepository.findById(id).orElseThrow(() -> new RuntimeException("Note not found"));
    }

    @Override
    public List<Notes> getNotesByCategory(String categories) {
        if (categories.isEmpty() )
            return notesRepository.findAll();

        List<Integer> values = Arrays.stream(categories.split(",")).map(Integer::parseInt).toList();
        if (values.contains(0))
            return notesRepository.findAll();

        return notesRepository.findByCategoryIds(values);
    }

    @Override
    public Notes addNotes(Notes notes) {
        return notesRepository.save(notes);
    }

    @Override
    public Notes updateNotes(Integer id, Notes notes) {
        return notesRepository.save(notes);
    }

    @Override
    public void deleteNotes(Integer id) {
        notesRepository.deleteById(id);
    }
}
