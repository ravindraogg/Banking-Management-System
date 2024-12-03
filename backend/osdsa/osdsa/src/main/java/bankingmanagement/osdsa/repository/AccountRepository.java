package bankingmanagement.osdsa.repository;

import bankingmanagement.osdsa.model.Account;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;

public interface AccountRepository extends MongoRepository<Account, String> {
    Optional<Account> findByCustomerId(String customerId);
}

