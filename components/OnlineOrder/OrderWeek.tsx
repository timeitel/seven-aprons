import styled from "styled-components";
import { useRef } from "react";

const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  white-space: normal;
  text-align: end;

  @media (min-width: 768px) {
    label {
      white-space: nowrap;
    }
  }
`;

export const OrderWeek = ({
  dishOne,
  dishTwo,
  orderByDate,
  deliveryDate,
  onOrderUpdate,
}) => {
  const dishOneRef = useRef(null);
  const dishTwoRef = useRef(null);

  const onUpdate = () => {
    onOrderUpdate({
      dishOneQuantity: dishOneRef.current.value,
      dishTwoQuantity: dishTwoRef.current.value,
    });
  };

  return (
    <>
      <h4 className="mb-4 text-right">
        Order by Monday, {orderByDate}, for Wednesday, {deliveryDate} delivery
      </h4>
      <FormGroup className="mb-4">
        <div className="flex flex-col items-end mr-4">
          <label className="text-md font-medium">{dishOne}</label>
          <label>$8.50 each</label>
        </div>
        <input
          ref={dishOneRef}
          name="dishOne"
          defaultValue={0}
          type="number"
          min="0"
          max="100"
          onChange={onUpdate}
        />
      </FormGroup>
      <FormGroup className="mb-4">
        <div className="flex flex-col items-end mr-4">
          <label className="text-md font-medium">{dishTwo}</label>
          <label>$8.50 each</label>
        </div>
        <input
          ref={dishTwoRef}
          name="dishOne"
          defaultValue={0}
          type="number"
          min="0"
          max="100"
          onChange={onUpdate}
        />
      </FormGroup>
      <hr className="border-gray-200 my-4 text-center text-2xl w-full ml-auto" />
    </>
  );
};
