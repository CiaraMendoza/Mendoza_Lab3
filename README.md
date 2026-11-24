# CvSU Mini Store (Product Catalog)

## Run

    npm install
    npm run dev

## Guide Questions

1. What is the difference between props and state?

   Props are values that a parent component passes down to a child component, similar to function arguments. State is data that a component owns and can update on its own. When state changes, React re-renders the component.

2. Why can a child component not modify the props it receives?

   Props are owned by the parent component. If a child could change them, the parent would not know about the change, and the data flow would become hard to follow. Only the component that owns the data should update it.

3. How does the onAddToCart callback allow data to flow from child to parent even though props only flow downward?

   The parent passes a function, `onAddToCart`, to the child as a prop. When the button is clicked, the child calls this function and gives it the product title. The function runs inside the parent, so the parent can use that value to update its own state.

4. Why is the key prop required when rendering a list with .map()? What could happen if it is missing or duplicated?

   React uses the `key` to identify each item in a list when the list updates. If a key is missing or duplicated, React may update the wrong item, display the cards incorrectly, or show a warning in the console.

5. What does the children prop allow you to do that a normal prop does not?

   The `children` prop lets a parent place content between a component's opening and closing tags, such as `<ProductCard><span>New</span></ProductCard>`. A normal prop must be passed as a named attribute, while `children` can hold any JSX written inside the tags.
