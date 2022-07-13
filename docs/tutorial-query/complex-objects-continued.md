---
sidebar_position: 6
---

# Complex Objects continued
Let's update the schema to expand the movie type with actors
```graphql
type Query {
    helloWorld(name: String!): String!
    movies: [Movie!]!
}
type Movie {
    imdbId: String!
    title: String!
    releaseDate: String!
    actors: [Actors!]!
}

type Actor {
    name: String
    dateOfBirth: String
}
```

As you probably have noticed is that the `Movie` type has a nested Object. 
The GraphQL engine will try to get all actors for a specific Movie. 
We can tell the GraphQL engine how to resolve the actors via the annotation `@SchemaMapping`

Add the following method in your `MovieController`
```java
    @SchemaMapping
    public List<Actor> actors(Movie movie) {
        return List.of(
                new Actor("Christian Bale", LocalDate.of(1974, 1, 30))
        );
    }
```

Try this out or get it to work. 
Let us know if you are hitting into issues.
