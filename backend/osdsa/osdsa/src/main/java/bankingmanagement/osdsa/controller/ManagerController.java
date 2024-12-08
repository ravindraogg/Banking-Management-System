package bankingmanagement.osdsa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bankingmanagement.osdsa.model.Manager;
import bankingmanagement.osdsa.repository.ManagerRepository;

@RestController
@RequestMapping("/api/admin")
public class ManagerController {

    @Autowired
    private ManagerRepository managerRepository;

    // Endpoint to get the count of managers
    @GetMapping("/manager-count")
    public long getManagerCount() {
        return managerRepository.count();
    }

    // Example: Get a list of all managers (optional)
    @GetMapping("/managers")
    public List<Manager> getAllManagers() {
        return managerRepository.findAll();
    }
}

