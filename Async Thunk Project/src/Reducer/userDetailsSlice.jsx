import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//* ==================================== Create User POST Data
export const createUser = createAsyncThunk(
  "userCreate",
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
      const uData = await res.json();
      return uData;
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);

//* ==================================== Show User Fetch Data

export const showUser = createAsyncThunk("showUser", async () => {
  try {
    const res = await fetch(`https://64fe674ef8b9eeca9e28b009.mockapi.io/crud`);
    //   console.log(res);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    //   console.log(data);
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
});

//* ==================================== Delete User Update Data
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      const res = await fetch(
        `https://64fe674ef8b9eeca9e28b009.mockapi.io/crud/${id}`,
        { method: "DELETE" }
      );
      //   console.log(res);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      //   console.log(data);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

//* ==================================== Edit User Update Data
export const editUser = createAsyncThunk(
  "editUser",
  async (data, { rejectWithValue }) => {
    console.log(data);
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
      //   console.log(res);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const updateData = await res.json();
      //   console.log(data);
      return updateData;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

//* ==================================  extra reducers as separate functions

//* >>>>>>>>>>>>>>>>>>>>>>>>>>> Create user
const createUserPending = (state) => {
  state.loading = true;
};

const createUserFulfilled = (state, action) => {
  state.loading = false;
  state.users.push(action.payload);
};

const createUserRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

//* >>>>>>>>>>>>>>>>>>>>>>>>>>> Disaplay user

const showUserPending = (state) => {
  state.loading = true;
};

const showUserFulfilled = (state, action) => {
  state.loading = false;
  state.users = action.payload;
};

const showUserRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

//* >>>>>>>>>>>>>>>>>>>>>>>>>>> Delete user

const deleteUserPending = (state) => {
  state.loading = true;
};

const deleteUserFulfilled = (state, action) => {
  state.loading = false;
  const { id } = action.payload;
  state.users = state.users.filter((user) => user.id !== id);
};
const deleteUserRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
  console.log(action.payload);
};

//* >>>>>>>>>>>>>>>>>>>>>>>>>>> Edit user

const editUserPending = (state) => {
  state.loading = true;
};

const editUserFulfilled = (state, action) => {
  state.loading = false;
  console.log(action.payload);
  state.users = state.users.map((user) =>
    user.id === action.payload.id ? action.payload : user
  );
};

const editUserRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
  console.log("Edit User Error:", action.payload);
};

//* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> userSlice

const initialState = {
  users: [],
  loading: false,
  error: null,
  searchUser: [],
};
const userDetails = createSlice({
  name: "useDetails",
  initialState,
  reducers: {
    searchUser: (state, action) => {
      state.searchUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, createUserPending)
      .addCase(createUser.fulfilled, createUserFulfilled)
      .addCase(createUser.rejected, createUserRejected)
      .addCase(showUser.pending, showUserPending)
      .addCase(showUser.fulfilled, showUserFulfilled)
      .addCase(showUser.rejected, showUserRejected)
      .addCase(deleteUser.pending, deleteUserPending)
      .addCase(deleteUser.fulfilled, deleteUserFulfilled)
      .addCase(deleteUser.rejected, deleteUserRejected)
      .addCase(editUser.pending, editUserPending)
      .addCase(editUser.fulfilled, editUserFulfilled)
      .addCase(editUser.rejected, editUserRejected);
  },
});

export const { searchUser } = userDetails.actions;
export default userDetails.reducer;
