# CvSU Mini Store (Product Catalog)

## Run
```
npm install
npm run dev
```

## Guide Questions

1. Props pass data into a component from its parent and can be read as configuration. State is internal component data that can change over time and trigger a re-render.
2. Props are inputs owned by the parent. A child should not change them directly because that would make data flow and updates difficult to control.
3. The parent passes `onAddToCart` as a function prop. The child calls that function with the product title, and the parent updates its state in the callback.
4. The `key` helps React identify each rendered item between updates. A missing or duplicated key can cause incorrect or inefficient updates, and React may show a warning.
5. The `children` prop lets a parent place JSX inside a component's opening and closing tags. This makes content such as a New or Sale badge easy to compose without adding a separate named prop.
