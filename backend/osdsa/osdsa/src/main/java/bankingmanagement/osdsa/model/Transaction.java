package bankingmanagement.osdsa.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "transactions")
public class Transaction {

    @Id
    private String id;
    private String senderCustomerId;  // Add senderCustomerId
    private String recipientCustomerId;  // Add recipientCustomerId
    private String senderAccountId;  // Add senderAccountId
    private String recipientAccountId;  // Add recipientAccountId
    private double amount;
    private String transactionDate;
    private String transactionType;
    private String description;  // Add description

    // Getters and setters for new fields
    public String getSenderCustomerId() {
        return senderCustomerId;
    }

    public void setSenderCustomerId(String senderCustomerId) {
        this.senderCustomerId = senderCustomerId;
    }

    public String getRecipientCustomerId() {
        return recipientCustomerId;
    }

    public void setRecipientCustomerId(String recipientCustomerId) {
        this.recipientCustomerId = recipientCustomerId;
    }

    public String getSenderAccountId() {
        return senderAccountId;
    }

    public void setSenderAccountId(String senderAccountId) {
        this.senderAccountId = senderAccountId;
    }

    public String getRecipientAccountId() {
        return recipientAccountId;
    }

    public void setRecipientAccountId(String recipientAccountId) {
        this.recipientAccountId = recipientAccountId;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public String getTransactionDate() {
        return transactionDate;
    }

    public void setTransactionDate(String transactionDate) {
        this.transactionDate = transactionDate;
    }

    public String getTransactionType() {
        return transactionType;
    }

    public void setTransactionType(String transactionType) {
        this.transactionType = transactionType;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "Transaction [id=" + id + ", senderCustomerId=" + senderCustomerId + ", recipientCustomerId=" + recipientCustomerId +
                ", senderAccountId=" + senderAccountId + ", recipientAccountId=" + recipientAccountId + ", amount=" + amount +
                ", transactionDate=" + transactionDate + ", transactionType=" + transactionType + ", description=" + description + "]";
    }
}
