package com.redbread.RedDonate.controllers;

import com.redbread.RedDonate.models.User;
import com.redbread.RedDonate.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @RequestMapping(path = "/getAllUsers", method = RequestMethod.GET)
    public Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

    @RequestMapping(path = "/getUserById", method = RequestMethod.GET)
    public User getUserById(@RequestParam @Valid Long userId) {
        Optional<User> need_user = userRepository.findById(userId);
        if (need_user.isPresent()) {
            User user = need_user.get();
            return user;
        }
        return null;
    }

    @RequestMapping(path = "/createUser", method = RequestMethod.POST)
    public User createUser(@Valid @RequestParam String email, @Valid @RequestParam String password_hash, @Valid @RequestParam String nickname, @Valid @RequestParam String desc, @Valid @RequestParam String category, @Valid @RequestParam String avatarUrl, @Valid @RequestParam String headerUrl) {
        User user = new User();
        user.setEmail(email);
        user.setPasswordHash(password_hash);
        user.setNickname(nickname);
        user.setDesc(desc);
        user.setCategory(category);
        user.setAvatarUrl(avatarUrl);
        user.setHeaderUrl(headerUrl);
        return userRepository.save(user);
    }

    @RequestMapping(path = "/updateUser", method = RequestMethod.PUT)
    public User updateUser(@RequestParam @Valid Long userId, @Valid @RequestParam String email, @Valid @RequestParam String password_hash, @Valid @RequestParam String nickname, @Valid @RequestParam String desc, @Valid @RequestParam String category, @Valid @RequestParam String avatarUrl, @Valid @RequestParam String headerUrl) {
        User user = getUserById(userId);
        user.setEmail(email);
        user.setPasswordHash(password_hash);
        user.setNickname(nickname);
        user.setDesc(desc);
        user.setCategory(category);
        user.setAvatarUrl(avatarUrl);
        user.setHeaderUrl(headerUrl);
        final User updatedUser = userRepository.save(user);
        return updatedUser;
    }

    @RequestMapping(path = "/deleteUser", method = RequestMethod.DELETE)
    public void deleteUser(@Valid @RequestParam Long userId) {
        User user = getUserById(userId);
        userRepository.delete(user);
    }

}
