
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
    {
      id: 5,
      image:
        "https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dweb797b55/original/90_R711432-R100MLS_RNUL_20_AtelierVersaceJasminauSoleil-Fragrances-versace-online-store_2_4.jpg?sw=748&sh=1050&sm=fit",
      title: "Atelier Versace Jasmin au Soleil",
      price: "17200",
      stock: "8",
    },
    {
      id: 6,
      image:
        "https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw38ebf3e5/original/90_R711232-R100MLS_RNUL_20_AtelierVersaceFigueBlanche-Fragrances-versace-online-store_3_4.jpg?sw=748&sh=1050&sm=fit",
      title: "Atelier Versace Figue Blanche",
      price: "16700",
      stock: "3",
    },
    {
      id: 7,
      image:
        "https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dweb797b55/original/90_R711432-R100MLS_RNUL_20_AtelierVersaceJasminauSoleil-Fragrances-versace-online-store_2_4.jpg?sw=748&sh=1050&sm=fit",
      title: "Atelier Versace Éclat de Rose",
      price: "14800",
      stock: "3",
    },
    {
      id: 8,
      image:
        "https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw46727686/original/90_R711632-R100MLS_RNUL_20_AtelierVersaceVanilleRouge-Fragrances-versace-online-store_3_4.jpg?sw=748&sh=1050&sm=fit",
      title: "Atelier Versace Vanille Rouge",
      price: "15500",
      stock: "3",
    },
   
];

const getData = new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
  export default getData;