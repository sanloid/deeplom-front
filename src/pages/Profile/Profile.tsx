import { Avatar } from "flowbite-react";
import React from "react";
import UserDataStore from "../../store/UserDataStore";
import ProfilePhotoUploader from "../../components/ProfilePhotoUploader";
import { toJS } from "mobx";

const Profile = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex p-10">
          {UserDataStore.oneResponse?.photo ? (
            <Avatar img={UserDataStore.oneResponse?.photo} size="xl" />
          ) : (
            <ProfilePhotoUploader size={"48"} />
          )}
          <div className="ml-10 text-3xl flex flex-col justify-start">
            <span className="mb-3">Jimmy Rock</span>
            <span className="text-blue-500 text-xl">
              jimbosupergood@gmail.com
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
