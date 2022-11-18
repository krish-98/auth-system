import { Link } from "react-router-dom"

const Profile = ({ userData, logOut }) => {
  return (
    <div className="h-[450px] w-[350px] bg-[#6D9886] rounded-xl flex flex-col items-center justify-center gap-3 relative">
      <img
        className="w-2h-28 h-28 rounded-full ring-4 ring-[#393E46]"
        src={userData?.photoURL}
        alt={userData?.uid}
      />
      <h2 className="font-semibold text-lg text-[#F2E7D5]">
        {userData?.displayName}
      </h2>
      <p className="font-semibold text-lg text-[#F2E7D5]">{userData?.email}</p>

      <Link
        to="/"
        onClick={logOut}
        className="absolute font-semibold text-lg text-[#393E46] top-2 right-4"
      >
        Sign Out
      </Link>
    </div>
  )
}
export default Profile
