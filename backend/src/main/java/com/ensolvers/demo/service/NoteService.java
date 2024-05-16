package com.ensolvers.demo.service;

import com.ensolvers.demo.models.Notes;
import com.ensolvers.demo.payload.CategoriesRequest;

import java.util.List;

public interface NoteService {
    public List<Notes> getAllNotes();
    public Notes getNoteById(Integer id);
    public List<Notes> getNotesByCategory(String categories);
    public Notes addNotes(Notes notes);
    public Notes updateNotes(Integer id, Notes notes);
    public void deleteNotes(Integer id);
}
