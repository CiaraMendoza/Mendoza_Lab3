# CvSU Mini Store (Product Catalog)

## Run

    npm install
    npm run dev

## Guide Questions

1. What is the difference between props and state?
Props are data that a parent gives to a child component, like function arguments. State is data that a component keeps and can change by itself. When state changes, the component re-renders.

2. Why can a child component not modify the props it receives?
Props belong to the parent. If the child changed them, the parent would not know about it and the data would become confusing. Data should only be changed by the component that owns it.

3. How does the onAddToCart callback allow data to flow from child to parent even though props only flow downward?
The parent passes a function (`onAddToCart`) down as a prop. When the button is clicked, the child calls that function and passes the product title. The function runs in the parent, so the parent can update its own state with that value.

4. Why is the key prop required when rendering a list with .map()? What could happen if it is missing or duplicated?
React uses the `key` to tell which item in the list is which when the list updates. If a key is missing or duplicated, React may update the wrong item, mix up the cards, or show a warning in the console.

5. What does the children prop allow you to do that a normal prop does not?
It lets you put content between the opening and closing tags of a component, like `<ProductCard><span>New</span></ProductCard>`. A normal prop has to be passed as an attribute with a name, while `children` can hold any JSX inside the tags.
