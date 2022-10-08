import { NOTIFICATION_TYPES } from "common/types/notification.enum";
import { IPaymentMethod } from "common/types/paymentMethod.type";
import CloseSolid from "components/UI/Icons/CloseSolid";
import { useRouter } from "next/router";
import { deletePaymentMethodById } from "proxy/fetches/fetchPaymentMethod";
import React from "react";
import { showNotificationModal } from "store/slices/notificationModalSlice";
import { useAppDispatch } from "store/store";

interface AdminPaymentMehodsListExcerptProps {
  data: IPaymentMethod;
}

const AdminPaymentMehodsListExcerpt = ({
  data,
}: AdminPaymentMehodsListExcerptProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleOnDelete = async () => {
    const isConfirmed = confirm(
      `Do you want to delete ${data.name} with id ${data.id}`
    );

    if (!isConfirmed) return;

    const response = await deletePaymentMethodById(data.id);
    if (response.status === 200) {
      router.reload();
    } else {
      const errorMessage: string = response.data?.message || "Error!";
      return dispatch(
        showNotificationModal({
          message: errorMessage,
          type: NOTIFICATION_TYPES.ERROR,
        })
      );
    }
  };
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex items-center gap-x-3">
        <p className="font-semibold">{data.name}</p>
        <p>id: {data.id}</p>
      </div>
      <div>
        <CloseSolid
          onClick={handleOnDelete}
          className="w-5 h-5 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default AdminPaymentMehodsListExcerpt;
