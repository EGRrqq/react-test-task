import { useEffect, useRef, useState } from "react";
import { getSizes } from "../../services/api";
import Input from "../../components/solid/Input";

import listStyles from "../../components/ImageList/ImageList.module.css";
import itemStyles from "./GoodItem.module.css";

function GoodItemSizes({ curSizes, register, setValue, getError }) {
  const [sizes, setSizes] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const listRef = useRef();
  const fieldset = listRef.current && listRef.current.closest("fieldset");

  const isDisabled = (size) => curSizes && !curSizes.includes(size.id);

  function handleButtonClick(e, size) {
    e.preventDefault();

    getError && fieldset.classList.remove(`${itemStyles["fieldset--error"]}`);
    setValue("size-id", size.id);
    setSelectedSize(size.id);
  }

  useEffect(() => {
    getError && fieldset.classList.add(`${itemStyles["fieldset--error"]}`);
  }, [fieldset, getError]);

  useEffect(() => {
    getSizes().then((data) => {
      setSizes(data);
    });
  }, []);

  return (
    <div className={listStyles["list"]} ref={listRef}>
      {sizes &&
        sizes.map((size) => (
          <label key={size.id} className={`${listStyles["item-wrapper"]}`}>
            <Input
              className={listStyles["item-wrapper__radio"]}
              type="radio"
              name={"size-id"}
              required={true}
              register={register}
              value={size.id}
              disabled={isDisabled(size)}
              checked={selectedSize === size.id}
            />
            <button
              disabled={isDisabled(size)}
              className={`${
                !isDisabled(size) && listStyles["item-wrapper--selectable"]
              } ${listStyles["item-wrapper__btn"]}`}
              onClick={(e) => handleButtonClick(e, size)}
              type="button"
            >
              {size.label}
            </button>
          </label>
        ))}
    </div>
  );
}

export default GoodItemSizes;
