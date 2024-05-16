import { useEffect, useState } from "react";
import { getSizes } from "../../services/api";
import Input from "../../components/solid/Input";

function GoodItemSizes({ curSizes, register }) {
  const [sizes, setSizes] = useState([]);

  const isDisabled = (size) => curSizes && !curSizes.includes(size.id);

  useEffect(() => {
    getSizes().then((data) => {
      setSizes(data);
    });
  }, []);

  return (
    <>
      {sizes &&
        sizes.map((size) => (
          <label key={size.id}>
            <Input
              type="radio"
              name={"size-id"}
              required={true}
              register={register}
              value={size.id}
              disabled={isDisabled(size)}
            />
            <button
              disabled={isDisabled(size)}
              onClick={(e) => e.preventDefault()}
            >
              {size.label}
            </button>
          </label>
        ))}
    </>
  );
}

export default GoodItemSizes;
