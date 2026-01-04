import "server-only";

import type { CarProps, FilterProps } from "@/types";

function first(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export async function fetchCars(filters: FilterProps): Promise<CarProps[]> {
  const { manufacturer, year, model, limit, fuel } = filters;

  const apiKey = process.env.RAPIDAPI_KEY;
  const apiHost =
    process.env.RAPIDAPI_HOST ?? "cars-by-api-ninjas.p.rapidapi.com";

  if (!apiKey) {
    throw new Error(
      "Missing RAPIDAPI_KEY. Add it to `.env.local` (see `.env.example`)."
    );
  }

  const url = new URL(`https://${apiHost}/v1/cars`);
  const make = first(manufacturer)?.trim();
  const modelValue = first(model)?.trim();
  const fuelValue = first(fuel)?.trim();

  if (make) url.searchParams.set("make", make);
  if (modelValue) url.searchParams.set("model", modelValue);
  if (fuelValue) url.searchParams.set("fuel_type", fuelValue);
  if (year) url.searchParams.set("year", String(year));
  if (limit) url.searchParams.set("limit", String(limit));

  const response = await fetch(url.toString(), {
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": apiHost,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(
      `Cars API request failed (${response.status}): ${
        text || response.statusText
      }`
    );
  }

  const result = (await response.json()) as unknown;
  return Array.isArray(result) ? (result as CarProps[]) : [];
}

