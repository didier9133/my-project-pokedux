import { Pagination } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import getURLPath from "../config";
import { getPokemonsThunk } from "../features/dataSlice";
import { setCurrentPage, setLoading } from "../features/uiSlice";

const Pages = () => {
  const LIMIT_DEFAULT = 20;
  const OFFSET = 1;

  const currentPage = useSelector((state) => state.ui.currentPage);

  const dispatch = useDispatch();

  const onPageChange = (e) => {
    setLoading(true);
    const path = (e - OFFSET) * LIMIT_DEFAULT;
    const url = getURLPath({ offset: path, limit: LIMIT_DEFAULT });

    dispatch(getPokemonsThunk({ url }));
    dispatch(setCurrentPage(e));
  };
  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={onPageChange}
      showIcons={true}
      totalPages={100}
      className="flex justify-center my-10"
    />
  );
};
export default Pages;
