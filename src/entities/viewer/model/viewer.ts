import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserInfo, TRole } from "../types";

const initialState: IUserInfo = {
  name: "Иванов Иван Иванович",
  role: "volunteer",
  id: 112233,
  phoneNumber: "+7(000)000-00-00",
  address: "Ул. Потолочного д. 3",
  avatarLink: "https://i.pravatar.cc/300",
  score: 2500,
  virtualKey: true,
  completedTasksCount: 150,
  tasksCount: 5,
  description: "Я люблю музыку, книги и кошек",
};

export const viewerModel = createSlice({
  name: "viewer",
  reducers: {
    updateUserRole: (state, { payload }: PayloadAction<TRole>) => {
      state.role = payload;
    },
  },
  initialState,
});

export const { updateUserRole } = viewerModel.actions;
