import { useDispatch } from "react-redux";
import { changeMode } from "../store/slices/generalSlice";

const useToggleHook = () => {
  const dispatch = useDispatch();
  return () => dispatch(changeMode());
};

export default useToggleHook;
