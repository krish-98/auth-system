import { FcGoogle } from "react-icons/fc"
import { BsTwitter } from "react-icons/bs"

export const SignIn = ({ signInWithGoogle, signInWithTwitter }) => {
  return (
    <div className="flex gap-6">
      <div
        onClick={signInWithGoogle}
        className="flex gap-2 bg-white p-3 rounded-3xl cursor-pointer"
      >
        <FcGoogle className="w-7 h-7" />
        <button>SignIn with Google</button>
      </div>

      <div
        onClick={signInWithTwitter}
        className="flex gap-2 bg-white p-3 rounded-3xl cursor-pointer"
      >
        <BsTwitter className="w-7 h-7 text-blue-400" />
        <button>SignIn with Twitter</button>
      </div>
    </div>
  )
}
