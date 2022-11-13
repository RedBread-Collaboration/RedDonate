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
    private String category1;
    private String category2;
    private String avatarUrl;
    private String headerUrl;
    private boolean loggedIn;

    public User() {
    }

    public User(String email, String password_hash, String nickname, String desc, String category1, String category2, String avatarUrl) {
        this.email = email;
        this.password_hash = password_hash;
        this.nickname = nickname;
        this.desc = desc;
        this.category1 = category1;
        this.category2 = category2;
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

    @Column(name = "\"category1\"", nullable = false)
    public String getCategory1() {
        return this.category1;
    }

    public void setCategory1(String category1) {
        this.category1 = category1;
    }

    @Column(name = "\"category2\"", nullable = false)
    public String getCategory2() {
        return this.category2;
    }

    public void setCategory2(String category2) {
        this.category2 = category2;
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
