---
sidebar_position: 5
---

# Complex Objects (Result)
First have a DTO to contain the result for the query
```java
public record Movie(String imdbId, String title, LocalDate releaseDate) {
}
```

Second you'll need a controller for handling the Query
```java
@Controller
public class MovieController {

    @QueryMapping
    public List<Movie> movies() {
        return List.of(
                new Movie("tt0468569", "The Dark Knight", LocalDate.of(2018, 7, 18))
        );
    }
}
```
