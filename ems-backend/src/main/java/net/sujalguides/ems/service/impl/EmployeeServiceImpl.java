package net.sujalguides.ems.service.impl;

import lombok.AllArgsConstructor;
import net.sujalguides.ems.dto.EmployeeDto;
import net.sujalguides.ems.entity.Employee;
import net.sujalguides.ems.mapper.EmployeeMapper;
import net.sujalguides.ems.repository.EmployeeRepository;
import net.sujalguides.ems.service.EmployeeService;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;
    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {

        Employee employee = employeeRepository.findById(employeeId).
                orElseThrow(() ->
                        new RuntimeException("Employee not found with given ID : " + employeeId));

        return EmployeeMapper.mapToEmployeeDto(employee);
    }
}
