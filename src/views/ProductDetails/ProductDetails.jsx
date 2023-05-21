// css
import "../ProductDetails/ProductDetails.css"

//components
import AppTitle from "../../components/AppTitle/AppTitle";
import AppProductDetails from "../../components/AppProductDetails/AppProductDetails";

export default function ProductDetails() {

  return (
    <div className="productDetails-container" id="productDetails">
      <AppTitle title="PRODUCT DETAILS" />
      <AppProductDetails />
    </div>
  );
}
