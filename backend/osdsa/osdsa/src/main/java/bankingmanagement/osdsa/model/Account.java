package bankingmanagement.osdsa.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document (collection = "Accounts")
public class Account {

    @Id
    private String accountid;
    private String customerId;
    private double balance;
    private String accountType; // e.g., "Checking", "Savings"
    private String status; // e.g., "Active", "Inactive"
    private String password;
    // Getters and setters
    public String getId() {
        return accountid;
    }

    public void setId(String id) {
        this.accountid = id;
    }

    public String getCustomerId() {
        return customerId;
    }

    public void setCustomerId(String customerId) {
        this.customerId = customerId;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public String getAccountType() {
        return accountType;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    @Override
    public String toString() {
        return "Account [id=" + accountid + ", customerId=" + customerId + ", balance=" + balance + ", accountType="
                + accountType + ", status=" + status + "]";
    }
}
