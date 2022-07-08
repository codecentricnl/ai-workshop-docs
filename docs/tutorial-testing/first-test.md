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

## We believe you learn best by doing.
### We've written some tests. Can you fix them? 
```java title="src/test/java/nl.codecentric.springforgraphql.CountryControllerTest.java"
@SpringBootTest
@AutoConfigureGraphQlTester
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class CountryControllerTest {
    @Autowired
    private GraphQlTester graphQlTester;

    @Test
    @Order(1)
    void itShouldGetAllCountries() {
        this.graphQlTester
                .documentName("countries")
                .execute()
                .path("data.countries.[*]")
                .entityList(Country.class)
                .hasSize(3)
                .containsExactly(
                        new Country("Netherlands", "NL"),
                        new Country("Germany", "DE"),
                        new Country("United States", "US")
                );
    }

    @Test
    void itShouldGetCountryByName() {
        this.graphQlTester
                .documentName("country-by-abbreviation")
                .variable("abbreviation", "NL")
                .execute()
                .path("data.getCountry")
                .entity(Country.class)
                .isEqualTo(new Country("Netherlands", "NL"));
    }

    @Test
    void itShouldHaveAnErrorWhenCountryCannotBeFound() {
        this.graphQlTester
                .documentName("country-by-abbreviation")
                .variable("abbreviation", "XX")
                .execute()
                .errors()
                .satisfy(errors -> {
                     assert errors.size() == 1;
                });
    }

    @Test
    void itShouldUppercaseAbbreviation() {
        // The solution of this can be implemented in several ways.
        // Validate with one of us if you implemented correctly.
        this.graphQlTester
                .documentName("create-country")
                .variable("name", "France")
                .variable("abbreviation", "fr")
                .execute()
                .path("data.createCountry.abbreviation")
                .entity(String.class)
                .isEqualTo("FR");
    }
}
```
