/**
 * External dependencies.
 */
import { Link } from "react-router-dom";

/**
 * Internal dependencies.
 */
import useAppData from "../../store/useAppData";
import useNavbar from "./useNavbar";

interface UserProfileItem {
  label: string;
  href: string;
}

interface UserProfileDropdownProps {
  handleDropdownMouseOver: () => void;
  handleDropdownMouseOut: () => void;
  userprofileitems: UserProfileItem[];
}

const UserProfileMenu = ({
  handleDropdownMouseOver,
  handleDropdownMouseOut,
  userprofileitems,
}: UserProfileDropdownProps) => {
  const { userData } = useAppData();
  const { signOutUser } = useNavbar();

  return (
    <>
      <div
        onMouseOut={handleDropdownMouseOut}
        onMouseOver={handleDropdownMouseOver}
        className="absolute p-2 min-w-40 bg-white dark:bg-gray-900 rounded top-14 drop-shadow-xl z-10 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white text-sm"
      >
        <div className="text-gray-900 dark:text-white">{userData.name}</div>

        <hr className="mt-2 pt-2 sm:mx-auto border-gray-300 dark:border-gray-600" />

        <ul aria-labelledby="dropdownUserAvatarButton">
          {userprofileitems.map((userprofileitem, index) => (
            <li key={index} className="text-md font-medium">
              {userprofileitem.label === "Sign out" ? (
                <div>
                  <hr className="mt-2 pt-2 sm:mx-auto border-gray-300 dark:border-gray-600" />
                  <button
                    className="w-full text-left hover:text-sky-500"
                    onClick={signOutUser}
                  >
                    {userprofileitem.label}
                  </button>
                </div>
              ) : (
                <Link
                  to={userprofileitem.href}
                  className="block hover:text-sky-500"
                >
                  {userprofileitem.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UserProfileMenu;
