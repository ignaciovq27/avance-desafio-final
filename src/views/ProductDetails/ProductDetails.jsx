// css
import "../ProductDetails/ProductDetails.css"

//components
import AppTitle from "../../components/AppTitle/AppTitle";
import AppProductDetails from "../../components/AppProductDetails/AppProductDetails";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ContextProduct } from '../../context/ProductContext';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const { products } = useContext(ContextProduct);
  const navigate = useNavigate();

  // const params = useParams()
  // const navigate = useNavigate();

  // const getProductById = (id) => products.find((product) => product.id === parseInt(id))
  // // const product = getProductById(params.id) //NO

  // const product = products.find((product) => product.id === parseInt(params.id));
  // console.log(product)

  // if (!product) {
  //   navigate('/gallery-boardgames')
  //   return null
  // }


  // useEffect(() => {

  //   if (!product) {
  //     navigate('/gallery-boardgames')
  //     return null
  //   }
  // }, [params])


  // ------------------------------------
  const params = useParams()
  const [product, setProduct] = useState(null);
  const [isPageLoaded, setIsPageLoaded] = useState(false);


  useEffect(() => {
    const getProductById = (id) =>
      products.find((product) => product.id === parseInt(id));
    const foundProduct = getProductById(params.id);
    setProduct(foundProduct);
    setIsPageLoaded(true);
  }, [products, params]);

  useEffect(() => {
    if (isPageLoaded && product === null) {
      navigate("/gallery-boardgames");
    }
  }, [isPageLoaded, product, navigate]);

  console.log(product);

  return (
    <div className="productDetails-container">

      <AppTitle title="PRODUCT DETAILS" />
      {product && (
        <AppProductDetails
          key={product.id}
          productId={product.id}
          productUser={product.user}
          productTitle={product.title}
          productCategory={product.category}
          productPrice={product.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
          productImg={product.img}
          productDescription={product.description}
          productQuantity={product.quantity.toString()}
        />
      )}
    </div>
  );
}
