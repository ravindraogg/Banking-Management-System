package bankingmanagement.osdsa.repository;

import bankingmanagement.osdsa.model.Branch;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BranchRepository extends MongoRepository<Branch, String> {
}
