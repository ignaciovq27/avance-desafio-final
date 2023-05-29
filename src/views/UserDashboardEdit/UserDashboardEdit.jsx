import "../UserDashboardEdit/UserDashboardEdit.css";
import { useContext } from "react";
import { ContextUser } from "../../context/UserContext";
import { ContextProduct } from "../../context/ProductContext";
import { useParams } from "react-router-dom";

import AppTitle from "../../components/AppTitle/AppTitle";
import AppUserDashboardEdit from "../../components/AppUserDashboardEdit/AppUserDashboardEdit";

export default function UserDashboardEdit() {
  const { products, } = useContext(ContextProduct);
  const { user } = useContext(ContextUser);
  const params = useParams()

  const productFound = products.filter((product) => product.user === user.name).length === 0;
  console.log(params.id)

  //   return (
  //     <div className="userDashboardEdit-container" id="userDashboardEdit">
  //       <AppTitle
  //         title={
  //           productFound ? (
  //             <span>USER DASHBOARD CREATE</span>
  //           ) : (
  //             products.filter((product) => product.user === user.name)
  //               .map((product) =>
  //                 product.id === parseInt(params.id) ? (
  //                   <span key={product.id}>USER DASHBOARD EDIT - PRODUCT: {product.id}</span>
  //                 ) : (
  //                   <span key="new">USER DASHBOARD CREATE</span>
  //                 )
  //               )
  //           )
  //         }
  //       />
  //       <AppUserDashboardEdit dashboardTitle="✧ CREAR PUBLICACIÓN ✧" />
  //     </div>
  //   );
  // }


  return (
    <div className="userDashboardEdit-container" id="userDashboardEdit">
      {productFound ? (
        [
          <AppTitle key="new" title="USER DASHBOARD CREATE" />,
          <AppUserDashboardEdit
            key="newTitle"
            dashboardTitle="✧ CREAR PUBLICACIÓN ✧"
            dashboardSubtitle="REGISTRA LOS DATOS DE LA PUBLICACIÓN: "
          />
        ]
      ) : (
        products.filter((product) => product.user === user.name)
          .map((product) =>
            product.id === parseInt(params.id)
              ? [
                <AppTitle key={product.id} title={`USER DASHBOARD EDIT - PRODUCT: ${product.id}`} />,
                <AppUserDashboardEdit
                  key={`editTitle-${product.id}`}
                  dashboardTitle="✧ EDITAR PUBLICACIÓN ✧"
                  dashboardSubtitle="ACTUALIZA LOS DATOS DE LA PUBLICACIÓN: "
                />
              ] : [
                <AppTitle key={`createTitle-${product.id}`} title="USER DASHBOARD CREATE" />,
                <AppUserDashboardEdit
                  key={`create-${product.id}`}
                  dashboardTitle="✧ CREAR PUBLICACIÓN ✧"
                  dashboardSubtitle="REGISTRA LOS DATOS DE LA PUBLICACIÓN: "
                />
              ]
          )
      )}
    </div>
  );
}