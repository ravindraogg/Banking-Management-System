package bankingmanagement.osdsa.controller;

import bankingmanagement.osdsa.model.Account;
import bankingmanagement.osdsa.model.Customer;
import bankingmanagement.osdsa.service.AccountService;
import bankingmanagement.osdsa.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private CustomerService customerService;

    @Autowired
    private AccountService accountService;


    @GetMapping("/dashboard")
    @PreAuthorize("hasRole('ADMIN')")
    public String getAdminDashboard() {
        return "Admin Dashboard";
    }

    // Create a new customer
    @PostMapping("/customer")
    public ResponseEntity<Customer> createCustomer(@RequestBody Customer customer) {
        Customer createdCustomer = customerService.createCustomer(customer);
        return new ResponseEntity<>(createdCustomer, HttpStatus.CREATED);
    }
    // Get all customers
    @GetMapping("/customers")
    public List<Customer> getAllCustomers() {
        return customerService.getAllCustomers();
    }

    // Create an account for a customer
    @PostMapping("/createAccount")
    public ResponseEntity<String> createAccount(@RequestBody Account account) {
        accountService.createAccount(account);
        return ResponseEntity.ok("Account created successfully.");
    }
    // Get all accounts
    @GetMapping("/accounts")
    public List<Account> getAllAccounts() {
        return accountService.getAllAccounts();
    }

    // Get customer by ID
    @GetMapping("/customer/{id}")
    public Customer getCustomerById(@PathVariable String id) {
        return customerService.getCustomerById(id);
    }

    // Get customer count
    @GetMapping("/customer-count")
    public long getCustomerCount() {
        return customerService.getCustomerCount();
    }

    // // Get branch count
    // @GetMapping("/branch-count")
    // public long getBranchCount() {
    //     return branchService.getBranchCount();
    // }

    // Delete a customer by ID
    @DeleteMapping("/customer/{id}")
    public void deleteCustomer(@PathVariable String id) {
        customerService.deleteCustomer(id);
    }

    // Delete an account by ID
    @DeleteMapping("/account/{id}")
    public void deleteAccount(@PathVariable String id) {
        accountService.deleteAccount(id);
    }
}
