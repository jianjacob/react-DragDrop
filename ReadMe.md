# React DragDrop - lightweight drag and drop to save you time

> A component that enables drag and drop functionality for it's child element.
> Lightweight (< 50 lines of code), useful for ReactJS beginners who want something simple and easy to implement : )
> Currently implemented using ES6 and available as a .js file (no npm module). May be extended in the future.

### Current Features and Usage
Copy 'DragDrop.js' from the components directory into your project.
Demo: [view the demo here](https://codesandbox.io/s/rw1wqypvom)

#### Supports single child component

    <DragDrop>
	    <Child />
    </DragDrop>

*Note: child element must have a unique id (for now).*

#### Custom 'drop' handler

    <DragDrop handleDrop={this.swap.bind(this)}>
            <Child />
    </DragDrop>

#### Style-agnostic
Use the 'dragging' property to style your child component as you please.

*App.js*

    <DragDrop>
	    <Child />
    <DragDrop>
*Child.js*

    function Child(props) {
    ...
    ...
    return (
	    <div {...props} 
	    style = { !props.dragging ? {} : { border: '2px dashed red'} }>
		    { !props.dragging ? <p>Resting</p> : <p>Dragging</p> }
	    </div>
    );
    }

### (un)Planned Features

 - [ ] support for multiple children
 - [ ] change how IDs are handled, if possible
 - [ ]  convert to NPM module
 - [ ] support for ES5 / ES7(?)

### License
MIT