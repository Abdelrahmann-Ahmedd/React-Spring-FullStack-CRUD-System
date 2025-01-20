package com.crud_app.employee_mangement_app.EmployeeMapper;

import com.crud_app.employee_mangement_app.EmployeeDto.EmployeeDto;
import com.crud_app.employee_mangement_app.entity.Employees;

public class EmployeeMapper {

    public static EmployeeDto mapToEmployeeDto(Employees employees) {
        return new EmployeeDto(
                employees.getId(),
                employees.getFirstName(),
                employees.getLastName(),
                employees.getEmail());
    }

    public static Employees mapToEmployee(EmployeeDto employeeDto) {
        return new Employees(
                employeeDto.getId(),
                employeeDto.getFirstName(),
                employeeDto.getLastName(),
                employeeDto.getEmail());
    }

}
