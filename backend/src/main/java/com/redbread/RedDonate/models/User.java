package com.redbread.RedDonate.models;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {

    private Long id;
    private String email;
    private String password_hash;
    private String nickname;
    private String desc;
    private String category;
    private String avatarUrl;
    private String headerUrl;
    private boolean loggedIn;

    public User() {
    }

    public User(String email, String password_hash, String nickname, String desc, String category, String avatarUrl) {
        this.email = email;
        this.password_hash = password_hash;
        this.nickname = nickname;
        this.desc = desc;
        this.category = category;
        this.avatarUrl = avatarUrl;
        this.loggedIn = false;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "\"email\"", nullable = false)
    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Column(name = "\"password_hash\"", nullable = false)
    public String getPasswordHash() {
        return this.password_hash;
    }

    public void setPasswordHash(String password_hash) {
        this.password_hash = password_hash;
    }

    @Column(name = "\"nickname\"", nullable = false)
    public String getNickname() {
        return this.nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    @Column(name = "\"desc\"", nullable = false)
    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    @Column(name = "\"category\"", nullable = false)
    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }


    @Column(name = "\"avatarUrl\"", nullable = false)
    public String getAvatarUrl() {
        return avatarUrl;
    }

    public void setAvatarUrl(String avatarUrl) {
        this.avatarUrl = avatarUrl;
    }

    @Column(name = "\"headerUrl\"", nullable = false)
    public String getHeaderUrl() {
        return this.headerUrl;
    }

    public void setHeaderUrl(String headerUrl) {
        this.headerUrl = headerUrl;
    }

    @Column(name = "\"loggedIn\"", nullable = false)
    public boolean isLoggedIn() {
        return this.loggedIn;
    }

    public void setLoggedIn(boolean loggedIn) {
        this.loggedIn = loggedIn;
    }

}
