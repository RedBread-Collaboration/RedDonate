package com.redbread.RedDonate.controllers;

import com.redbread.RedDonate.models.Donate;
import com.redbread.RedDonate.repositories.DonateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping(path = "/donates")
public class DonateController {
    @Autowired
    private DonateRepository donateRepository;

    @RequestMapping(path = "/getAllDonates", method = RequestMethod.GET)
    public Iterable<Donate> getAllDonates() {
        return donateRepository.findAll();
    }

    @RequestMapping(path = "/getDonateById", method = RequestMethod.GET)
    public Donate getDonateById(@RequestParam @Valid Long donateId) {
        Optional<Donate> need_donate = donateRepository.findById(donateId);
        if (need_donate.isPresent()) {
            Donate donate = need_donate.get();
            return donate;
        }
        return null;
    }

    @RequestMapping(path = "/createDonate", method = RequestMethod.POST)
    public Donate createDonate(@Valid @RequestParam Long userId, @Valid @RequestParam String nickname, @Valid @RequestParam String comment, @Valid @RequestParam Float amount) {
        Donate donate = new Donate();
        donate.setUserId(userId);
        donate.setNickname(nickname);
        donate.setComment(comment);
        donate.setAmount(amount);
        LocalDateTime localDateTime = LocalDateTime.now();
        ZonedDateTime zdt = ZonedDateTime.of(localDateTime, ZoneId.systemDefault());
        long datetime = zdt.toInstant().toEpochMilli();
        donate.setDatetime(datetime);
        return donateRepository.save(donate);
    }

    @RequestMapping(path = "/updateDonate", method = RequestMethod.PUT)
    public Donate updateDonate(@Valid @RequestParam Long donateId, @Valid @RequestParam Long userId, @Valid @RequestParam String nickname, @Valid @RequestParam String comment, @Valid @RequestParam Float amount) {
        Donate donate = getDonateById(donateId);
        donate.setUserId(userId);
        donate.setNickname(nickname);
        donate.setComment(comment);
        donate.setAmount(amount);
        final Donate updatedDonate = donateRepository.save(donate);
        return updatedDonate;
    }

    @RequestMapping(path = "/deleteDonate", method = RequestMethod.DELETE)
    public void deleteDonate(@Valid @RequestParam Long donateId) {
        Donate donate = getDonateById(donateId);
        donateRepository.delete(donate);
    }

    @RequestMapping(path = "/getTopDonatesByUserId", method = RequestMethod.GET)
    public ArrayList<Donate> getTopDonatesByUserId(@RequestParam @Valid Long userId, int limit) {
        ArrayList<Donate> allUserDonates = donateRepository.findAllByUserId(userId);
        ArrayList<Donate> topDonates = new ArrayList<>();
        if (allUserDonates.size() != 0) {
            int donatesCount = allUserDonates.size();
            if (donatesCount < limit) limit = donatesCount;
            allUserDonates.sort(new Donate().DonateAmountComparator);
            for (int i = 0; i < limit; i++) {
                Donate donate = allUserDonates.get(donatesCount - i - 1);
                topDonates.add(donate);
            }
        }
        return topDonates;
    }

    @RequestMapping(path = "/getLastDonatesByUserId", method = RequestMethod.GET)
    public ArrayList<Donate> getLastDonatesByUserId(@RequestParam @Valid Long userId, int limit) {
        ArrayList<Donate> allUserDonates = donateRepository.findAllByUserId(userId);
        ArrayList<Donate> lastDonates = new ArrayList<>();
        if (allUserDonates.size() != 0) {
            int donatesCount = allUserDonates.size();
            if (donatesCount < limit) limit = donatesCount;
            for (int i = 0; i < limit; i++) {
                Donate donate = allUserDonates.get(donatesCount - i - 1);
                lastDonates.add(donate);
            }
        }
        return lastDonates;
    }

    @RequestMapping(path = "/getAllUserDonatesCount", method = RequestMethod.GET)
    public int getAllUserDonatesCount(@RequestParam @Valid Long userId) {
        ArrayList<Donate> allUserDonates = donateRepository.findAllByUserId(userId);
        return allUserDonates.size();
    }

    @RequestMapping(path = "/getAmountForAllTime", method = RequestMethod.GET)
    public int getAmountForAllTime(@RequestParam @Valid Long userId) {
        ArrayList<Donate> allUserDonates = donateRepository.findAllByUserId(userId);
        float amountForAllTime = 0;
        for (Donate donate : allUserDonates)
            amountForAllTime += donate.getAmount();
        return Math.round(amountForAllTime);
    }

}
