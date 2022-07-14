---
sidebar_position: 2
---

# Solution

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
@Controller
public class CountryController {
    private final CountryRepository countryRepository;

    public CountryController(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    @QueryMapping
    public Country getCountry(@Argument String abbreviation) {
        return countryRepository.findAll()
                .stream()
                .filter((country) -> {
                    return country.abbreviation().equalsIgnoreCase(abbreviation);
                })
                .findAny()
                .orElseThrow(() -> new GraphQLException("Country not found"));
    }

    @QueryMapping
    public Collection<Country> countries() {
        return countryRepository.findAll();
    }

    @SchemaMapping
    public String abbreviation(Country country) {
        return country.abbreviation().toUpperCase();
    }

    @MutationMapping
    public Country createCountry(@Argument String name, @Argument String abbreviation) {
        var country = new Country(name, abbreviation);
        countryRepository.addCountry(country);
        return country;
    }
}
```