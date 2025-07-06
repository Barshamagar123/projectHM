import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { post } from "../Utils/Api.jsx";

// Async thunk for user registration
export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await post('/api/auth/signup', userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Registration failed');
    }
  }
);

// Async thunk for user login
export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await post('/api/auth/login', credentials);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);

const initialState = {
  user: null,
  error: null,
  loading: false,
  token: localStorage.getItem('token') || null,
  isAuthenticated: false // Don't automatically set to true just because token exists
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SetUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
      state.loading = false;
      state.isAuthenticated = false;
      // Clear token from localStorage
      localStorage.removeItem('token');
      sessionStorage.removeItem('token');
    },
    clearError: (state) => {
      state.error = null;
    },
    setToken: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = !!action.payload;
      if (action.payload) {
        localStorage.setItem('token', action.payload);
      }
    }
  },
  extraReducers: (builder) => {
    // Register user cases
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = null; // Don't set user data after registration
      state.isAuthenticated = false; // Don't authenticate after registration
      state.error = null;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.user = null;
      state.isAuthenticated = false;
    });

    // Login user cases
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.user = action.payload.user; // Set user data from login response
      state.isAuthenticated = true;
      state.error = null;
      // Store token in localStorage
      localStorage.setItem('token', action.payload.token);
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.token = null;
      state.isAuthenticated = false;
    });
  }
});

export const { SetUser, logout, clearError, setToken } = AuthSlice.actions;
export default AuthSlice.reducer;
