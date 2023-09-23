package com.josephaines.personalwebsite.controllers.form;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDateTime;

@Controller
public class FormController {
    @PostMapping("/form")
    public ModelAndView formReceived(@ModelAttribute("form") Form form, Model model) {
        LocalDateTime dateNow = LocalDateTime.now();

//        Convert date into something readable
        String formDate = dateNow.getYear() +
                "-" + dateNow.getMonthValue() +
                "-" + dateNow.getDayOfMonth() +
                "_" + dateNow.getHour() +
                "-" + dateNow.getMinute() +
                "-" + dateNow.getSecond() +
                "-" + dateNow.getNano();

//        Print system message
        System.out.println(formDate + " - FORM RECEIVED");

//        Create a path to save to, based on the time of the form was received.
        String formPath = "Form-" + formDate + ".json";

//        Json serializer with pretty printing turned on
        Gson gson = new GsonBuilder().setPrettyPrinting().create();

//        FileWriter can throw an IOException so wrap in a try-catch with the catch printing out an error message.
        try {
//            Create a FileWrite then pass it into the object to json serializer, then flush and close the writer.
            FileWriter fileWriter = new FileWriter(formPath);
            gson.toJson(form, fileWriter);
            fileWriter.flush();
            fileWriter.close();
        }catch (IOException e){
            System.out.println(formDate + " - ERROR - Failed to print form JSON file:" + formPath);
            return new ModelAndView("redirect:/error");
        }
        System.out.println(formDate + " - SUCCESS - Form successfully exported to: " + formPath);
        return new ModelAndView("redirect:/");
    }
}
