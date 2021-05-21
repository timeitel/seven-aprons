import { buffer } from "micro";
import Stripe from "stripe";
import { NextApiRequest, NextApiResponse } from "next";
import { updateOrderingSystem } from "./accounting";
const webhookSecret = "whsec_hxWtHk1vpdhknr5c56c8Y1ni7W9d8c9u";
const stripe = new Stripe(webhookSecret, null);

export const config = {
  api: {
    bodyParser: false,
  },
};

/**
 *
 * @param {!express:Request} req HTTP req context.
 * @param {!express:Response} res HTTP res context.
 */
export default async function webhook(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const buf = await buffer(req);
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
    } catch (err) {
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    const pi = event?.data?.object?.payment_intent;
    if (pi) {
      await updateOrderingSystem(pi);
    }

    res.status(204).send("Ok");
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}