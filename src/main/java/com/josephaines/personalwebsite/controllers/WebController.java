package com.josephaines.personalwebsite.controllers;

import com.josephaines.personalwebsite.controllers.form.Form;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class WebController {
    @GetMapping("/")
    public String index(Model model){
        model.addAttribute("form", new Form());
        return "index";
    }


}
