# Use a Maven image for building the project
FROM maven:3.8.8-openjdk-17 AS build

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Run Maven to build the Spring Boot application
RUN mvn clean package

# Use a lightweight JDK image for running the application
FROM openjdk:17-jdk-alpine

# Set working directory
WORKDIR /app

# Copy the built JAR file from the build stage
COPY --from=build /app/target/osdsa-0.0.1-SNAPSHOT.jar app.jar

# Expose the port Spring Boot will run on
EXPOSE 8080

# Command to run the application
ENTRYPOINT ["java", "-jar", "/app.jar"]
