---
sidebar_position: 1
---

# Create a Mutation

Mutations are not different from queries other than that they illustrate that 
a mutation has a side effect, whereas a query doesn't.
Let's add a mutation to our schema, note that we need specify `input` when we have a complex 
type as an argument

```graphql
type Mutation {
    createNewMovie(input: CreateMovieInput): Movie!
}

input CreateMovieInput {
    imdbId: String!
    title: String!
    releaseDate: String!
}
```
Update your controller
```java title="MovieController.java"
@MutationMapping
public Movie createNewMovie(@Argument CreateMovieInput input) {
    return this.movieRepository.create(input.imdbId, input.title, LocalDate.parse(input.releaseDate));
}
```

Create the input DTO
```java title="CreateMovieInput.java"
record CreateMovieInput(String imdbId, String title, String releaseDate) {}
```

Update your `MovieRepository`
```java title="MovieRepository.java"
public Movie create(String imdbId, String title, LocalDate releaseDate) {
    var movie = new Movie(imdbId, title, releaseDate);
    movies.add(movie);
    return movie;
} 
```

Restart your service and create a mutation, also try to retrieve the movie with a query.






