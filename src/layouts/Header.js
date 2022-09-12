import { Radio } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, withRouter } from "react-router-dom";
import { headerValues } from "../constants/enum";
import { onHeaderValuesChange } from "../redux/slices/context";

const Header = () => {
  const contextSelector = useSelector((state) => state.contextReducer);
  const dispatch = useDispatch();

  const history = useHistory();
  const location = useLocation();

  const handleOnChange = (event) => {
    dispatch(onHeaderValuesChange(event.target.value));
    history.push(event.target.value);
  };

  useEffect(() => {
    dispatch(onHeaderValuesChange(location.pathname));
  }, [location.pathname]);

  return (
    <div className="flex gap-10 fixed inset-0 h-[50px] px-5 items-center border-b">
      <img
        src="https://img.icons8.com/color/48/000000/confluence--v2.png"
        className="w-8 h-8"
      />

      <Radio.Group
        value={contextSelector.headerOption}
        onChange={handleOnChange}
      >
        {Object.entries(headerValues).map(([key, value]) => (
          <Radio.Button key={key} value={key}>
            {value}
          </Radio.Button>
        ))}
      </Radio.Group>
    </div>
  );
};

export default withRouter(Header);
