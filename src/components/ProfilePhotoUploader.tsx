import React from "react";
import { useState } from "react";
import User from "../api/requests/User";
import UserDataStore from "../store/UserDataStore";
import LoadingSpinner from "./UI/LoadingSpinner";
import { toJS } from "mobx";

interface IProfilePhotoUploader {
  size: string;
}

const ProfilePhotoUploader: React.FC<IProfilePhotoUploader> = ({ size }) => {
  const [loading, setLoading] = useState(false);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    setLoading(true);
    if (selectedFile)
      User.updateProfilePhoto(
        selectedFile,
        UserDataStore.getDecodedAccessToken().id
      ).then(() => {
        setLoading(false);
      });
  };

  if (loading)
    return (
      <div className={`w-${size} flex justify-center`}>
        <LoadingSpinner />
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <label className="block cursor-pointer">
        <input
          className="sr-only"
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
        />
        <div className="rounded-md py-2 px-4 bg-blue-500 text-white font-bold text-lg cursor-pointer hover:bg-blue-600 transition duration-200">
          Select Photo
        </div>
      </label>
    </div>
  );
};

export default ProfilePhotoUploader;
