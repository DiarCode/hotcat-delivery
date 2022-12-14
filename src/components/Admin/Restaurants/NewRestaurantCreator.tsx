import { RestaurantDTO } from "common/dto/RestaurantDTO";
import { NOTIFICATION_TYPES } from "common/types/notification.enum";
import NotificationModal from "components/NotificationModal/NotificationModal";
import { useRouter } from "next/router";
import { postNewRestaurant } from "proxy/fetches/fetchRestaurant";
import React, { MutableRefObject, useRef, useState } from "react";
import { showNotificationModal } from "store/slices/notificationModalSlice";
import { useAppDispatch } from "store/store";

const NewRestaurantCreator = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const nameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const hasDeliveryRef = useRef() as MutableRefObject<HTMLSelectElement>;
  const deliveryTimeRef = useRef() as MutableRefObject<HTMLInputElement>;
  const addressRef = useRef() as MutableRefObject<HTMLInputElement>;
  const openHoursRef = useRef() as MutableRefObject<HTMLInputElement>;
  const shortFoodDescriptionRef =
    useRef() as MutableRefObject<HTMLInputElement>;
  const descriptionRef = useRef() as MutableRefObject<HTMLInputElement>;
  const imageUrlRef = useRef() as MutableRefObject<HTMLInputElement>;
  const ratingRef = useRef() as MutableRefObject<HTMLInputElement>;

  const handleOnSubmit = async () => {
    const nameValue = nameRef.current.value;
    const hasDeliveryValue = hasDeliveryRef.current.value;
    const deliveryTimeValue = deliveryTimeRef.current.value;
    const addressValue = addressRef.current.value;
    const openHoursValue = openHoursRef.current.value;
    const shortFoodDescriptionValue = shortFoodDescriptionRef.current.value;
    const descriptionValue = descriptionRef.current.value;
    const imageUrlValue = imageUrlRef.current.value;
    const ratingValue = ratingRef.current.value;

    const formFieldsValues = [
      nameValue,
      hasDeliveryValue,
      deliveryTimeValue,
      addressValue,
      openHoursValue,
      shortFoodDescriptionValue,
      descriptionValue,
      imageUrlValue,
      ratingValue,
    ];

    const isFormInputValid = formFieldsValues.every(
      value => value !== null && value !== undefined && value != ""
    );

    if (parseInt(ratingValue) > 10 || parseInt(ratingValue) < 0) {
      return dispatch(
        showNotificationModal({
          message: "Invalid rating",
          type: NOTIFICATION_TYPES.ERROR,
        })
      );
    }
    
    if (!isFormInputValid) {
      return dispatch(
        showNotificationModal({
          message: "Missing some attributes",
          type: NOTIFICATION_TYPES.ERROR,
        })
      );
    }

    const restaurantDTO: RestaurantDTO = {
      name: nameValue,
      hasDelivery: hasDeliveryValue === "true" ? true : false,
      deliveryTime: deliveryTimeValue,
      address: addressValue,
      openHours: openHoursValue,
      shortFoodDescription: shortFoodDescriptionValue,
      description: descriptionValue,
      image: imageUrlValue,
      rating: ratingValue,
    };

    const response = await postNewRestaurant(restaurantDTO);

    if (response.status !== 200) {
      return dispatch(
        showNotificationModal({
          message: "Error! try again",
          type: NOTIFICATION_TYPES.ERROR,
        })
      );
    } else {
      dispatch(
        showNotificationModal({
          message: "Success",
          type: NOTIFICATION_TYPES.SUCCESS,
        })
      );

      return router.reload();
    }
  };

  return (
    <div className="px-6 py-5 border-2 border-gray-400 rounded-xl ">
      <h1 className="text-center text-gray-700 text-xl mb-6 font-semibold">
        Create new restaurant
      </h1>

      <div className="w-full flex flex-col gap-y-5">
        <input
          ref={nameRef}
          type="text"
          className="w-full border-2 border-gray-200 rounded-lg px-4 py-3"
          placeholder="Restaurant name"
        />

        <div>
          <label
            htmlFor="restaurantHasDeliveryOption"
            className="px-2 text-gray-400"
          >
            Delivarable
          </label>
          <select
            ref={hasDeliveryRef}
            className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 mt-2"
            name="Deliverabe"
            id="restaurantHasDeliveryOption"
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <input
          ref={deliveryTimeRef}
          type="text"
          placeholder="Delivery time, e.g 40-50 min"
          className="w-full border-2 border-gray-200 rounded-lg px-4 py-3"
        />

        <input
          ref={addressRef}
          type="text"
          placeholder="Address"
          className="w-full border-2 border-gray-200 rounded-lg px-4 py-3"
        />

        <input
          ref={openHoursRef}
          type="text"
          placeholder="Open hours, e.g 09:00 - 21:00"
          className="w-full border-2 border-gray-200 rounded-lg px-4 py-3"
        />

        <input
          ref={shortFoodDescriptionRef}
          type="text"
          placeholder="Short food description, e.g sushi, ramen"
          className="w-full border-2 border-gray-200 rounded-lg px-4 py-3"
        />

        <input
          ref={descriptionRef}
          type="text"
          placeholder="Restaurant description"
          className="w-full border-2 border-gray-200 rounded-lg px-4 py-3"
        />

        <input
          ref={imageUrlRef}
          type="text"
          placeholder="Image url"
          className="w-full border-2 border-gray-200 rounded-lg px-4 py-3"
        />

        <input
          ref={ratingRef}
          type="number"
          max="10"
          min="0"
          placeholder="Rating"
          className="w-full border-2 border-gray-200 rounded-lg px-4 py-3"
        />
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={handleOnSubmit}
          className="px-7 py-3 border-2 border-black hover:bg-black hover:text-white rounded-lg duration-200 transition-all"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default NewRestaurantCreator;
