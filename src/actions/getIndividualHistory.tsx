"use server";

import { API_DEV_BACK } from "@/config";
import moment from "moment";

moment.locale("es"); // default the locale to English
var localLocale = moment();
localLocale.locale("es"); // set this instance to use French
moment.locale("es"); // change the global locale to Spanish

type individualHistoryProps = {
  productID: string;
  token: string;
  time: string;
};

export async function getIndividualHistory({
  productID,
  token,
  time,
}: individualHistoryProps) {
  const res = await getProductData({ productID, token, time });
  if (res.error) {
    return res;
  } else {
    // slice de 30 o 7 items

    const timeStart = new Date(time.split("/")[1]);
    const timeEnd = new Date(time.split("/")[0]);

    const rangeDate = timeStart.getMonth() - timeEnd.getMonth();

    if (rangeDate > 0) {
      res.data.history = res.data.history.slice(-30);
    } else {
      res.data.history = res.data.history.slice(-8);
    }

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

    return {
      error: null,
      data: {
        sales: dataToGraphicSales,
        billing: dataToGraphicBilling,
        stock: dataToGraphicStock,
      },
    };
  }
}

const getProductData = async ({
  productID,
  token,
  time,
}: individualHistoryProps) => {
  // console.log(time);

  const config = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const res = await fetch(`${API_DEV_BACK}/products/${productID}`, config); // ?dateRange=${time}
    if (res.ok && res.status === 200) {
      const response = await res.json();
      return { data: response, error: null };
    } else {
      const response = await res.json();
      return { data: null, error: response.error };
    }
  } catch (error: any) {
    return { data: null, error: error.message };
  }
};
