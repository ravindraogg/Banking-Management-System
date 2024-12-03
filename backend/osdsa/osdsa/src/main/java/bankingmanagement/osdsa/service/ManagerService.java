package bankingmanagement.osdsa.service;

import bankingmanagement.osdsa.model.Manager;
import bankingmanagement.osdsa.repository.ManagerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ManagerService {

    @Autowired
    private ManagerRepository managerRepository;

    public Manager createManager(Manager manager) {
        return managerRepository.save(manager);
    }

    public List<Manager> getAllManagers() {
        return managerRepository.findAll();
    }

    public long getManagerCount() {
        return managerRepository.count();
    }

    public void deleteManager(String id) {
        managerRepository.deleteById(id);
    }
}
