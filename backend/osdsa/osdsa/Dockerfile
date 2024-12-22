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
