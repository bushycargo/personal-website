package com.josephaines.personalwebsite.controllers.form;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class FormController {
    @PostMapping("/form")
    public ModelAndView formReceived(@ModelAttribute("form") Form form, Model model) {
//        Send to database or something
        return new ModelAndView("redirect:/");
    }
}
