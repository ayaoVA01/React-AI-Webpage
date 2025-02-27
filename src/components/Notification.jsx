import React from "react";
import { notificationImages } from "../constants";
import { notification1 } from "../assets";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center bg-n-9/40 backdrop-blur p-4 pr-4 border border-n-1/10 rounded-xl gap-5`}
    >
      <img src={notification1} alt="Iamage" width={62} height={62} className="rounded-xl" />
      <div className="flex-1 ">
        <h6 className="mb-1 font-semibold justify-between text-base">
          {title}
        </h6>

        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5">
            {notificationImages.map((items, index) => (
              <li key={index} className="flex w-6 h-6 border-2 border-n-12 rounded-full">
                <img
                  src={items}
                  alt={items}
                  width={20}
                  height={20}
                  className="w-full rounded-full overflow-hidden"
                />
              </li>
            ))}
          </ul>
          <div className="body-2 text-n-13">
            1m ago
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
