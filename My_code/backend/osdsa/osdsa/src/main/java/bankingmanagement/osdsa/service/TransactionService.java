package bankingmanagement.osdsa.service;

import bankingmanagement.osdsa.model.Transaction;
import bankingmanagement.osdsa.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    public List<Transaction> getTransactionsByCustomerId(String customerId) {
        return transactionRepository.findByCustomerId(customerId);
    }

    public Transaction makeTransaction(Transaction transaction) {
        return transactionRepository.save(transaction);
    }
    
    public Transaction addTransaction(Transaction transaction) {
        return transactionRepository.save(transaction);
    }
}
