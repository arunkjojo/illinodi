import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import { PayPalScriptOptions } from "@paypal/paypal-js/types/script-options";
import { PayPalButtonsComponentProps } from "@paypal/paypal-js/types/components/buttons";

const paypalScriptOptions: PayPalScriptOptions = {
  "client-id":
    "AaUpVv8WDVM5uezwsQo79K6YBKmqm3EeLSOx5TFTX4RM2_ephwW68aJ4_ASXYPjbI8OyuXchwgkQ7bRl",
  currency: "INR"
};
function PayPalButton() {
  /**
   * usePayPalScriptReducer use within PayPalScriptProvider
   * isPending: not finished loading(default state)
   * isResolved: successfully loaded
   * isRejected: failed to load
   */
  const [{ isPending }] = usePayPalScriptReducer();
  const paypalButtonTransactionProps: PayPalButtonsComponentProps = {
      style: { layout: "vertical" },
      createOrder(data, actions) {
      return actions.order.create({
          purchase_units: [
          {
              amount: {
              value: "10.00"
              }
          }
          ]
      });
      },
      onApprove(data, actions) {
      /**
       * data: {
       *   orderID: string;
       *   payerID: string;
       *   paymentID: string | null;
       *   billingToken: string | null;
       *   facilitatorAccesstoken: string;
       * }
       */
      return actions.order.capture({}).then((details) => {
          alert("Data details: " + JSON.stringify(data, null, 2));
      });
      }
  };
  return (
      <>
      {isPending ? <h2>Load Smart Payment Button...</h2> : null}
      <PayPalButtons {...paypalButtonTransactionProps} />
      </>
  );
}
export default function Payment() {
  return (
    <PayPalScriptProvider options={paypalScriptOptions}>
      <PayPalButton />
    </PayPalScriptProvider>
  );
}
