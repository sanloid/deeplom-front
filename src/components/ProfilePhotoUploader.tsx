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
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    console.log(selectedFile);
    setFile(selectedFile);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  React.useEffect(() => {
    if (file) {
      console.log(file);
      setLoading(true);
      User.updateProfilePhoto(
        file,
        UserDataStore.getDecodedAccessToken().id
      ).then(() => {
        setLoading(false);
      });
    }
  }, [file]);

  if (loading)
    return (
      <div className={`w-${size} flex justify-center`}>
        <LoadingSpinner />
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div
        className={`w-${size} h-${size} rounded-lg bg-gray-300 flex items-center justify-center text-gray-400 font-bold text-lg`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        Drop Photo Here
        <img
          src={`http://127.0.0.1:3000${UserDataStore?.oneResponse?.photo}`}
        />
      </div>
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
