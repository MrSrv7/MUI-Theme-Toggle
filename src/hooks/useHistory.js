import { useDispatch } from "react-redux";
import { changeRoute } from "../store/slices/generalSlice";

const useHistory = (path) => {

  const dispatch = useDispatch();
  return () => dispatch(changeRoute(path));

};

export default useHistory;
