package bankingmanagement.osdsa.controller;

import bankingmanagement.osdsa.model.Branch;
import bankingmanagement.osdsa.service.BranchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import bankingmanagement.osdsa.repository.BranchRepository;
import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class BranchController {

    @Autowired
    private BranchService branchService;
    @Autowired
    private BranchRepository branchRepository; 
    @PostMapping("/add")
    public Branch createBranch(@RequestBody Branch branch) {
        return branchService.createBranch(branch);
    }

    @GetMapping("/branches")
    public List<Branch> getAllBranches() {
        return branchService.getAllBranches();
    }
    @GetMapping("/branch-count")
    public long getBranchCount() {
        return branchRepository.count();  // Returns total number of branches
    }
    @DeleteMapping("/{id}")
    public void deleteBranch(@PathVariable String id) {
        branchService.deleteBranch(id);
    }
}
