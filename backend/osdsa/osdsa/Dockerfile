# Use Eclipse Temurin JDK 21 with Alpine Linux as the base image
FROM eclipse-temurin:21-jdk-alpine

# Create a volume at /tmp
VOLUME /tmp

# Copy the JAR file generated from your Spring Boot application
COPY target/*.jar app.jar

# Specify the command to run the application
ENTRYPOINT ["java","-jar","/app.jar"]

# Expose the application port
EXPOSE 8080
ENV SPRING_DATA_MONGODB_URI="mongodb+srv://<your_username>:<your_password>@mycosmosmongodbaccount.mongocluster.cosmos.azure.com/?tls=true&authMechanism=SCRAM-SHA-256&retrywrites=false&connectTimeoutMS=30000&socketTimeoutMS=30000" 
ENV SPRING_DATA_MONGODB_DATABASE="<your_databasename>" 
ENV SPRING_DATA_MONGODB_AUTHENTICATION_DATABASE="admin" 
ENV LOGGING_LEVEL_ORG_SPRINGFRAMEWORK_SECURITY="DEBUG"
