"use server";

import { API_DEV_BACK } from "@/config";
import axios from "axios";

type Props = {
  image: string;
  token: string;
};

const base64ToFile = (base64: string, filename: string): File => {
  const arr = base64.split(",");
  const mime = arr[0].match(/:(.*?);/)?.[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
};

export const getProductsByImage = async ({ image, token }: Props) => {
  try {
    const formData = new FormData();
    const parsedImage = base64ToFile(image, "image.png");
    formData.append("file", parsedImage);

    const res = await axios
      .post(`${API_DEV_BACK}/xray`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response);

    if (res.data) {
      return {
        data: res.data,
        error: null,
      };
    }
  } catch (error: any) {
    return {
      data: null,
      error: error?.response?.data?.message ?? "Ocurrio un error inesperado.",
    };
  }
};
