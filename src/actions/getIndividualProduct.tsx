"use server";

import { API_DEV_BACK } from "@/config";
import moment from "moment";

moment.locale("es");
const localLocale = moment();
localLocale.locale("es");
moment.locale("es");

type IndividualProductProps = {
  productID: string;
  token: string;
  dates: string;
  countryCode?: string;
  platform?: string;
};

export async function getIndividualProduct({
  productID,
  platform,
  countryCode,
  token,
  dates,
}: IndividualProductProps) {
  const res = await getProductData({
    productID,
    platform,
    countryCode,
    token,
    dates,
  });
  if (res.error) {
    return { ...res, graphic: null };
  } else {
    res.data.history.sort((a: any, b: any) => {
      const firstDate = new Date(a.date);
      const secondDate = new Date(b.date);
      return firstDate.getTime() - secondDate.getTime();
    });

    const dataToGraphicSales = {
      labels: [],
      datasets: [
        {
          label: "",
          data: [],
          fill: true,
          cubicInterpolationMode: "monotone",
          tension: 0.1,
          backgroundColor: ["rgba(33, 85, 255, 0.05)"],
          borderColor: ["rgba(33, 85, 255, 0.8)"],
          borderWidth: 2,
        },
      ],
    };

    dataToGraphicSales.labels = res.data.history.map((item: any) =>
      moment(item.date).format("DD MMM")
    );
    dataToGraphicSales.datasets[0].data = res.data.history.map(
      (item: any) => item.soldUnits
    );
    dataToGraphicSales.datasets[0].label = "Ventas";

    const dataToGraphicBilling = {
      labels: [],
      datasets: [
        {
          label: "",
          data: [],
          fill: true,
          cubicInterpolationMode: "monotone",
          tension: 0.1,
          backgroundColor: ["rgba(33, 85, 255, 0.05)"],
          borderColor: ["rgba(33, 85, 255, 0.8)"],
          borderWidth: 2,
        },
      ],
    };

    dataToGraphicBilling.labels = res.data.history.map((item: any) =>
      moment(item.date).format("DD MMM")
    );
    dataToGraphicBilling.datasets[0].data = res.data.history.map(
      (item: any) => item.salesAmount
    );
    dataToGraphicBilling.datasets[0].label = "Facturación";

    const dataToGraphicStock = {
      labels: [],
      datasets: [
        {
          label: "",
          data: [],
          fill: true,
          cubicInterpolationMode: "monotone",
          tension: 0.1,
          backgroundColor: ["rgba(33, 85, 255, 0.05)"],
          borderColor: ["rgba(33, 85, 255, 0.8)"],
          borderWidth: 2,
        },
      ],
    };

    dataToGraphicStock.labels = res.data.history.map((item: any) =>
      moment(item.date).format("DD MMM")
    );
    dataToGraphicStock.datasets[0].data = res.data.history.map(
      (item: any) => item.stock
    );
    dataToGraphicStock.datasets[0].label = "Stock";

    /* TABLE DATA */
    const tempHistoryData = [...res.data.history.reverse()];
    const tempdata = res.data;
    const tempHistory = tempHistoryData.map((ele: any, idx: number) => {
      const basePrice = ele.salePrice;
      const sales = ele.soldUnits;

      const itemData = {
        date: ele.date,
        salePrice: parseFloat(`${basePrice}`).toLocaleString("es-CO"),
        salesAmount: parseFloat(`${ele.salesAmount}`).toLocaleString("es-CO"),
        soldUnits: parseInt(`${sales}`).toLocaleString("es-CO"),
        stock: parseInt(`${ele.stock}`).toLocaleString("es-CO"),
      };

      return itemData;
    });

    tempdata.history = tempHistory;

    return {
      data: tempdata,
      error: null,
      graphic: {
        sales: dataToGraphicSales,
        billing: dataToGraphicBilling,
        stock: dataToGraphicStock,
      },
    };
  }
}

const getProductData = async ({
  productID,
  platform,
  countryCode,
  token,
  dates,
}: IndividualProductProps) => {
  const config = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const hasDates = dates ? `?dateRange=${dates}` : "";
    const res = await fetch(
      `${API_DEV_BACK}/products/${platform}/${countryCode}/${productID}${hasDates}`,
      config
    );
    if (res.ok && res.status === 200) {
      const response = await res.json();
      if (response.isFollowed) {
        return { data: response, error: null };
      } else {
        return { data: null, error: "El producto no es seguido" };
      }
    } else {
      const response = await res.json();
      return { data: null, error: response.error };
    }
  } catch (error: any) {
    return { data: null, error: error.message };
  }
};
