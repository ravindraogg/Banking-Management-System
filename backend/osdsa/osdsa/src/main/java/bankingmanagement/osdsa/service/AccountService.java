package bankingmanagement.osdsa.service;

import bankingmanagement.osdsa.model.Account;
import bankingmanagement.osdsa.repository.AccountRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class AccountService {

    @Autowired
    private AccountRepository accountRepository;

    private static final Logger logger = LoggerFactory.getLogger(AccountService.class);

    public Account createAccount(Account account) {
        logger.info("Creating account for customerId: {}", account.getCustomerId());

        // Hash the password before saving
        String hashedPassword = hashPassword(account.getPassword());
        account.setPassword(hashedPassword);

        // Set initial status to Active if not specified
        if (account.getStatus() == null) {
            account.setStatus("Active");
        }

        Account savedAccount = accountRepository.save(account);
        logger.info("Account created with id: {}", savedAccount.getId());
        return savedAccount;
    }

    public List<Account> getAllAccounts() {
        logger.info("Fetching all accounts");
        return accountRepository.findAll();
    }

    public Account getAccountByCustomerId(String customerId) {
        logger.info("Fetching account for customerId: {}", customerId);

        Optional<Account> optionalAccount = accountRepository.findByCustomerId(customerId);
        if (optionalAccount.isPresent()) {
            return optionalAccount.get();
        }

        throw new NoSuchElementException("No account found for customerId: " + customerId);
    }

    public void deleteAccount(String id) {
        logger.info("Attempting to delete account with id: {}", id);
        if (!accountRepository.existsById(id)) {
            throw new NoSuchElementException("No account found with id: " + id);
        }
        accountRepository.deleteById(id);
        logger.info("Account with id: {} deleted successfully", id);
    }

    private String hashPassword(String password) {
        logger.info("Hashing password");
        return BCrypt.hashpw(password, BCrypt.gensalt());
    }
}
