package com.redbread.RedDonate.models;

import javax.persistence.*;
import java.util.Comparator;

@Entity
@Table(name = "donates")
public class Donate {

    private Long id;
    private Long userId;
    private String nickname;
    private String comment;
    private Float amount;
    private long datetime;

    public Donate() {
    }

    public Donate(Long userId, String nickname, String comment, Float amount, long datetime) {
        this.userId = userId;
        this.nickname = nickname;
        this.comment = comment;
        this.amount = amount;
        this.datetime = datetime;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "\"userId\"", nullable = false)
    public Long getUserId() {
        return this.userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    @Column(name = "\"nickname\"", nullable = false)
    public String getNickname() {
        return this.nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    @Column(name = "\"comment\"", nullable = false)
    public String getComment() {
        return this.comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    @Column(name = "\"amount\"", nullable = false)
    public Float getAmount() {
        return this.amount;
    }

    public void setAmount(Float amount) {
        this.amount = amount;
    }

    @Column(name = "\"datetime\"", nullable = false)
    public long getDatetime() {
        return this.datetime;
    }

    public void setDatetime(long datetime) {
        this.datetime = datetime;
    }

    public static Comparator<Donate> DonateAmountComparator = (d1, d2) -> {
        float amount1 = d1.getAmount();
        float amount2 = d2.getAmount();
        return (int) (amount1 - amount2);
    };

}
