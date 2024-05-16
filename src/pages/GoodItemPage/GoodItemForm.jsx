import styles from "./GoodItem.module.css";

import GoodForm from "../../components/GoodDetailedCard/GoodForm";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import GoodItemColors from "./GoodItemColors";
import GoodItemSizes from "./GoodItemSizes";

function GoodItemForm({ product, itemId, colorId }) {
  const {
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
        <>
          <legend>Цвета</legend>
          <GoodItemColors
            product={product}
            colorId={colorId}
            itemId={itemId}
            setValue={setValue}
          />
        </>
      }
      sizes={
        <>
          <legend>Размеры</legend>
          <GoodItemSizes
            curSizes={product.colors[colorId - 1].sizes}
            register={register}
            setValue={setValue}
            getError={!!errors["size-id"]}
          />
        </>
      }
      action={
        <button type="submit" className={`${styles["form__action"]}`}>
          в корзину
        </button>
      }
    />
  );
}

export default GoodItemForm;
