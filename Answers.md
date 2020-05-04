1. What problem does the context API help solve?
Allows us to move state information in more than one way. Previously we were restricted to moving data down stream, parent component to child component. Now we can move data through out the data tree.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions: they contain a type (that controls what the reducer does) and payload (the data they carry that will be changed in the thing)
Reducers: narrowing down the many different state values to one object value that is updated as state.
Store: the location where we keep all our state and state changes.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Applicaiton State is a Global state that all components can access. Component State is state that only that component can access. You use component state when the change to state is not meant to be permanent and effect other components.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
a Middle Ware library that is used to control the dispatch of an action. This allows for async actions to be sent to the reducer instead of normal actions.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
I don't want to say that I am miss-understanding all of them, but in the tradition of our curriculum, they always show us the needlessly difficult way first and then the easy way which makes the first way obsolete. I admit I didn't undertand context API but I suspect its better than redux.
