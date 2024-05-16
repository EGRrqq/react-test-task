import GoodForm from "../../components/GoodDetailedCard/GoodForm";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import GoodItemColors from "./GoodItemColors";
import GoodItemSizes from "./GoodItemSizes";

function GoodItemForm({ product, itemId, colorId }) {
  const { control, register, setValue, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  useEffect(() => {
    setValue("item-id", itemId);
  }, [itemId, setValue]);

  return (
    <GoodForm
      onSubmit={handleSubmit(onSubmit)}
      control={control}
      colors={
        <GoodItemColors
          product={product}
          colorId={colorId}
          itemId={itemId}
          setValue={setValue}
        />
      }
      sizes={
        <GoodItemSizes
          curSizes={product.colors[colorId - 1].sizes}
          register={register}
        />
      }
      action={<button type="submit">в корзину</button>}
    />
  );
}

export default GoodItemForm;
