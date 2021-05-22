import { getISOWeek } from "date-fns";
import { Storage } from "@google-cloud/storage";
const storage = new Storage();
const bucketName = "seven_aprons_sessions";
const bucket = storage.bucket(bucketName);
const currentWeek = getISOWeek(new Date());
const folder = `${process.env.NODE_ENV}/week_${currentWeek}`;

export const updateAccounting = (paymentIntent: string) => {
  console.log("test");
};
