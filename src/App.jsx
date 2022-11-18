import { useEffect, useState } from "react"
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth"
import { auth } from "./firebase"
import Profile from "./pages/Profile"
import { Route, Routes } from "react-router-dom"
import { SignIn } from "./pages/SignIn"
import { Navigate } from "react-router-dom"

function App() {
  const [userData, setUserData] = useState("")
  const googleProvider = new GoogleAuthProvider()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserData(user)
    } else {
      console.log("No user found")
    }
  })

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      console.log(result.user)
    } catch (error) {
      console.log(error)
    }
  }

  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log(userData)
        setUserData("")
      })
      .catch((error) => {
        // An error happened.
      })
  }

  console.log(userData)

  return (
    <div className="h-screen flex justify-center items-center bg-[#393E46]">
      <Routes>
        <Route
          path="/"
          element={
            !userData ? (
              <SignIn signInWithGoogle={signInWithGoogle} />
            ) : (
              <Navigate to="profile" />
            )
          }
        />
        <Route
          path="profile"
          element={
            userData ? (
              <Profile userData={userData} logOut={logOut} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </div>
  )
}

export default App
