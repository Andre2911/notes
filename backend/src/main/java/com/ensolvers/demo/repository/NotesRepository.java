package com.ensolvers.demo.repository;

import com.ensolvers.demo.models.Notes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NotesRepository extends JpaRepository<Notes, Integer>{

    @Query("SELECT n FROM Notes n WHERE n.category.id IN :ids")
    List<Notes> findByCategoryIds(@Param("ids") List<Integer> ids);
}
