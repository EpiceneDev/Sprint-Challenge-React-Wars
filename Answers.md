# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

    * Creates reusable components that returns a single thing.
    * Ability to run code asynchronously.
    * Allows for DRY code by components being re-usable.


1. What does it mean to think in react?

    * Approach writing the code in a particular method that starts with a mock-up of the UI to identify the components:
        * Break the UI into a component hierarchy.
            * Only one objective can be met per component. (Single Responsibility Principle)
        * Build a static version of the UI in React. 
            * Do not put in the useState yet.
            * Components should only contain the library of reusable components and have the render() methods.
        * ID the components that actually have a changing value that will be utilized by the setState method.
        * Identify where the state gets set.
        * Add the data that flows backwards (inverse-flow data.)

1. Describe state.

    * State is the current data present in the moment. It can be represented by Boolean values, strings, arrays.
        * Aka. “Condition” of the code at that moment in time. 

1. Describe props.

    * Props is the argument of the function that has data/properties set as that argument to be passed into the function and used. 

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

    * Side effects are actions occurring outside of the function. 
        * Example: Axios call goes outside the function to retrieve data that gets used in the function.
        * We use Hooks in React to perform side effects like fetching (see above example) date, setting up subscriptions and changing the DOM in React components, as stated in MDN.
            * Hooks methods we have used: useState() and useEffect() 
