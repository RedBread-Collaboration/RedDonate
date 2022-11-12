package com.redbread.RedDonate.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping(path = "/")
public class HomeController {

    private final ArrayList<String> list = new ArrayList<>();

    @GetMapping(path = "/hui", produces = "application/json")
    public ArrayList<String> getHUI() {
        list.add("HUI");
        return list;
    }


//    @Autowired
//    private UserService userService;
//    @Autowired
//    private SecurityService securityService;
//
//    //    @RequestMapping(path = "/registration", method = RequestMethod.GET)
//    @GetMapping("/registration")
//    public String registration(Model model) {
//        model.addAttribute("userForm", new User());
//        return "registration";
////        return 200;
//    }
//
//    //    @RequestMapping(path = "/registration", method = RequestMethod.POST)
//    @PostMapping("/registration")
//    public String registration(@Valid @RequestParam User userForm, BindingResult bindingResult) {
//        if (bindingResult.hasErrors()) {
//            return "registration";
////            return 400;
//        }
//        userService.save(userForm);
//        securityService.autoLogin(userForm.getEmail(), userForm.getPasswordHash());
//        return "redirect:/welcome";
////        return 200;
//    }
//
//    @GetMapping("/login")
//    public String login(Model model, String error, String logout) {
//        if (error != null) model.addAttribute("error", "Your username and password is invalid.");
//        if (logout != null) model.addAttribute("message", "You have been logged out successfully.");
//        return "login";
//    }
//
//    //    @RequestMapping(path = "/welcome", method = RequestMethod.GET)
//    @GetMapping("/welcome")
//    public String welcome(Model model) {
//        return "welcome";
////        return 200;
//    }

}
