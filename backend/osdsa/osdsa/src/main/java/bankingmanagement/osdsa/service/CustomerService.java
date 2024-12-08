package bankingmanagement.osdsa.service;

import bankingmanagement.osdsa.model.Customer;
import bankingmanagement.osdsa.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    public Customer createCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    public Customer getCustomerById(String id) {
        Optional<Customer> customer = customerRepository.findById(id);
        return customer.orElse(null);
    }

    public long getCustomerCount() {
        return customerRepository.count();
    }

    public void deleteCustomer(String id) {
        customerRepository.deleteById(id);
    }

    public Customer updateCustomer(String customerId, Customer updatedCustomer) {
        Optional<Customer> existingCustomer = customerRepository.findByCustomerId(customerId);
    
        if (existingCustomer.isPresent()) {
            Customer customer = existingCustomer.get();
    
            // Update fields
            customer.setFirstName(updatedCustomer.getFirstName());
            customer.setLastName(updatedCustomer.getLastName());
            customer.setEmail(updatedCustomer.getEmail());
            customer.setPhone(updatedCustomer.getPhone());
            customer.setAddress(updatedCustomer.getAddress());
    
            // Save updated customer
            return customerRepository.save(customer);
        } else {
            throw new RuntimeException("Customer not found with customerId: " + customerId);
        }
    }
    
    
    
}
