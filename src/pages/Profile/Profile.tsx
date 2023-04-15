import React, { useEffect } from "react";
import { Avatar } from "flowbite-react";
import UserDataStore from "../../store/UserDataStore";
import ProfilePhotoUploader from "../../components/ProfilePhotoUploader";
import { toJS } from "mobx";
import env from "../../api/env";
import { useLocation } from "react-router-dom";
import ProfileStore from "../../store/ProfileStore";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import { observer } from "mobx-react-lite";

const Profile: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    const id = Number(location.pathname.split("/")[2]);
    console.log(id);
    ProfileStore.getProfile(id);
  }, [location]);
  if (ProfileStore.loading) return <LoadingSpinner />;
  return (
    <>
      <div className="container mx-auto">
        <div className="flex p-10">
          <Avatar
            className="flex w-48 h-48 p-5"
            img={
              ProfileStore.profile?.photo
                ? env.baseApiUrl + ProfileStore.profile.photo
                : "https://via.placeholder.com/200"
            }
            size="sm"
          />
          <ProfilePhotoUploader size={"48"} />
          <div className="ml-10 text-3xl flex flex-col justify-start">
            <span className="mb-3">{ProfileStore.profile?.FIO?.firstName}</span>
            <span className="mb-3">{ProfileStore.profile?.FIO?.lastName}</span>
            <span className="text-blue-500 text-xl">
              {ProfileStore.profile?.email}
            </span>
            <span className="text-blue-500 text-xl">
              {ProfileStore.profile?.description}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default observer(Profile);
