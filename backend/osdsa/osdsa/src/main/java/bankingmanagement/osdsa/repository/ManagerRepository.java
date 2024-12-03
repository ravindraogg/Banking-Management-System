package bankingmanagement.osdsa.repository;

import bankingmanagement.osdsa.model.Manager;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ManagerRepository extends MongoRepository<Manager, String> {
}
