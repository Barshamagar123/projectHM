# Frontend Application

This is a React-based frontend application with Redux state management and authentication.

## Features

- **Redux Toolkit**: Modern Redux with RTK Query for state management
- **Redux Persist**: Persistent state storage across browser sessions
- **Authentication**: Complete login/register system with JWT tokens
- **Protected Routes**: Role-based access control
- **Form Validation**: Client-side validation with error handling
- **Toast Notifications**: User feedback with react-hot-toast
- **Responsive Design**: Modern UI with Tailwind CSS

## Redux Setup

### Store Configuration
- Uses `configureStore` from Redux Toolkit
- Implements `redux-persist` for state persistence
- Combines multiple reducers with `combineReducers`

### Auth Slice
- Manages authentication state (user, token, loading, error)
- Includes async thunks for login and registration
- Handles token storage in localStorage
- Provides actions for logout and error clearing

### Key Actions
- `registerUser`: Async thunk for user registration
- `loginUser`: Async thunk for user login
- `logout`: Synchronous action to clear auth state
- `clearError`: Clear error messages
- `setToken`: Set authentication token

## Authentication Flow

1. **Registration**: User fills form → validation → API call → success/error handling
2. **Login**: User provides credentials → validation → API call → token storage → redirect
3. **Protected Routes**: Check authentication → role verification → access control
4. **Logout**: Clear state → remove token → redirect to login

## Components

### Form Components
- `Register.jsx`: Complete registration form with validation
- `Login.jsx`: Login form with error handling

### Utility Components
- `ProtectedRoute.jsx`: Route protection with role-based access
- `useAuth.jsx`: Custom hook for authentication state

## API Integration

- Axios instance with interceptors
- Automatic token inclusion in requests
- Error handling for 401 responses
- Token storage and management

## Usage

### Using the Auth Hook
```javascript
import { useAuth } from '../Utils/useAuth';

const MyComponent = () => {
  const { user, isAuthenticated, logout } = useAuth();
  
  if (!isAuthenticated) {
    return <div>Please log in</div>;
  }
  
  return <div>Welcome, {user.name}!</div>;
};
```

### Protected Routes
```javascript
<ProtectedRoute allowedRoles={['admin']}>
  <AdminDashboard />
</ProtectedRoute>
```

### Dispatching Auth Actions
```javascript
import { useDispatch } from 'react-redux';
import { loginUser, registerUser } from '../Redux/AuthSlice';

const dispatch = useDispatch();

// Login
dispatch(loginUser({ email, password }));

// Register
dispatch(registerUser({ name, email, password, role }));
```

## Getting Started

1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Ensure backend is running on `http://localhost:5002`

## Dependencies

- `@reduxjs/toolkit`: Redux Toolkit for state management
- `react-redux`: React bindings for Redux
- `redux-persist`: State persistence
- `react-router-dom`: Routing
- `axios`: HTTP client
- `react-hot-toast`: Toast notifications
- `tailwindcss`: CSS framework
