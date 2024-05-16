import { useEffect, useState } from "react";
import { getSizes } from "../../services/api";
import Input from "../../components/solid/Input";

import styles from "../../components/ImageList/ImageList.module.css";

function GoodItemSizes({ curSizes, register, setValue }) {
  const [sizes, setSizes] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);

  const isDisabled = (size) => curSizes && !curSizes.includes(size.id);

  function handleButtonClick(e, size) {
    e.preventDefault();

    setValue("size-id", size.id);
    setSelectedSize(size.id);
  }

  useEffect(() => {
    getSizes().then((data) => {
      setSizes(data);
    });
  }, []);

  return (
    <div className={styles["list"]}>
      {sizes &&
        sizes.map((size) => (
          <label key={size.id} className={`${styles["item-wrapper"]}`}>
            <Input
              className={styles["item-wrapper__radio"]}
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
                !isDisabled(size) && styles["item-wrapper--selectable"]
              } ${styles["item-wrapper__btn"]}`}
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
