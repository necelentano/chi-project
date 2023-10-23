import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  User,
} from "firebase/auth";

export const firebaseApi = createApi({
  baseQuery: fakeBaseQuery(),
  endpoints: (build) => ({
    signUp: build.mutation({
      queryFn: async ({ firstName, lastName, email, password }) => {
        try {
          const auth = getAuth();
          await createUserWithEmailAndPassword(auth, email, password);

          await updateProfile(auth.currentUser as User, {
            displayName: `${firstName} ${lastName}`,
            photoURL:
              "https://vectorified.com/images/default-avatar-icon-36.png",
          });

          return { data: "Sign up OK" };
        } catch (e) {
          return { error: e };
        }
      },
    }),
    logIn: build.mutation({
      queryFn: async ({ email, password }) => {
        try {
          const auth = getAuth();
          await signInWithEmailAndPassword(auth, email, password);

          return { data: "Log in OK" };
        } catch (e) {
          return { error: e };
        }
      },
    }),
    logOut: build.mutation({
      queryFn: async () => {
        try {
          const auth = getAuth();
          await signOut(auth);

          return { data: "Log out OK" };
        } catch (e) {
          return { error: e };
        }
      },
    }),
    resetPassword: build.mutation({
      queryFn: async ({ email, currentPassword, password }) => {
        try {
          const auth = getAuth();

          const user = auth.currentUser as User;

          const credential = EmailAuthProvider.credential(
            email,
            currentPassword
          );

          await reauthenticateWithCredential(user, credential);

          await updatePassword(user, password);

          return { data: "Reset password OK" };
        } catch (e) {
          return { error: e };
        }
      },
    }),
    forgotPassword: build.mutation({
      queryFn: async ({ email }) => {
        try {
          const auth = getAuth();
          await sendPasswordResetEmail(auth, email);

          return { data: "Forgot password OK" };
        } catch (e) {
          return { error: e };
        }
      },
    }),
  }),
});

export const {
  useSignUpMutation,
  useLogInMutation,
  useLogOutMutation,
  useResetPasswordMutation,
  useForgotPasswordMutation,
} = firebaseApi;
