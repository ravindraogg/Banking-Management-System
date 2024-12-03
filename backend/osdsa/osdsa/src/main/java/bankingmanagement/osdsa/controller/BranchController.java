package bankingmanagement.osdsa.controller;

import bankingmanagement.osdsa.model.Branch;
import bankingmanagement.osdsa.service.BranchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/branches")
public class BranchController {

    @Autowired
    private BranchService branchService;

    @PostMapping
    public Branch createBranch(@RequestBody Branch branch) {
        return branchService.createBranch(branch);
    }

    @GetMapping
    public List<Branch> getAllBranches() {
        return branchService.getAllBranches();
    }

    @DeleteMapping("/{id}")
    public void deleteBranch(@PathVariable String id) {
        branchService.deleteBranch(id);
    }
}
