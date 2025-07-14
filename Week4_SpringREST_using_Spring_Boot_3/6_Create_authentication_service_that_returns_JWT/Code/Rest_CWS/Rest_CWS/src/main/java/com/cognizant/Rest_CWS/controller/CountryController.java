package com.cognizant.Rest_CWS.controller;

import com.cognizant.Rest_CWS.entity.Country;
import com.cognizant.Rest_CWS.service.CountryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);

    @RequestMapping("/country")
    public Country getCountryIndia() {
        LOGGER.info("START: getCountryIndia()");
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        Country country = (Country) context.getBean("country", Country.class);
        LOGGER.debug("Country: {}", country.toString());
        LOGGER.info("END: getCountryIndia()");
        return country;
    }

    @GetMapping("/country/{code}")
    public Country getCountry(@PathVariable String code) throws Exception {
        LOGGER.info("START: getCountry()");
        Country country = CountryService.getCountry(code);
        LOGGER.debug("Country: {}", country.toString());
        LOGGER.info("END: getCountry()");
        return country;
    }
}
