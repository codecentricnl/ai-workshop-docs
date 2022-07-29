---
sidebar_position: 6
---

# Query Authors

**_What goes up must come down!_**

or in our case

**_What goes into the DB must come out!_**

### OPTIONAL: Run the app on localhost
Btw if you run your docker compose file and start the Spring app you can also test your API at runtime manually.
Got to ``http/AuthorCommands.http`` and run the request against your localhost:8080

(in case you don't have it)
```
### Register an author
POST /authors/commands/register HTTP/1.1
Host: localhost:8080
Content-Type: application/json

{
  "firstName": "PLACE_YOUR_FIRST_NAME",
  "lastName": "PLACE_YOUR_LAST_NAME"
}
```

### Implement the Query endpoint

We want to make our authors readable via our REST API. For that purpose we introduce

```
GET /authors
```
Let's see how far you get!
* You need to create a GET mapping in a new file ``/query/AuthorQueries.java``. Remember that we also need to decouple 
  the query layer from our domain core. Hence, introduce the following view model that our query will return:

```java
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AuthorView {
  public AuthorView(Author author) {
    this.id = author.getId();
    this.name = author.getFullName();
  }

  Long id;
  String name;
}
```

* Update the ``AuthorService.java`` (and in turn also the ``AuthorServiceImpl.java``)
* Update the ``AuthorMapper.java`` because we now need to map from data model to domain model. (add Builders and 
  Getters where necessary)

### Validate

Let's test your implementation:

```java
@SpringBootTest
@AutoConfigureMockMvc
class AuthorQueriesTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private AuthorRepository authorRepository;

    @BeforeEach
    void beforeAll() {
        authorRepository.deleteAll();
    }

    @Test
    void getAll() throws Exception {
        // given
        var authorJPA = AuthorJPA.builder().firstName("firstName").lastName("lastName").build();
        authorRepository.save(authorJPA);
        authorRepository.flush();
        AuthorView expected = new AuthorView(Author.createAuthor("firstName", "lastName"));
        // when then
        MvcResult result = mockMvc.perform(get("/authors")
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();

        var resultingAuthorViews = objectMapper.readValue(
                result.getResponse().getContentAsString(), new TypeReference<List<AuthorView>>() {});
        assertThat(resultingAuthorViews).usingRecursiveFieldByFieldElementComparatorIgnoringFields("id").containsExactly(expected);
    }
}
```

```javascript
if (allTestsGreen == true) {
    log.info("DONE! Let's move on to the next topic: The ACL adapter")}
else{
    log.error("Sout for help!") || (git stash && git checkout 6-query-author-done)
}
```
