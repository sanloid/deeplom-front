import { Avatar, Dropdown } from "flowbite-react";
import React from "react";
import UserDataStore from "../../store/UserDataStore";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

export interface IAvatarDropdown {}

const AvatarDropdown: React.FC<IAvatarDropdown> = () => {
  const navigate = useNavigate();
  const logout = () => {
    UserDataStore.logout();
    navigate("/login");
  };
  return (
    <Dropdown
      label={
        <Avatar
          alt="User settings"
          img={UserDataStore.oneResponse?.photo}
          rounded={true}
        />
      }
      arrowIcon={false}
      inline={true}
    >
      <Dropdown.Header className="dark:text-gray-500">
        <span className="block text-sm">
          {UserDataStore.oneResponse?.login}
        </span>
        <span className="block truncate text-sm font-medium">
          {UserDataStore.oneResponse?.email}
        </span>
      </Dropdown.Header>
      <Dropdown.Item className="dark:text-gray-500">Dashboard</Dropdown.Item>
      <Dropdown.Item className="dark:text-gray-500">Settings</Dropdown.Item>
      <Dropdown.Item className="dark:text-gray-500">Earnings</Dropdown.Item>
      <Dropdown.Divider className="dark:text-gray-500" />
      <Dropdown.Item className="dark:text-gray-500" onClick={logout}>
        Sign out
      </Dropdown.Item>
    </Dropdown>
  );
};

export default observer(AvatarDropdown);
