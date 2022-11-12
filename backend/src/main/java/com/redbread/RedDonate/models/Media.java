package com.redbread.RedDonate.models;

import javax.persistence.*;

@Entity
@Table(name = "media")
public class Media {

    public Long id;

    public Media() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

}
