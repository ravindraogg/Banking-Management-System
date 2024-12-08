package bankingmanagement.osdsa.controller;

import bankingmanagement.osdsa.model.Loan;
import bankingmanagement.osdsa.service.LoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/loan")
public class LoanController {

    @Autowired
    private LoanService loanService;

    // Create a new loan
    @PostMapping("/")
    public Loan createLoan(@RequestBody Loan loan) {
        return loanService.createLoan(loan);
    }

    // Get all loans for a specific customer
    @GetMapping("/customer/{customerId}")
    public List<Loan> getLoansByCustomerId(@PathVariable String customerId) {
        return loanService.getLoansByCustomerId(customerId);
    }

    // Get loan details by loan ID
    @GetMapping("/{id}")
    public Loan getLoanById(@PathVariable String id) {
        return loanService.getLoanById(id);
    }

    // Update the loan status
   // Update the loan status
@PutMapping("/{id}/status")
public Loan updateLoanStatus(@PathVariable String id, @RequestParam String status) {
    return loanService.updateLoanStatus(id, status);
}


    @GetMapping("/")
    public List<Loan> getAllLoans() {
        return loanService.getAllLoans();
    }

    // Delete a loan by ID
    @DeleteMapping("/{id}")
    public void deleteLoan(@PathVariable String id) {
        loanService.deleteLoan(id);
    }
}
