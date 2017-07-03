# mb-app

## Selected technologies and motivation

### MobX for state management
1. Very scalable, allowing building applications of any size on the top of it
2. Has very good performace characteristis, due to working on the top of Object getters ans setter, that allows more fine control on what should/shold not be rerendered.
3. No boilerplate
4. Has OOP style

### TypeScript as jsx transpiler and static type cheking tool
1. All bemefits of static type checking
2. No need to write PropTypes
3. Possibility to focus on code, insdead of looking into browser console for errors
4. Allows to decrease amount of test for type errors (This project does not have tests)
5. Can replace "babel" with dozen of plugins, that makes dependancies be much clearer

### Webpack as a module bundler
In this project webpack config is extremely simple, as it is not a focus, but when app grows, webpack allows to:
1. Make proper code splitting
2. Use "Tree shaking", so that only functions you use will appear in final bundle
3. Starting with 3.0 can ouutput imports as function(like Rollup) instead of object, that makes final bunle much small and gives performace improvements

### React-router as a routing library
1. The most solid solution for usage with react
2. Has a dinamic routing since v.4 *add*

### Jest as testing framework (this project does not have tests)
1. Has everything, what can be needed for testing out of the box, like spy, asserts.
2. Support for snapshot testing, very usefull for React components
3. Support for typescript out of the box
4. *Enzyme* can be used to render components

### TSLing as a tool for code quality checking (this project does not have TSLink)


## Running a project

1. clone the repo
2. `npm install typescript -g`
3. `npm install`
4. `npm start` - for starting a development server
5. `npm run build-prod` - to build for production
6. access `/access` page, to add ypur API key. So interaction with API properly work.

After you server is running
1. go to `https://blooming-woodland-27725.herokuapp.com/` This is a simple server, that acceplts a `POST` request and sends a message via web sockets to client
2. Using a tool like `postman` send a request to `https://blooming-woodland-27725.herokuapp.com/messages`
3. New message should instantly appear in messages grid

PS: When having a VMN, the url `https://blooming-woodland-27725.herokuapp.com/messages` shoul be set as a webhook and resending data from POST request to websokets implemented. Now POST request triggers a random messages to be send over web sockets. But a flow is already describable, I hope.

## Add Docker ?