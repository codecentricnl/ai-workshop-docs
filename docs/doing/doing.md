---
sidebar_position: 1
---
# Learn by doing
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
    void itShouldGetCountryByAbbreviation() {
        this.graphQlTester
                .documentName("country-by-abbreviation")
                .variable("abbreviation", "NL")
                .execute()
                .path("data.getCountry")
                .entity(Country.class)
                .isEqualTo(new Country("Netherlands", "NL"));
    }

    @Test
    void itShouldHaveAnErrorWhenACountryCannotBeFound() {
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
        // We expect the solution to be in the controller
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

```java title="Country.java"
public record Country(String name, String abbreviation) {}
```

```java title="CountryRepository.java"
@Component
public class CountryRepository {
private List<Country> countries = Lists.newArrayList(
new Country("Netherlands", "NL"),
new Country("Germany", "DE"),
new Country("United States", "US")
);

    public void addCountry(Country country) {
        countries.add(country);
    }

    public List<Country> findAll() {
        return countries;
    }
}
```

```java title="CountryController.java"
public class CountryController {
    //FIXME 😈 
}
```

```graphql title="countries.graphql"
query countries {
    countries {
        name
        abbreviation
    }
}
```

```graphql title="country-by-abbreviation.graphql"
query countryByAbbreviation($abbreviation: String!) {
    getCountry(abbreviation: $abbreviation) {
        name
        abbreviation
    }
}
```

```graphql title="create-country.graphql"
mutation createCountry($name: String!, $abbreviation: String!) {
    createCountry(name: $name, abbreviation: $abbreviation) {
        name
        abbreviation
    }
}
```