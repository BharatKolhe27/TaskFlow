
---
<img width="1600" height="900" alt="image" src="https://github.com/user-attachments/assets/a18cfeab-eb13-4641-9f9c-3837958aea7c" />

<img width="1600" height="900" alt="image" src="https://github.com/user-attachments/assets/9122f4ee-350c-4c38-a18f-cc6455add5cc" />

<img width="1600" height="900" alt="image" src="https://github.com/user-attachments/assets/bd7df10e-0697-4974-a885-5091c896dc49" />

<img width="1600" height="900" alt="image" src="https://github.com/user-attachments/assets/c2a2f983-617c-4a5b-981b-968965badf8b" />



## Features

* Authentication (Login / Protected Routes) frontend only
*  Routing using React Router (including dynamic routes)
* Global State Management using Redux Toolkit
*  Theme management using Context API
*  API Integration using Axios
* Retry mechanism for API failures
* Performance optimization using:

  * React.memo
  * useCallback
  * useMemo
*  Lazy Loading & Code Splitting
*  Error Boundary for UI crash handling
* Filtering functionality (All / Completed / Pending)
*  Toast notifications for API errors

---

##  Project Structure

```
src/
├── app/                # Redux store
├── components/         # Reusable components (Navbar, TaskCard, ErrorBoundary)
├── context/            # Theme context
├── features/
│   └── tasks/          # Redux slice for tasks
├── hooks/              # Custom hooks (useTasks, useAuth)
├── layouts/            # Layout (AppLayout with Navbar)
├── pages/              # Pages (Login, Dashboard, Profile, Settings)
├── routes/             # AppRoutes
├── utils/              # retry.ts
├── App.tsx
├── main.tsx
```

---



## 🌐 API Used

* https://jsonplaceholder.typicode.com/todos

---

## 🔁 API Flow

```
Component → dispatch → thunk → axios → reducer → store → UI
```

---

## Key Concepts Implemented

### 🔹 Redux Toolkit

* createSlice
* createAsyncThunk
* useSelector & useDispatch

### 🔹 Context API

* Global theme management
* Custom hook (`useTheme`)

### 🔹 React Router

* Protected & Public routes
* Dynamic routes (`/task/:id`)
* Nested routes with layout

### 🔹 Performance Optimization

* `React.memo` → prevent unnecessary re-renders
* `useCallback` → stable function references
* `useMemo` → avoid expensive recalculations

### 🔹 Code Splitting

* Implemented using `React.lazy`
* Loaded components only when needed

### 🔹 Error Handling

* ErrorBoundary for UI crashes
* Toast messages for API failures
* Retry mechanism for unstable APIs

---

##  Learning Outcomes

* Understand real-world React architecture
* Manage global state effectively
* Handle API calls and errors gracefully
* Optimize performance in React apps
* Implement routing and protected navigation

---

