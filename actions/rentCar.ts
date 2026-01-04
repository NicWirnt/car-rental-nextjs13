"use server";

export type RentCarState = {
  ok: boolean;
  message: string;
};

export async function rentCar(
  _prevState: RentCarState,
  formData: FormData
): Promise<RentCarState> {
  const date = String(formData.get("date") ?? "").trim();
  const make = String(formData.get("make") ?? "").trim();
  const model = String(formData.get("model") ?? "").trim();
  const year = String(formData.get("year") ?? "").trim();

  if (!date) return { ok: false, message: "Please select a rental date." };

  const carLabel = [make, model, year && `(${year})`].filter(Boolean).join(" ");
  return {
    ok: true,
    message: `Rent request received for ${carLabel} on ${date}.`,
  };
}

