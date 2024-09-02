import { NextResponse } from "next/server";
import { waitUntil } from "@vercel/functions";

export async function GET(request: Request) {
  const response = NextResponse.json({ message: "Request processed" });

  // wait for 5s before sending a console.log
  waitUntil(
    new Promise((resolve) => setTimeout(resolve, 5000))
      .then(() => {
        console.log("entering waitUntil");
      })
      .catch((error) => {
        console.error("error in waitUntil", error);
      })
  );

  return response;
}
