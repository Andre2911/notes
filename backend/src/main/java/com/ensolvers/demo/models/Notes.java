package com.ensolvers.demo.models;

import com.ensolvers.demo.models.types.Status;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table
public class Notes {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, length = 1000)
    private String content;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Status status;

    @ManyToOne
    @JoinColumn(name="category_id", nullable = false)
    private Category category;


}
