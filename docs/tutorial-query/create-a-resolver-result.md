---
sidebar_position: 2
---

# Create a resolver (Result)

```java
@Controller
public class HelloWorldController {

    @QueryMapping
    public String helloWorld() {
        return "Hello World";
    }
}
```



