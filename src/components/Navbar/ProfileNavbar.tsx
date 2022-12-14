import { useQuery } from "@tanstack/react-query";
import {
  ADMIN_PAGES_LINKS,
  PAGES_LINKS,
  PROFILE_PAGES_LINKS,
} from "common/pageLinks";
import { IUser } from "common/types/user.type";
import DropDownSolid from "components/UI/Icons/DropDownSolid";
import ProfileUserOutline from "components/UI/Icons/ProfileOutline";
import Link from "next/link";
import { logoutUser } from "proxy/fetches/authApi";
import { fetchUser } from "proxy/fetches/fetchUser";
import React, { memo, MouseEventHandler, useState } from "react";
import { selectUserId } from "store/slices/authSlice";
import { useAppDispatch, useAppSelector } from "store/store";

interface ProfileNavbarProps {
  isActive: boolean;
  handleBtn: MouseEventHandler;
}

const ProfileNavbar = ({ isActive, handleBtn }: ProfileNavbarProps) => {
  const userId = useAppSelector(selectUserId);
  const dispatch = useAppDispatch();

  const { data } = useQuery<IUser>(["user"], () => fetchUser(userId!), {
    enabled: userId !== null,
  });

  const renderedPageLinks = Object.entries(PROFILE_PAGES_LINKS).map(
    ([_, page]) => {
      return (
        <Link href={page.path} key={page.name}>
          <p
            title={page.name}
            className={`font-medium text-base sm:text-lg cursor-pointer text-white hover:text-gray-400 duration-200 transition-all`}
          >
            {page.name}
          </p>
        </Link>
      );
    }
  );

  const handleLogout = () => {
    logoutUser(dispatch);
  };

  return (
    <div onClick={handleBtn}>
      <div className="flex items-center gap-x-1">
        <ProfileUserOutline className="w-7 h-7 cursor-pointer" />
        <DropDownSolid className="w-4 h-4 cursor-pointer" />
      </div>

      {/* Modal */}
      <div
        onClick={handleBtn}
        className={`${
          isActive ? "visible opacity-100" : "invisible opacity-0"
        } container mx-auto absolute top-[76px] z-10 right-0 left-0 bottom-0 w-screen h-full duration-300 transition-all`}
      >
        <div
          onClick={e => e.stopPropagation()}
          className={`${
            isActive ? "visible opacity-100" : "invisible opacity-0"
          } absolute z-50 w-fit min-w-[140px] max-w-[220px] top-0 right-3 sm:rig rounded-xl bg-black shadow-2xl`}
        >
          <div className="flex flex-col justify-center items-start w-full px-6 py-5">
            <div className="w-full">
              <h1
                title={data?.name}
                className="font-bold text-white truncate text-ellipsis overflow-x-hidden pb-3 border-b-[0.1px] border-gray-500 text-semibold"
              >
                {data?.name}
              </h1>
            </div>
            <div className="flex flex-col justify-center items-start pt-3 space-y-2 mb-2">
              {renderedPageLinks}
              {data?.role === "ADMIN" && (
                <Link href={ADMIN_PAGES_LINKS.DASHBOARD.path}>
                  <p
                    title={ADMIN_PAGES_LINKS.DASHBOARD.name}
                    className={`font-medium text-base sm:text-lg cursor-pointer text-white hover:text-gray-400 duration-200 transition-all`}
                  >
                    {ADMIN_PAGES_LINKS.DASHBOARD.name}
                  </p>
                </Link>
              )}
            </div>
            <div className="w-full">
              <button
                title="Logout"
                onClick={handleLogout}
                className="text-orange-500 font-medium text-base sm:text-lg rounded-xl hover:text-orange-400"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProfileNavbar);
