package bankingmanagement.osdsa.service;

import bankingmanagement.osdsa.model.Loan;
import bankingmanagement.osdsa.repository.LoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LoanService {

    @Autowired
    private LoanRepository loanRepository;

    // Create a loan
    public Loan createLoan(Loan loan) {
        return loanRepository.save(loan);
    }

    // Get all loans for a specific customer
    public List<Loan> getLoansByCustomerId(String customerId) {
        return loanRepository.findByCustomerId(customerId);
    }

    // Get loan by ID
    public Loan getLoanById(String id) {
        Optional<Loan> loan = loanRepository.findById(id);
        return loan.orElse(null);
    }

    // Update loan status
    public Loan updateLoanStatus(String id, String status) {
        Optional<Loan> loanOpt = loanRepository.findById(id);
        if (loanOpt.isPresent()) {
            Loan loan = loanOpt.get();
            loan.setStatus(status);
            return loanRepository.save(loan);
        }
        return null;
    }

    public List<Loan> getAllLoans() {
        return loanRepository.findAll();
    }

    // Delete a loan
    public void deleteLoan(String id) {
        loanRepository.deleteById(id);
    }
}
