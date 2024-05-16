import GoodForm from "../../components/GoodDetailedCard/GoodForm";
import { useEffect, useState } from "react";
import { getSizes } from "../../services/api";
import { useForm } from "react-hook-form";
import GoodItemColors from "./GoodItemColors";

function GoodItemForm({ product, itemId, colorId }) {
  const [sizes, setSizes] = useState([]);
  const { register, setValue, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  useEffect(() => {
    setValue("item-id", itemId);
  }, [itemId, setValue]);

  useEffect(() => {
    getSizes().then((data) => {
      setSizes(data);
    });
  }, []);

  return (
    <GoodForm
      onSubmit={handleSubmit(onSubmit)}
      colors={
        <GoodItemColors
          product={product}
          register={register}
          colorId={colorId}
          itemId={itemId}
        />
      }
      sizes={sizes.map((size) => {
        const isDisabled =
          product && !product.colors[colorId - 1].sizes.includes(size.id);

        return (
          <button
            key={size.id}
            disabled={isDisabled}
            onClick={(e) => e.preventDefault()}
          >
            {size.label}
          </button>
        );
      })}
    />
  );
}

export default GoodItemForm;
