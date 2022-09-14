import { Radio } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { headerValues } from "../constants/enum";
import { onHeaderValuesChange } from "../redux/slices/context";

const Header = () => {
  const contextSelector = useSelector((state) => state.contextReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnChange = (event) => {
    dispatch(onHeaderValuesChange(event.target.value));
    navigate(event.target.value);
  };

  return (
    <div className="flex gap-10 fixed inset-0 h-[50px] px-5 items-center border-b">
      <img
        src="https://img.icons8.com/color/48/000000/confluence--v2.png"
        className="w-8 h-8"
        alt="icon"
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

export default Header;
