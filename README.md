# CvSU Mini Store (Product Catalog) - Lab 4: Live Search and Filter

## Run

    npm install
    npm run dev

## Guide Questions

1. Why do we use two separate states, searchText and debouncedSearch, instead of only one?

   `searchText` stores what the user is typing right now, so the input updates on every keystroke. `debouncedSearch` stores the value that is actually used for filtering, and it only updates 300ms after the user stops typing. If we used only one state, the product list would be filtered again on every keystroke.

2. What would happen if the debounce effect did not return a cleanup function?

   Every keystroke would start a new timer, and the old timers would not be cancelled. Each of them would still run and update `debouncedSearch`, so the debounce would not work properly. The cleanup function calls `clearTimeout`, so only the timer from the last keystroke runs.

3. What is the purpose of the dependency array? What happens if it is empty ([])? What happens if it is left out completely?

   The dependency array tells React when to run the effect again, which is only when one of the listed values changes. If it is empty (`[]`), the effect runs only once, after the first render. If it is left out completely, the effect runs after every render.

4. Why should we avoid sorting the original products array directly?

   The `sort()` method changes the array it is called on. If we sorted the original `products` array, its order would be changed permanently, and we could no longer return to the default order. Mutating data directly can also cause bugs. Making a copy first, such as `[...filtered]`, keeps the original data safe.

5. Is the filtered product list better stored in its own state, or calculated from existing state during rendering? Explain your choice.

   It is better to calculate it during rendering from the existing state (`debouncedSearch`, `category`, and `sortOrder`). If the filtered list were stored in its own state, it could go out of sync with the filters and would need extra code to keep updated. Calculating it gives us one source of truth.
