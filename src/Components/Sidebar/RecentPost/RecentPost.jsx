import { useState } from "react";
import style from "./RecentPost.module.css";
import { useSelector } from "react-redux";

export const RecentPost = () => {
  const { isLight } = useSelector((state) => state.color);
  const handleClearContainer = () => {
    setDisplayRecentPostContainer(false);
  };
  const [displayRecentPostContainer, setDisplayRecentPostContainer] = useState(true);
  return displayRecentPostContainer ? (
    <div
      className={style.RecentPostContainer}
      style={{
        backgroundColor: isLight ? "#fff" : "#1a1a1b",
        border: `1px solid ${isLight ? "#ccc" : "#343536"}`,
        color: isLight ? "#1c1c1c" : "#d7dadc",
      }}
    >
      <div>
        <p className={`${style.textAlignLeft} ${style.recentpostHeading}`}>RECENT POSTS</p>
      </div>
      <div className={style.displayFlexRecentPostContent}>
        <div className={style.imageContainer}>
          <img
            className={style.image}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEUAAAD////y8vIYGBgzMzMjIyMGBgb7+/sTExPo6OjX19dra2uNjY21tbW8vLwcHByBgYFQUFB0dHRmZmaqqqouLi7IyMjV1dXi4uI6OjqkpKTu7u56enonJyecnJzOzs5AQECHh4eRkZFJSUlUVFQ+Pj5eXl5wcHCyU2VbAAACyElEQVR4nO3Xa3OiMBSAYcNdW0TBW4uXit36///hchIuAa07nRWd6bzPl5JDDuQYEuhoBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANzmJm7w7DEMxJ2n2ct27u2SX1hhlC6m8T47LZ89kEF4rysnj7NnD2Mgy3QVqslx9+xxDMQrJkpNZt6zxzGU7VqpcDFweW6rDkWJeyVqzHvpVteoCgWddNdNdHSZWF20U6yU2mzvXlGHvxo7rc27icaObXz4bBNe1clKj2I7PZ+Y0W7DTr4T6hV2zuV43+Sey+lTh8H3lnINdEx1dNqLqqbEL6XGVvpFx7NEj/2o2f4/NnJ88HVjK43J8HtnECqVjoJW0gw8qsKjpPyt4zohbn4FzSlHaacH5im03tXmGpWFrrec6Gxc/nUe8W4IyiG+XIalwrZVKLVqGjK0WdPSFf5AJgnzkzw54f7f3e9A5nCfvdS+qnC3woVd4Ulm4U/dul5hmo8r+bR3yl8XgZ7Jw9sdy7hl010wYaqjUuGkJl3e24xC9r+6cb3CWXvBy7MyjUod71/KN5J1aClvrbe9/gaytjd5OVmvy+8rTINEuP1z+tIb9/x+mTaYqBYsywF/1cN4rRVH8/Au44qM0cz1jQrPV+/1Kcu4/H3Kaxye8X2d2BX2T/p553E2H5E/rNC8Rgr9pKvwIZ/Z7s5vJW+3KkyLelKPcbMUHTmwLrHTLzupcOta4eoS5mUhd8hkQajFAyqc99/Nof9dhbZ1PbxVP18/vbN+1Cxj3Tk0e2iw1vvQAzbU8zi068vNZ5dUeOs/bF/2Q3mP+ivHrsQx+0e/QkcqjA5ymDc17eXG4cAfpdrSs1Sxnefd/nX9su+y7tqqds7E65Fg9CFHSffGbx/3LgcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/4y+TVh5HJUyKZAAAAABJRU5ErkJggg=="
            alt=""
          />
        </div>
        <div>
          <p className={style.recentPostTitle}>
            This Reddit Clone was create by Beauty, Kevin, and David. Care to know us?
          </p>
          <div className={style.recentSubTitle}>
            <span>•106 points</span>
            <span>•71 comments</span>
            <span>•12h</span>
          </div>
        </div>
      </div>
      <div className={style.rightButtonBox}>
        <button className={style.buttonAlignRight} onClick={handleClearContainer}>
          clear
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};
