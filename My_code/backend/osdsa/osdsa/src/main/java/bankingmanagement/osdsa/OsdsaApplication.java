package bankingmanagement.osdsa;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories(basePackages = "bankingmanagement.osdsa.repository")
public class OsdsaApplication {
    public static void main(String[] args) {
        SpringApplication.run(OsdsaApplication.class, args);
    }
}

