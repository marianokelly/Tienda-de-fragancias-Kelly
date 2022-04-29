
const data = [
    {
      id: 1,
      image:
        "https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw72dfb616/original/90_R721008-R050MLS_RNUL_20_DylanBluePourHomme50ml-Fragrances-versace-online-store_3_7.jpg?sw=748&sh=1050&sm=fit",
      title: "Versace Dylan Blue",
      price: "13500",
      stock: "4",
    },
    {
      id: 2,
      image: "https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw64737ed7/original/90_R720010-R100MLS_RNUL_20_PourHomme100ml-Fragrances-versace-online-store_3_11.jpg?sw=850&sh=1200&sm=fit",
      title: "Versace Pour Homme",
      price: "12000",
      stock: "4",
    },
    {
      id: 3,
      image:
        "https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwc601ec28/original/90_R740110-R100MLS_RNUL_20_ErosEaudeParfum100ml-Fragrances-versace-online-store_0_2.jpg?sw=748&sh=1050&sm=fit",
      title: "Versace Eros EDP",
      price: "14900",
      stock: "5",
    },
    {
      id: 4,
      image:
        "https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw98da4df1/original/90_R500010-R100MLS_RNUL_20_EauFrache100ml-Fragrances-versace-online-store_2_12.jpg?sw=850&sh=1200&sm=fit",
      title: "Versace EAU Fraiche",
      price: "11200",
      stock: "3",
    },
   
];

const getData = new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
  export default getData;