package bankingmanagement.osdsa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bankingmanagement.osdsa.model.Account;
import bankingmanagement.osdsa.model.LoginRequest;
import bankingmanagement.osdsa.repository.AccountRepository;

import java.util.Optional;

@RestController
@RequestMapping("/api")
public class LoginController {

    @Autowired
    private AccountRepository accountRepository;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
        Optional<Account> optionalAccount = accountRepository.findByCustomerId(loginRequest.getEmail());

        if (optionalAccount.isPresent()) {
            Account account = optionalAccount.get();
            if (BCrypt.checkpw(loginRequest.getPassword(), account.getPassword())) {
                return ResponseEntity.ok("Login successful.");
            }
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password.");
    }
}
