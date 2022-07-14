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

These schema mappings accept a type, which should map to the parent type. 
The method is the field that needs to be resolved.

So: 
```graphql
query {
    //movies maps to @QueryMapping
    movies {
        //actors maps to @SchemaMapping
        actors {
            name
        }
    }
}
```


Add the following method in your `MovieController`
```java
    @SchemaMapping
    public List<Actor> actors(Movie movie) {
        return List.of(
                new Actor("Christian Bale", LocalDate.of(1974, 1, 30))
        );
    }
```
And the following data class
```java title="Actor.java"
public record Actor(String name, LocalDate dateOfBirth, List<String> appearsInIMDBId) {}
```

Try this out or get it to work. 
Let us know if you are hitting into issues.
