package bankingmanagement.osdsa.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import bankingmanagement.osdsa.model.Branch;

@Repository
public interface BranchRepository extends MongoRepository<Branch, String> {
    // You can add custom queries here if needed
}
