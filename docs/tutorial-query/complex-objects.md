---
sidebar_position: 4
---

# Complex Objects
Working with a String, and a simple query is easy. But in the real world we work with complex 
objects, often existing out of object for themselves. 

Let's take an example of movies and actors. 
Replace your schema with the schema below

```graphql
type Query {
    helloWorld(name: String!): String!
    movies: [Movie!]!
}
type Movie {
    imdbId: String!
    title: String!
    releaseDate: String!
}
```

Can you fix the Query implementation yourself? Take a good look at what you did with the HelloWorld example.
The results are on the next page.

