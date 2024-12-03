package bankingmanagement.osdsa.controller;

import bankingmanagement.osdsa.model.Account;
import bankingmanagement.osdsa.model.Customer;
import bankingmanagement.osdsa.model.Transaction;
import bankingmanagement.osdsa.service.AccountService;
import bankingmanagement.osdsa.service.CustomerService;
import bankingmanagement.osdsa.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customer")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @Autowired
    private AccountService accountService;

    @Autowired
    private TransactionService transactionService;

    // Get the customer details by ID
    @GetMapping("/{id}")
    public Customer getCustomerById(@PathVariable String id) {
        return customerService.getCustomerById(id);
    }

    // Get all accounts of the customer
    @GetMapping("/customers/{customerId}/accounts")
    public Account getAccountsByCustomerId(@PathVariable String customerId) {
        return accountService.getAccountByCustomerId(customerId);
    }

    // Get all transactions of a specific account
    @GetMapping("/{customerId}/transactions")
    public List<Transaction> getCustomerTransactions(@PathVariable String customerId) {
        return transactionService.getTransactionsByCustomerId(customerId);
    }

    // Make a transaction from one account to another
    @PostMapping("/{customerId}/transaction")
    public Transaction makeTransaction(@PathVariable String customerId, @RequestBody Transaction transaction) {
        return transactionService.makeTransaction(transaction);
    }

    // Update customer details
    @PutMapping("/{id}")
    public Customer updateCustomer(@PathVariable String id, @RequestBody Customer customer) {
        return customerService.updateCustomer(id, customer);
    }
}
