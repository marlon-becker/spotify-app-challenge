# Tech-Frontend-Challenge

## Configure dev environment

Install dependencies with `npm install` 

Create a `.env` file with the following values

```bash
REACT_APP_SPOTIFY_CLIENT_ID=[YOUR SPOTIFY APP CLIENT ID]
REACT_APP_SPOTIFY_CLIENT_SECRET=[YOUR SPOTIFY APP CLIENT SECRET]
DISABLE_ESLINT_PLUGIN=true
SASS_PATH=src
```

After creating this fail run app with `npm start`

## Deployed version
https://spotify-app-challenge.vercel.app/

# Theoretical Part
- What is React JS?

React is a Javascript library created that allows you to create reactive interfaces.

- Why should we use ReactJS?

React is an optimized, battle tested library, with a huge community, abundant documentation that allows you to create 
interactive websites with a great component composition pattern, while still allowing the use of all the power of 
javascript. 
It makes it easier to abstract all the structure of a page in reusable components. For a developer is easy to work with, 
easy to scale and much more easy to test.

- What are the life stages of a component?

Basically there are three stages in a component:
Mount, update and unmount, depending if your are using class components or functional components the way you interact 
with these cycles will different. For example in a functional component you could use useEffect to interact with all three
of these cycles (useEffect will execute after the first render, on updates (depending on the dependency array), 
and when component is unmounted (if you returned a function to execute then))

- How does ReactJS use "keys"?

React assigns the keys to be able to identify the elements from a list and then been able to know if has changed, 
removed or added. It's recommended to use unique strings and never use the for example index of an array when 
doing a map.  

- Is there a difference between "container component" and "presentation component"?

There is not a real difference, but the one you want to give them when composing your app. Presentation components
would usually be "dumb" components with no logic and no data fetching, just getting some props and rendering the view. 
Container components will orchestrate more complex interactions, fetch data and control presentation components.

- Why are "synthetic events" used?

Because the assures you that all type of events will work the same way in all browsers.

- What is an "arrow function"?

Is a type of more compacted function introduced in ES6. Some differences are:
It allows more compacted formats like:

- `() => return true`
- `value => return value`
- `(param1, param2) => param1 + param2`

It has not an own context (nor own this, nor arguments param)

You cannot yield inside so not valid for generators

- What is React Redux?

Is a state management system for javascript applications. It's base on having an immutable state, and any change is 
done dispatching actions that will be treated by one or multiple reducers and create a new copy of the state with the 
desired changes. This way we can avoid side effects and have a control on how the state changes over time.
