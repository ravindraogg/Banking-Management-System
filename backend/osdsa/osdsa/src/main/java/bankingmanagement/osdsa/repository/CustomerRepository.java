package bankingmanagement.osdsa.repository;

import bankingmanagement.osdsa.model.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CustomerRepository extends MongoRepository<Customer, String> {
}
