## Goals

The goal of my approach was to demonstrate solutions for a wide range of topics and to keep in the allotted time frame. I avoided usage of third-party libraries where reasonable, so that there would be more opportunity to see my work.

The topics I focused on were:

- state management via a global store (redux)
- handling of async behaviors inside of the global store (redux-thunk)
- state management via internal state
- build and development configuration
- unit testing
- snapshot testing
- high-level react patterns/techniques
- containers vs presentational components
- modular and scalable CSS patterns
- interactions with external API
- ways to optimize the external interactions (caching)
- techniques for handling routes
- techniques for mapping the url to state
- error handling

## Wish I could have…

The areas that I would have liked to show, but I made an intentional decision not to show.

- shown usage of react hooks (useState, useEffect, useReduce)
- shown usage of React lazy load and react suspense
- shown syncing of offline and online data
- shown use of selectors (reselect)
- shown use of propTypes
- shown some e2e testing
- shown some workflow automation. although I used some, I didn't communicate it or show it.
- shown usage of the graphql api
- shown some functionality with identity and access management
- shown some responsive behavior
- shown some methods for better perceived load time
- shown some functionality with push notifications

## I'm not happy with…

The areas that I'm just not happy with the quality of the code. Looking back I would have shifted some of my time and effort to addressing these areas.

- external entities aren't normalized
- test coverage is lacking
- use of promises and await is inconsistent
- error handling is inconsistent
- needs linting
- some global styles exist
- amount of state that can be mapped to an accessible url
- quality of caching
- the UX
