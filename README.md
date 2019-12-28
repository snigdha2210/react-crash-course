# React Crash Course

Learning React with a bunch of activities from the [freeCodeCamp.org]() tutorial. README information came from 'create-react-app' configuration. Simple first steps here, but necessary.

| Files | Notes |
|:----- | :---- |
| [ReactDOM & JSX](/src/ReactDOM-%26-JSX)| First steps into React/ReactDOM importing & JSX |
| [List `<ul>` with `<li>`](/src/React-ul-li) | Adding an unordered list into React|
| [Multifile % components](/src/React-multifile-components) | Working with multiple files & `import` and `export default`|
| [Parent & Child](/src/React-parent-child) | Tree structure implementation, with and main containing header, content and footer|
|[Style with Classes](/src/React-styling-with-classes) | Applied CSS to an component by `import` it; First glance at JSX's 'className' |
|[TodoApp-phase1](/src/React-todoapp-phase1) | Creating an to-do-app, first phase: `<ul>` and `<input />` checkboxes | 
|[JSX dealing with Javascript](/src/React-JSX-to-Javascript) | Javascript variables put inside JSX statement & CSS inline on Javascript Object also inside JSX. | 
|[TodoApp-phase2](/src/React-todoapp-phase2) | Added some CSS style to it, and React component were splitted: TodoApp & TodoItem. |
|[Props in Peace](/src/React-props-in-peace) | First time handling 'props' passed from one component to another.| 
|[Props styling](/src/React-props-styling) | Jokes passing from one component to another, with inline style w/ JS conditionals | 
|[Mapping Components](/src/React-mapping-components) | Using JS `.map()` to organize info got from a JS Object data| 
|[TodoApp-phase3](/src/React-todoapp-phase3) | Implemented a [database](/src/React-todoapp-phase3/tasksDatabase.js) of jokes to be organized with `.map()`, and accessed inside the components.|
|[Class-based component](/src/React-classbased-component) | Turning the `function`s into `class ... extends React.Component {}`|
|[State Practices 1 & 2](/src/React-state-practice) | Dealing with `this.state` for the first time, inside `constructor()` method. Then, retrieving data from `this.state` inside `render()`. |
|[TodoApp-phase4](/src/React-todoapp-phase4) | Transform function into class, put database into state property. |
|[TodoApp-phases 5 & 6](/src/React-todoapp-phase5-6) | Transform 'TodoItem.js' into a class too, and create a handler to deal with checking the checkboxes and changing state properties|
|[Lifecycle Methods](/src/React-lifecycle-methods) | Intro to life cycle methods that specify React application |
|[Conditional Rendering - Part 1 & 2](/src/React-conditional-rendering-part1)| Using conditional to render or not some kind of component - usefull to 'loading' waiting; Using `componentDidMount()`; Part 2 only adds conditional using `&&`|
|[Conditional Rendering Practice](/src/React-conditional-rendering-practice) | Using conditional to render an logIn/logOut button, added extra logins count. |
[TodoApp-phases 7](/src/React-todoapp-phase7) | Applied conditional to style differently the 'completed' tasks|
|[Fetching Data from API](/src/React-fetching-data) | Using `fetch()` to get data from an external API (StarWarsAPI), with `componentDidMount()` to change state, and displya info gathered.| 
|[Forms in React - Parts 1 & 2](/src/React-forms-part1-2) | Intro to forms with inputs setting state; extra: component created to isolate the text inputs, works the same way. Part2 complements showing extra four types of input: textareas, checkboxes, radio buttons and select & options|
|[Forms practice (with nested elements in state)](/src/React-forms-practice) | Created a travel company forms, and show the entered data down to verify changing state.|


## 'create-react-app' read-me:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
