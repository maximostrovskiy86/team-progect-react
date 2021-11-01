import { useDispatch, useSelector } from "react-redux";
import { authOperations, authSelectors } from "../../redux/authorization";
import style from "./Menu.module.scss";

const Menu = ({ width }) => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);
  const logout = () => {
    dispatch(authOperations.logOut());
  };
  return (
    <div className={`${style.userBlock} ${width < 768 && style.hide}`}>
      <div className={style.wrapper}>
        <span className={style.userName}>{userName}</span>

        <button className={style.logBtn} type="button" onClick={logout}>
          Выйти
        </button>
      </div>
    </div>
  );
};

export default Menu;
