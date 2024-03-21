import { useEffect } from "react";
import { useAppDispatch } from "./redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { setCurrentUser } from "../../store/authSlice";

export const useAuthStateChanged = () => {
  const dispatch = useAppDispatch();
  const auth = getAuth();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        dispatch(
          setCurrentUser({
            email: firebaseUser.email,
            name: firebaseUser.displayName,
            photo: firebaseUser.photoURL,
          })
        );
      } else {
        dispatch(setCurrentUser(null));
      }
    });
    return unsubscribe;
  }, []);
};
