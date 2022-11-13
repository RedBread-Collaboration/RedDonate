# Запуск backend

## Подготовка к запуску

**Убедитесь, что у Вас установлена 17 версия JavaSDK**

Ссылка на скачивание:
https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html

```
$ java --version
..our java version..
```

### Устанавливаем `maven`

```
$ sudo apt update
$ sudo apt install maven
...
```

### Собираем проект

```
$ mvn package
...
$ mvn compile
...
```

### Запуск проекта

```
$ java -jar ./target/RedDonate-0.0.1-SNAPSHOT.jar
```
