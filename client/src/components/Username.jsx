import React from "react";
import avatar from "../assets/profile.png";
import { Link } from "react-router-dom";
import styles from "../styles/Username.module.css";
const Username = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-scr">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Hello Again!</h4>
            <span className="px-4 text-xl w-2/3 mt-2 text-center text-gray-500">
              Explore more by connecting with us.
            </span>
          </div>
          <form className="py-1">
            <div className="profile flex justify-center py-4">
              <img src={avatar} className={styles.profile_img} alt="avatar" />
            </div>
            <div className="textbox flex flex-col gap-6 items-center">
              <input
                className={styles.textbox}
                type="text"
                placeholder="username"
              />
              <button className={styles.btn} type="submit">
                {" "}
                let's go
              </button>
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500">
                Not a member{" "}
                <Link className="text-red-500" href="/register">
                  Register Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Username;
