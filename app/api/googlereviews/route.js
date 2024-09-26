import { NextResponse } from "next/server";

export async function GET(request) {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID}&fields=name,reviews&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    return NextResponse.json(data.result.reviews, { status: 200 });
    // response.status(200).json(data.result.reviews);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch data", error: error.message },
      { status: 500 }
    );
  }
}
