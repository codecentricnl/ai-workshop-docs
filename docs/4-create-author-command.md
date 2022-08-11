---
sidebar_position: 4
---

# Create the register Author command
For this step you will need to create classes and an interface in three parts of the "clean hexagonal onion".

### Command
We need to create a REST endpoint that allows us to register Authors.

```http request
### Register an author
POST /authors/commands/register HTTP/1.1
Host: localhost:8080
Content-Type: application/json

{
  "firstName": "PLACE_YOUR_FIRST_NAME",
  "lastName": "PLACE_YOUR_LAST_NAME"
}
```
This endpoint should create an Author from the given DTO payload and call the register function of an author on the 
domain interaction layer service. The standard response should be empty with a status code 202.

### Core Domain
According to the domain model we need to create the class ```/domain/author/Author.java``` in our domain. To 
keep control of the creation of our aggregates we make the all args constructor private and instead create a 
factory method ``public static Author createAuthor(String fristName, String lastName)``.
For now that is all we need. No getters, no setters, or builders needed for now. In case you are asking yourself: 
_And what about the id?_ Rest assured! We will solve this later. It remains null for now.

![author.png](author.png)

### Domain interaction layer
In order to be able to interact with or persist our core domain objects we need to define an interface
```/domain/author/AuthorService.java``` in our domain package according to the domain model. We now inject this into 
our ```AuthorCommands.java```class in the constructor (you could autowire it but let's stick to constructor injection).
Nice to know: this complies with the SOLID principle of 'dependency inversion'.

![author-service.png](author-service.png)

### Data Source
No injection without at least one Spring Bean implementing the interface. In ```/datasource/author/AuthorServiceImpl.
java``` we implement ```/domain/author/AuthorService.java``` and annotate it with the ```@Service``` annotation from Spring. 
For now, simply add a log statement to the method ``void registerAuthor(Author author)``.

### Validation
Let's test our code. Feel free to write your own test. Alternatively, copy and paste this test class into your project 
and run it. All should be green :-).

```java
@SpringBootTest
@AutoConfigureMockMvc
class AuthorCommandsTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void register() throws Exception {
        //given
        var registerAuthorDTOJson = objectMapper.writeValueAsString(new RegisterAuthorDTO("firstName", "lastName"));

        //when //then
        mockMvc.perform(post("/authors/commands/register")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(registerAuthorDTOJson))
                .andExpect(status().isAccepted());
    }
}
```

```javascript
if (allTestsGreen == true) {
    log.info("DONE! Let's move on to the next topic: **Persisting Data**.")}
else{
    log.error("Shout for help!") || (git stash && git checkout 4-create-author-command-done)
}
```




