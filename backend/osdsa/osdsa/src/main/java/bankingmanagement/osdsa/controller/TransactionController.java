package bankingmanagement.osdsa.controller;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bankingmanagement.osdsa.model.Account;
import bankingmanagement.osdsa.model.Transaction;
import bankingmanagement.osdsa.service.AccountService;
import bankingmanagement.osdsa.service.TransactionService;

@RestController
@RequestMapping("/customer")
public class TransactionController {

    @Autowired
    private AccountService accountService;

    @Autowired
    private TransactionService transactionService;

    // Gets all transactions of a specific account
   @GetMapping("/{customerId}/transactions")
    public List<Transaction> getCustomerTransactions(@PathVariable String customerId) {
        // Filter transactions where the customer is either sender or recipient
        List<Transaction> allTransactions = transactionService.getTransactionsByCustomerId(customerId);
        
        // Filter out only those transactions where customer is involved (either sender or recipient)
        return allTransactions.stream()
                .filter(txn -> txn.getSenderCustomerId().equals(customerId) || txn.getRecipientCustomerId().equals(customerId))
                .collect(Collectors.toList());
    }

    // Makes a transaction from one account to another (fund transfer between two customers)
    @PostMapping("/{customerId}/transaction")
    public Transaction makeTransaction(@PathVariable String customerId, @RequestBody Transaction transaction) {
        // Validate and process the fund transfer

        // Step 1: Retrieve sender's account and ensure the account exists and has sufficient balance
        Account senderAccount = accountService.getAccountByCustomerId(customerId);
        if (senderAccount == null) {
            throw new RuntimeException("Sender account not found.");
        }

        if (senderAccount.getBalance() < transaction.getAmount()) {
            throw new RuntimeException("Insufficient balance.");
        }

        // Step 2: Retrieve the recipient's account using the recipientCustomerId
        Account recipientAccount = accountService.getAccountByCustomerId(transaction.getRecipientCustomerId());
        if (recipientAccount == null) {
            throw new RuntimeException("Recipient account not found.");
        }

        // Step 3: Deduct the amount from the sender's account and add to the recipient's account
        senderAccount.setBalance(senderAccount.getBalance() - transaction.getAmount());
        recipientAccount.setBalance(recipientAccount.getBalance() + transaction.getAmount());

        // Save updated accounts
        accountService.updateAccount(senderAccount);
        accountService.updateAccount(recipientAccount);

        // Step 4: Create two transactions: one for the sender (debit) and one for the recipient (credit)
        Transaction senderTransaction = new Transaction();
        senderTransaction.setSenderCustomerId(customerId);
        senderTransaction.setRecipientCustomerId(transaction.getRecipientCustomerId());
        senderTransaction.setSenderAccountId(senderAccount.getId());
        senderTransaction.setRecipientAccountId(recipientAccount.getId());
        senderTransaction.setAmount(transaction.getAmount());
        senderTransaction.setTransactionType("Debit");
        senderTransaction.setTransactionDate(transaction.getTransactionDate());
        senderTransaction.setDescription(transaction.getDescription());

        Transaction recipientTransaction = new Transaction();
        recipientTransaction.setSenderCustomerId(customerId);
        recipientTransaction.setRecipientCustomerId(transaction.getRecipientCustomerId());
        recipientTransaction.setSenderAccountId(senderAccount.getId());
        recipientTransaction.setRecipientAccountId(recipientAccount.getId());
        recipientTransaction.setAmount(transaction.getAmount());
        recipientTransaction.setTransactionType("Credit");
        recipientTransaction.setTransactionDate(transaction.getTransactionDate());
        recipientTransaction.setDescription(transaction.getDescription());

        // Save both transactions
        transactionService.saveTransaction(senderTransaction);
        transactionService.saveTransaction(recipientTransaction);

        // Return both transactions or sender's transaction as confirmation
        return senderTransaction; // Optionally return both transactions
    }
}
