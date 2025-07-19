### Task Breakdown for To-Do List App (Single HTML File)

| Task ID | Description | Dependencies | Effort Estimate |
| :--- | :--- | :--- | :--- |
| **1** | **Setup `index.html`** | - | **XS** (Extra Small) |
| | Add React and Babel CDN scripts to `index.html`. Create a root `<div>` for the React app. | | |
| **2** | **Create React Components** | Task 1 | **M** (Medium) |
| | Write the `App`, `TodoList`, and `TodoItem` components inside a `<script type="text/babel">` tag. | | |
| **2.1** | Create `App` Component Structure | Task 1 | **S** (Small) |
| | Define the `App` functional component and its basic JSX structure. Initialize state for `todos` and `newTodo`. | | |
| **2.2** | Create `TodoList` Component Structure | Task 2.1 | **S** (Small) |
| | Define the `TodoList` functional component, accepting `todos` as a prop. | | |
| **2.3** | Create `TodoItem` Component Structure | Task 2.2 | **S** (Small) |
| | Define the `TodoItem` functional component, accepting `todo` as a prop. | | |
| **3** | **Implement "Add To-Do"** | Task 2 | **M** (Medium) |
| | Add the input form and logic to add new to-do items. | | |
| **3.1** | Add Input Field and State | Task 2.1 | **S** (Small) |
| | Add an input field and a button to the `App` component. Bind the input value to `newTodo` state. | | |
| **3.2** | Implement `addTodo` Logic | Task 3.1 | **S** (Small) |
| | Write the `addTodo` function to add new items to the `todos` state. Handle empty input and unique IDs. | | |
| **4** | **Implement "View To-Do"** | Task 2 | **S** (Small) |
| | Render the list of to-do items using the components. | | |
| **5** | **Implement "Mark as Complete"**| Task 2 | **M** (Medium) |
| | Add logic to mark to-do items as complete. | | |
| **5.1** | Add Toggle Checkbox/Button | Task 2.3 | **S** (Small) |
| | Add a checkbox or button to the `TodoItem` component. | | |
| **5.2** | Implement `toggleComplete` Logic | Task 5.1 | **S** (Small) |
| | Write the `toggleComplete` function in `App` and pass it down to `TodoItem` to update completion status. | | |
| **6** | **Implement "Delete To-Do"** | Task 2 | **M** (Medium) |
| | Add logic to delete to-do items. | | |
| **6.1** | Add Delete Button | Task 2.3 | **S** (Small) |
| | Add a delete button to the `TodoItem` component. | | |
| **6.2** | Implement `deleteTodo` Logic | Task 6.1 | **S** (Small) |
| | Write the `deleteTodo` function in `App` and pass it down to `TodoItem` to remove items. | | |
| **7** | **Basic Styling** | Task 4 | **S** (Small) |
| | Add basic CSS within a `<style>` tag or a separate CSS file. | | |

---

### **Effort Estimates:**

*   **XS (Extra Small):** < 1 hour
*   **S (Small):** 1-2 hours
*   **M (Medium):** 2-4 hours
