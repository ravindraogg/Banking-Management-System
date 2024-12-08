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
    List<Transaction> senderTransactions = transactionRepository.findBySenderCustomerId(customerId);
    List<Transaction> recipientTransactions = transactionRepository.findByRecipientCustomerId(customerId);
    senderTransactions.addAll(recipientTransactions);
    
    return senderTransactions;
}


    public Transaction makeTransaction(Transaction transaction) {
        return transactionRepository.save(transaction);
    }
    
    public Transaction addTransaction(Transaction transaction) {
        return transactionRepository.save(transaction);
    }

    public Transaction saveTransaction(Transaction transaction) {
        return transactionRepository.save(transaction); // Save the transaction in the database
    }
    
}
