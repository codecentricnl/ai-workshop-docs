---
sidebar_position: 1
---

# Testing GraphQL applications

Add the spring-graphql-test to your pom.xml (if it's not already there)
```xml
 <dependency>
    <groupId>org.springframework.graphql</groupId>
    <artifactId>spring-graphql-test</artifactId>
    <scope>test</scope>
</dependency>
```
To not have to create multiline queries in your test we can write queries in graphql files
and use those in our tests.  
Create a file that resembles a query you want to execute.
```graphql title="src/test/resources/graphql-test/movies.graphql"
query {
    movies {
        imdbId
        title
        releaseDate
    }
}
```

Also create a test class for you MovieController
```java title="src/test/java/nl.codecentric.springforgraphql.movies/MovieControllerTest.java"
@SpringBootTest 
@AutoConfigureGraphQlTester //This instantiates the GraphQL tester to be autowired
class MovieControllerTest {
    @Autowired
    private GraphQlTester graphQlTester;

    @Test
    void shouldFetchMovies() {
        this.graphQlTester
                .documentName("movies") //The graphQlTester will look for a file named movies.graphql created in the previous step
                .execute()
                .path("data.movies.[*]")
                .entityList(Movie.class)
                .hasSize(3)
                .containsExactly(
                        new Movie("tt0111161", "The Shawshank Redemption", LocalDate.of(1994, 10, 14)),
                        new Movie("tt0068646", "The Godfather", LocalDate.of(1972, 3, 24)),
                        new Movie("tt0468569", "The Dark Knight", LocalDate.of(2018, 7, 18))
                );
    }
}
```
