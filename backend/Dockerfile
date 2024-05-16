# Utiliza una imagen oficial de Maven para construir la aplicación
FROM maven:3.9.5-eclipse-temurin-21 AS build
# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de configuración y dependencias de Maven
COPY pom.xml .
COPY src ./src

# Compila el proyecto
RUN mvn clean package -DskipTests

# Usa una imagen oficial de OpenJDK para ejecutar la aplicación
FROM openjdk:21-slim

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el JAR generado desde la etapa de compilación
COPY --from=build /app/target/*.jar app.jar

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 8081

# Define el comando para ejecutar la aplicación
ENTRYPOINT ["java", "-jar", "app.jar"]
