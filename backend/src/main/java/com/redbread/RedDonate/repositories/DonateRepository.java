package com.redbread.RedDonate.repositories;

import com.redbread.RedDonate.models.Donate;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface DonateRepository extends CrudRepository<Donate, Long> {

    public ArrayList<Donate> findAllByUserId(Long userId);

}
