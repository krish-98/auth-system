import { FcGoogle } from "react-icons/fc"

export const SignIn = ({ signInWithGoogle }) => {
  return (
    <div
      onClick={signInWithGoogle}
      className="flex gap-2 bg-white p-3 rounded-3xl cursor-pointer"
    >
      <FcGoogle className="w-7 h-7" />
      <button>SignIn with Google</button>
    </div>
  )
}
