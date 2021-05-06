import React from "react";

export type FirebaseAuthConsumerModel = {
  isSignedIn: boolean;
  user?: {
    uid: string;
    displayName: string;
    email: string;
  };
};

export type Lesson = {
  ch: string;
  en: string;
  id: number;
  path: string;
  pdf: string;
  program: string;
  total: number;
}

export type LessonsOption = {
  label: string;
  value: string;
};

export type Category = "boost" | "esm" | "ev3" | "spm";

export const FirebaseContext = React.createContext<FirebaseAuthConsumerModel>({
  isSignedIn: false,
});

export const FirebaseContextProvider: React.FC<FirebaseAuthConsumerModel> = ({
  isSignedIn,
  user,
  children,
}) => {
  return (
    <FirebaseContext.Provider value={{ isSignedIn, user }}>
      {children}
    </FirebaseContext.Provider>
  );
};
