import pinataSDK from "@pinata/sdk";
import * as dotenv from "dotenv";

dotenv.config();

const removePins = false;
const pinata = pinataSDK(
  process.env.PINATA_API_KEY!,
  process.env.PINATA_API_SECRET!
);
const startDate = new Date("01 January 2022 08:00 UTC");
const endData = new Date("01 March 2022 08:00 UTC");
const filters = {
  pinStart: startDate.toISOString(),
  pinEnd: endData.toISOString(),
  pageLimit: 10,
  pageOffset: 0,
};

console.log("Grabbing pins.");

pinata
  .pinList(filters)
  .then((result) => {
    if (removePins) {
      result.rows.forEach((pin) => {
        const hash = pin.ipfs_pin_hash;
        console.log(`Removing pin: ${hash}`);
        pinata.unpin(pin.ipfs_pin_hash);
      });
    }
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
