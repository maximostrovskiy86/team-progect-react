import { useDispatch, useSelector } from "react-redux";
import { authOperations, authSelectors } from "../../redux/auth";
import style from "./Menu.module.css";
import Button from "react-bootstrap/Button";

const Menu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);
  const logout = () => {
    dispatch(authOperations.logOut());
  };
  return (
    <div className={style.userWrapper}>
      <span className={style.userName}>{userName}</span>
      <Button variant="primary">Primary</Button>
      <button className={style.logBtn} type="button" onClick={logout}>
        logout
      </button>
    </div>
  );
};

export default Menu;
