import { NextResponse } from "next/server";
import { waitUntil } from "@vercel/functions";

export async function GET(request: Request) {
  const response = NextResponse.json({ message: "Request processed" });

  waitUntil(
    (async () => {
      console.log("entering waitUntil");
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.info("Sent info e-mail.");
      } catch (error) {
        console.error("Failed to send info e-mail.", error);
      }
    })()
  );

  return response;
}
