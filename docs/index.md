---
layout: docs
title: Documentation
---


Our API is based on GraphQL. <!--On this page you can see all the ways to interoperate with it to build a branded experience based on Connected cars.-->

## Getting started with GraphQL

Read more here: [http://graphql.org/learn/](http://graphql.org/learn/)

One end point can expose many potential operations. Getting data, setting data, and calling functions. Operations are fluid and will respond based on how they're called, for example you can ask for certain parameters when requesting an object and the api will respond with just those parameters.

## Connected Cars GraphQL API

Our API is exposed on one endpoint: [https://connectedcars.dk/graphiql](https://connectedcars.dk/graphiql)

You can submit all requests to this URL. You can also browse to it to and 'explore' it by clicking on the 'Docs' link on that pages top right corner.


## Mutations
{:.mt-5}
Mutations allow you to interact with a GrapQL API. Here the ways you can perform an action against our API.


**Signup required**

- email
- password

**Optional**

- language (EN/DK)


{% highlight javascript %}
mutation {
  signup(email: "email@address.com", password: "password", lang: EN) {
    id
    email
  }
}
{% endhighlight %}
