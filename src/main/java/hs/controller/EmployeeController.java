package hs.controller;

import hs.exception.ResourceNotFoundException;
import hs.model.Employee;
import hs.dao.EmployeeRepository;
import hs.model.Name;
import hs.util.NumberFormatUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {

        return employeeRepository.findAll();
    }
    @GetMapping("/employees/{id}")
    public Optional<Employee> getemployeesById(@PathVariable(value = "id") String id) {
        Optional<Employee> emp = employeeRepository.findById(id);
        emp.ifPresent(employee ->emp.get().getEmploymentDetails()
                .getCompensationDetails().setGrossSalaryInWords(NumberFormatUtil
                        .numberToWords(emp.get()
                                .getEmploymentDetails()
                                .getCompensationDetails()
                                .getGrossSalary())) );

        return  emp;
    }
    @PostMapping("/employees")
    public Employee createEmployees(@Valid @RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

    @PutMapping("/employees/{id}")
    public Employee updateEmployee(@PathVariable(value = "id") String id,
                           @Valid @RequestBody Employee updatedEmployee) {

        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("employees", "id", id));

        updatedEmployee.setId(employee.getId());


        return employeeRepository.save(updatedEmployee);

    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<?> deleteEmployees(@PathVariable(value = "id") String id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("employee", "id", id));

        employeeRepository.delete(employee);

        return ResponseEntity.ok().build();
    }
}
