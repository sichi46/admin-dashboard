import React from "react";
import SettingSection from "./SettingSection";
import { UserIcon } from "lucide-react";

const Profile = () => {
  return (
    <SettingSection icon={UserIcon} title={"Profile"}>
      <div className="flex flex-col sm:flex-row items-center mb-6">
        <img
          src="https://plus.unsplash.com/premium_photo-1683140621573-233422bfc7f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Profile Image"
          className="rounded-full w-20 h-20 object-cover mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-100">Jane Doe</h3>
          <p className="text-gray-400">Jane.Doe@example.com</p>
        </div>
      </div>
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto">
        Edit your profile
      </button>
    </SettingSection>
  );
};

export default Profile;
