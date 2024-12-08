package bankingmanagement.osdsa.controller;

import bankingmanagement.osdsa.model.Account;
import bankingmanagement.osdsa.model.Customer;
import bankingmanagement.osdsa.repository.CustomerRepository;
import bankingmanagement.osdsa.service.AccountService;
// import bankingmanagement.osdsa.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/customer")
public class CustomerController {

    // @Autowired
    // private CustomerService customerService;

    @Autowired
    private AccountService accountService;

    @Autowired
    private CustomerRepository customerRepository;

    // Get the customer details by ID
    @GetMapping("/{customerId}")
    public ResponseEntity<?> getCustomerByCustomerId(@PathVariable String customerId) {
        Optional<Customer> customer = customerRepository.findByCustomerId(customerId);
        if (customer.isPresent()) {
            return ResponseEntity.ok(customer.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Customer not found");
        }
    }

    // Update customer details
    @PutMapping("/{customerId}")
    public ResponseEntity<Customer> updateCustomer(@PathVariable String customerId, @RequestBody Customer updatedCustomer) {
        Optional<Customer> existingCustomerOpt = customerRepository.findByCustomerId(customerId);
        
        if (existingCustomerOpt.isPresent()) {
            Customer existingCustomer = existingCustomerOpt.get();
            existingCustomer.setFirstName(updatedCustomer.getFirstName());
            existingCustomer.setLastName(updatedCustomer.getLastName());
            existingCustomer.setEmail(updatedCustomer.getEmail());
            existingCustomer.setPhone(updatedCustomer.getPhone());
            existingCustomer.setAddress(updatedCustomer.getAddress());

            // Save the updated customer
            customerRepository.save(existingCustomer);
            return ResponseEntity.ok(existingCustomer);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    // Gets all accounts of the customer
    @GetMapping("/{customerId}/accounts")
public List<Account> getAccountsByCustomerId(@PathVariable String customerId) {
    Account account = accountService.getAccountByCustomerId(customerId);
    return List.of(account);
}

    @GetMapping("/customers")
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }
    @GetMapping("/customers-count")
    public long getCustomerCount() {
        return customerRepository.count();  // Returns total number of customers
    }
    // // Gets all transactions of a specific account
    // @GetMapping("/{customerId}/transactions")
    // public List<Transaction> getCustomerTransactions(@PathVariable String customerId) {
    //     return transactionService.getTransactionsByCustomerId(customerId);
    // }

    // // Makes a transaction from one account to another (fund transfer between two customers)
    // @PostMapping("/{customerId}/transaction")
    // public Transaction makeTransaction(@PathVariable String customerId, @RequestBody Transaction transaction) {
    //     // Validate and process the fund transfer

    //     // Step 1: Retrieve sender's account and ensure the account exists and has sufficient balance
    //     Account senderAccount = accountService.getAccountByCustomerId(customerId);
    //     if (senderAccount == null) {
    //         throw new RuntimeException("Sender account not found.");
    //     }

    //     if (senderAccount.getBalance() < transaction.getAmount()) {
    //         throw new RuntimeException("Insufficient balance.");
    //     }

    //     // Step 2: Retrieve the recipient's account using the recipientCustomerId
    //     Account recipientAccount = accountService.getAccountByCustomerId(transaction.getRecipientCustomerId());
    //     if (recipientAccount == null) {
    //         throw new RuntimeException("Recipient account not found.");
    //     }

    //     // Step 3: Deduct the amount from the sender's account and add to the recipient's account
    //     senderAccount.setBalance(senderAccount.getBalance() - transaction.getAmount());
    //     recipientAccount.setBalance(recipientAccount.getBalance() + transaction.getAmount());

    //     // Save updated accounts
    //     accountService.updateAccount(senderAccount);
    //     accountService.updateAccount(recipientAccount);

    //     // Step 4: Create two transactions: one for the sender (debit) and one for the recipient (credit)
    //     Transaction senderTransaction = new Transaction();
    //     senderTransaction.setSenderCustomerId(customerId);
    //     senderTransaction.setRecipientCustomerId(transaction.getRecipientCustomerId());
    //     senderTransaction.setSenderAccountId(senderAccount.getId());
    //     senderTransaction.setRecipientAccountId(recipientAccount.getId());
    //     senderTransaction.setAmount(transaction.getAmount());
    //     senderTransaction.setTransactionType("Debit");
    //     senderTransaction.setTransactionDate(transaction.getTransactionDate());
    //     senderTransaction.setDescription(transaction.getDescription());

    //     Transaction recipientTransaction = new Transaction();
    //     recipientTransaction.setSenderCustomerId(customerId);
    //     recipientTransaction.setRecipientCustomerId(transaction.getRecipientCustomerId());
    //     recipientTransaction.setSenderAccountId(senderAccount.getId());
    //     recipientTransaction.setRecipientAccountId(recipientAccount.getId());
    //     recipientTransaction.setAmount(transaction.getAmount());
    //     recipientTransaction.setTransactionType("Credit");
    //     recipientTransaction.setTransactionDate(transaction.getTransactionDate());
    //     recipientTransaction.setDescription(transaction.getDescription());

    //     // Save both transactions
    //     transactionService.saveTransaction(senderTransaction);
    //     transactionService.saveTransaction(recipientTransaction);

    //     // Return the sender's transaction as confirmation (can also return both transactions if required)
    //     return senderTransaction;
    // }
}
