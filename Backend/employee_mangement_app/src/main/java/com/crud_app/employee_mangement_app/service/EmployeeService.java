package com.crud_app.employee_mangement_app.service;

import java.util.List;

import com.crud_app.employee_mangement_app.EmployeeDto.EmployeeDto;

public interface EmployeeService {

    EmployeeDto addEmployee(EmployeeDto employeeDto);

    EmployeeDto updateEmployee(EmployeeDto employeeDto);

    void deleteEmployee(long id);

    EmployeeDto getEmployeeById(long id);

    List<EmployeeDto> getAllEmployees();

}
