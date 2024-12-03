package bankingmanagement.osdsa.service;

import bankingmanagement.osdsa.model.Branch;
import bankingmanagement.osdsa.repository.BranchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BranchService {

    @Autowired
    private BranchRepository branchRepository;

    public Branch createBranch(Branch branch) {
        return branchRepository.save(branch);
    }

    public List<Branch> getAllBranches() {
        return branchRepository.findAll();
    }

    public long getBranchCount() {
        return branchRepository.count();
    }

    public void deleteBranch(String id) {
        branchRepository.deleteById(id);
    }
}
