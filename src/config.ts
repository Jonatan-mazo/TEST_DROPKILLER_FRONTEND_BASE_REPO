let API_DEV_BACK = "";
let API_DEV_FRONT = "";

if (process.env.NODE_ENV === "development") {
  API_DEV_BACK = process.env.API_BACK as string;
  API_DEV_FRONT = "http://localhost:3005";
} else {
  API_DEV_BACK = process.env.API_BACK as string;
  API_DEV_FRONT = "http://localhost:3005";
}

export const API_BACK = API_DEV_BACK;
export const API_FRONT = API_DEV_FRONT;
