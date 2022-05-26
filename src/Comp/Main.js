import React, { Component } from 'react'
import Pure from './Pure'

export default class Main extends Component {
    render() {
        return (
            <div>
                <h2>Pure Components</h2>

                <p>A React component is considered pure if it renders the same output for the same state and props. For this type of class component, React provides the PureComponent base class. Class components that extend the React. PureComponent class are treated as pure components.
                    If the previous value of state or props and the new value of state or props is the same, the component will not re-render itself. Since Pure Components restricts the re-rendering when there is no use of re-rendering of the component.
                </p>

                <div className='pure'>
                    <Pure about="A React component is considered pure if it renders the same output for the same state and props. For this type of class component, React provides the PureComponent base class. Class components that extend the React.PureComponent class are treated as pure components." />
                </div>

                <h2>Higher-Order Component</h2>

                <p>Higher-order components (HOCs) in React were inspired by higher-order functions in JavaScript. A HOC is an advanced technique for reusing logic in React components.
                    A HOC is structured like a higher-order function:
                </p>
                <ol>
                    <li>It is a component.</li>
                    <li>It takes another component as an argument.</li>
                    <li>Then, it returns a new component.</li>
                    <li>The component it returns can render the original component that was passed to it.</li>
                </ol>
                <h3>Conventions:</h3>
                <ul>
                    <li>Do not use HOCs inside the render method of a component.</li>
                    <li>The static methods must be copied over to have access to them. You can do this using hoist-non-react-statics package to automatically copy all non-React static methods.</li>
                    <li>HOCs does not work for refs as 'Refs' does not pass through as a parameter or argument. If you add a ref to an element in the HOC component, the ref refers to an instance of the outermost container component, not the wrapped component.</li>
                </ul>
            </div>
        )
    }
}
