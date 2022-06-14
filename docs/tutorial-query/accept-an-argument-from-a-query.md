---
sidebar_position: 3
---

# Accept an argument from a query
So we can get some data, that's cool. But what if we wanted to provide an argument with our queries.
We need to update our schema. The `helloWorld` query should accept an argument of the type `String`
Your schema should look like this:
```graphql
type Query {
    helloWorld(name: String!): String!
}
```
We can accept arguments with an `@Argument` annotation on the arguments of your method.
```java
    @QueryMapping
    public String helloWorld(@Argument String name) {
        return "Hello " + name;
    }
```