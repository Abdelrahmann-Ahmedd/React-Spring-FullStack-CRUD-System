package com.crud_app.employee_mangement_app.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crud_app.employee_mangement_app.EmployeeDto.EmployeeDto;
import com.crud_app.employee_mangement_app.EmployeeMapper.EmployeeMapper;
import com.crud_app.employee_mangement_app.entity.Employees;
import com.crud_app.employee_mangement_app.exception.ResourceNotFoundException;
import com.crud_app.employee_mangement_app.repository.EmployeeRepository;
import com.crud_app.employee_mangement_app.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto addEmployee(EmployeeDto employeeDto) {
        Employees employees = EmployeeMapper.mapToEmployee(employeeDto);
        Employees newEmployee = employeeRepository.save(employees);
        return EmployeeMapper.mapToEmployeeDto(newEmployee);
    }

    @Override
    public EmployeeDto updateEmployee(EmployeeDto employeeDto) {
        Employees employees = EmployeeMapper.mapToEmployee(employeeDto);
        Employees newEmployees = employeeRepository.save(employees);
        return EmployeeMapper.mapToEmployeeDto(newEmployees);
    }

    @Override
    public void deleteEmployee(long id) {
        employeeRepository.deleteById(id);
    }

    @Override
    public EmployeeDto getEmployeeById(long id) {
        Employees employees = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("This Employee" + id + "is Not Exist"));
        return EmployeeMapper.mapToEmployeeDto(employees);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employees> employees = employeeRepository.findAll();
        return employees.stream().map((employee) -> EmployeeMapper.mapToEmployeeDto(employee))
                .collect(Collectors.toList());
    }

}
