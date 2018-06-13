package hs.controller;

import hs.dao.CountriesRepository;
import hs.dao.StatesRepository;
import hs.enums.Designation;
import hs.enums.Salutation;
import hs.model.Country;
import hs.model.Employee;
import hs.model.State;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class ResourcesController {
    @Autowired
    private StatesRepository statesRepository;
    @Autowired
    private CountriesRepository countriesRepository;

    @GetMapping("/states")
    public List<State> getAllStates() {
        return statesRepository.findAll();
    }

    @GetMapping("/designations")
    public List<Designation> getAllDesignations() {
        return Arrays.asList(Designation.values());
    }

    @GetMapping("/salutations")
    public List<Salutation> getAllSalutations() {
        return Arrays.asList(Salutation.values());

    }

    @GetMapping("/countries")
    public List<Country> getAllCountries() {
        return countriesRepository.findAll();
    }
}
