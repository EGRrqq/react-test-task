import GoodForm from "../../components/GoodDetailedCard/GoodForm";
import { useEffect, useState } from "react";
import { getSizes } from "../../services/api";
import { useForm } from "react-hook-form";
import GoodItemColors from "./GoodItemColors";
import Input from "../../components/solid/Input";

function GoodItemForm({ product, itemId, colorId }) {
  const [sizes, setSizes] = useState([]);
  const { control, register, setValue, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  const isDisabled = (size) =>
    product && sizes && !product.colors[colorId - 1].sizes.includes(size.id);

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
      control={control}
      colors={
        <GoodItemColors
          product={product}
          register={register}
          colorId={colorId}
          itemId={itemId}
        />
      }
      sizes={
        <div>
          {sizes.map((size) => (
            <label key={size.id}>
              <Input
                type="radio"
                name={"size-id"}
                // required={true}
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
        </div>
      }
      action={<button type="submit">в корзину</button>}
    />
  );
}

export default GoodItemForm;
