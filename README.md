# mb-app

## Selected technologies and motivation

### MobX for state management
1. Very scalable, allowing building applications of any size on the top of it
2. Has very good performace characteristis, due to working on the top of Object getters ans setter, that allows more fine control on what should/shold not be rerendered.
3. No boilerplate
4. Has OOP style

### TypeScript as jsx transpiler and static type cheking tool
1. All benefits of static type checking
2. No need to write PropTypes
3. Possibility to focus on code, insdead of looking into browser console for errors
4. Allows to decrease amount of test for type errors (This project does not have tests)
5. Can replace "babel" with dozen of plugins, that makes dependencies be much clearer

### Webpack as a module bundler
In this project webpack config is extremely simple, as it is not a focus, but when app grows, webpack allows to:
1. Make proper code splitting
2. Use "Tree shaking", so that only functions you use will appear in final bundle
3. Starting with 3.0 can outputs imports as function(like Rollup) instead of object, that makes final bundle much smaller and gives performace improvements

### React-router as a routing library
1. The most solid solution for usage with react
2. Has a dinamic routing since v.4 So Route is just a react component, that causes routing as app renderes.

### Jest as testing framework (this project does not have tests)
1. Has everything, what can be needed for testing out of the box, like spy, asserts.
2. Support for snapshot testing, very usefull for React components
3. Support for typescript out of the box
4. *Enzyme* can be used to render components

### TSLint as a tool for code quality checking (this project does not have TSLint)


### SCSS & Bourbon mixin library are used for styling
1. SCSS is more powerfull than other preprocessors
2. It allows writing mixins of any complexity
3. Backward compatible to css
4. SCSS files are kept in same folders as components they are styling, except global css, that is in `style` folder.
5. Note: writing CSS in JS gives more control over component styling and makes JSX code cleaner(no ternary operators). So in developemnt I`d prefer using solution like [Styles Components](https://github.com/styled-components/styled-components)


## Some Instructions

1. clone the repo
2. `npm install typescript -g`
3. `npm install`
4. `npm start` - for starting a development server
5. `npm run build-prod` - to build for production

## Running a project locally 
1. clone the repo
2. `npm install`
3. `npm start`
4. In Browser go to `localhost:9000` 
5. access 'Access' page, to add ypur API key. So interaction with API work properly. Invalid API keys will cause error message, be sure to put valid key.

## Runnign project online
1. Go to [Site](https://vict-shevchenko.github.io/mb-app) this is a GitHub pages serving an application
2. Provide yout access key
3. Test features

## Test Send SMS
After server is running
1. Go to 'Send SMS' tab
2. Fill in data and send messages 
	2a. Form is build on the top of [Reactive Mobx Form](https://github.com/vict-shevchenko/reactive-mobx-form) library. Authored by me.
3. Note: The response from REST endpoint is 200 OK, but as I see message has not been sent(credits are not touched)

## Test "My Messages" and instant message receive
After you server is running
1. Go to 'Messages' tab
2. go to `https://blooming-woodland-27725.herokuapp.com/` to make sure its up. This is a simple server, that acceplts a `POST` request(with payload) and sends a message via web sockets to client(with same POST payload). 
3. Using a tool like `postman` send a request to `https://blooming-woodland-27725.herokuapp.com/messages` include payload like in example
4. New message should instantly appear in messages grid

Note  when sending a POST request to `https://blooming-woodland-27725.herokuapp.com/messages` pass `ContentType: application/json`.

Payload Example:
```
{
	"id": "e8077d803532c0b5937c639b60216938",
	"recipient": 31642500190,
	"originator": 31612345678,
	"body": "This is an incoming message",
	"createdDatetime": "2016-05-03T14:26:57+00:00"
}
```

## Add Docker ?