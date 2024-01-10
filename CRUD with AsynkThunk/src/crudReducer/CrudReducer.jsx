import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loading: false,
  error: null,
  searchUserStore: [],
};

const reducers = {
  searchData: (state, action) => {
    state.searchUserStore = action.payload;
  },
};

const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers,
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, createUserPending)
      .addCase(createUser.fulfilled, createUserFulfilled)
      .addCase(createUser.rejected, createUserRejected)
      .addCase(getUser.pending, getUserPending)
      .addCase(getUser.fulfilled, getUserFulfilled)
      .addCase(getUser.rejected, getUserRejected)
      .addCase(deleteUser.pending, deleteUserPending)
      .addCase(deleteUser.fulfilled, deleteUserFulfilled)
      .addCase(deleteUser.rejected, deleteUserRejected)
      .addCase(updateUser.pending, updateUserPending)
      .addCase(updateUser.fulfilled, updateUserFulfilled)
      .addCase(updateUser.rejected, updateUserRejected);
  },
});

//* ================================================= createAyncThunk

//* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> POST user Data to server
export const createUser = createAsyncThunk(
  "newUserCreate",
  async (data, { rejectWithValue }) => {
    try {
      const res = await fetch(
        `https://64fe674ef8b9eeca9e28b009.mockapi.io/crud`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const newUser = await res.json();
      return newUser;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

//* >>>>>>> Create New User Promises
function createUserPending(state) {
  state.loading = true;
}

function createUserFulfilled(state, action) {
  state.loading = false;
  state.users = { ...state.users, users: action.payload };
}

function createUserRejected(state, action) {
  state.loading = false;
  state.error = action.payload;
}

//* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Get user Data from server

export const getUser = createAsyncThunk(
  "getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(
        `https://64fe674ef8b9eeca9e28b009.mockapi.io/crud`
      );
      const allUsers = await res.json();

      return allUsers;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

//* >>>>>>>> get all User Promises
function getUserPending(state) {
  state.loading = true;
}
function getUserFulfilled(state, action) {
  state.loading = false;
  state.users = action.payload;
}

function getUserRejected(state, action) {
  state.loading = false;
  state.error = action.payload;
}

//* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Delete user Data from server

export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      const res = await fetch(
        `https://64fe674ef8b9eeca9e28b009.mockapi.io/crud/${id}`,
        {
          method: "DELETE",
        }
      );
      const deleteSingleUser = await res.json();
      return deleteSingleUser;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

//* >>>>>>>> Delete single User Promises
function deleteUserPending(state) {
  state.loading = true;
}
function deleteUserFulfilled(state, action) {
  state.loading = false;
  state.users = state.users.filter((user) => user.id !== action.payload.id);
}

function deleteUserRejected(state, action) {
  state.loading = false;
  state.error = action.payload;
}

//* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Update user Data from server

export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    try {
      const res = await fetch(
        `https://64fe674ef8b9eeca9e28b009.mockapi.io/crud/${data.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const updateSingleUser = await res.json();
      return updateSingleUser;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

//* >>>>>>>> Edit single User Promises
function updateUserPending(state) {
  state.loading = true;
}
function updateUserFulfilled(state, action) {
  state.loading = false;
  state.users = state.users.map((user) =>
    user.id === action.payload.id ? action.payload : user
  );
}

function updateUserRejected(state, action) {
  state.loading = false;
  state.error = action.payload;
}

export const { searchData } = crudSlice.actions;
export default crudSlice.reducer;
