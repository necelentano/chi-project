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
          const result = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );

          await updateProfile(auth.currentUser as User, {
            displayName: `${firstName} ${lastName}`,
            photoURL:
              "https://vectorified.com/images/default-avatar-icon-36.png",
          });

          console.log("sigUp result", result);
          return { data: { message: "You are registered successfully!" } };
        } catch (e) {
          return { error: e };
        }
      },
    }),
    logIn: build.mutation({
      queryFn: async ({ email, password }) => {
        try {
          const auth = getAuth();
          const result = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          console.log("firebaseApi login result", result);
          return { data: "OK" };
        } catch (e) {
          return { error: e };
        }
      },
    }),
    logOut: build.mutation({
      queryFn: async () => {
        try {
          const auth = getAuth();
          const result = await signOut(auth);
          console.log("logOut result", result);
          return { data: "logOut ok" };
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

          const result = await updatePassword(user, password);
          console.log("resetPassword result", result);
          return { data: "Reset password action success" };
        } catch (e) {
          return { error: e };
        }
      },
    }),
    forgotPassword: build.mutation({
      queryFn: async (email) => {
        try {
          const auth = getAuth();
          const result = await sendPasswordResetEmail(auth, email);
          console.log("forgotPassword result", result);
          return { data: "Forgot password action success" };
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
