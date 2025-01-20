package com.crud_app.employee_mangement_app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.crud_app.employee_mangement_app.entity.Employees;

@Repository
public interface EmployeeRepository extends JpaRepository<Employees, Long> {

}
