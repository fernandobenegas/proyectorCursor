import { NextRequest, NextResponse } from "next/server";
import { addContact } from "@/lib/contacts";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, phone, service, message } = body;

    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        {
          error: "Completá todos los campos del formulario.",
        },
        { status: 400 }
      );
    }

    const contact = await addContact({
      name,
      email,
      phone,
      service,
      message,
    });

    console.log("Nueva solicitud:", contact);

    return NextResponse.json({
      success: true,
      message: "¡Solicitud recibida! Te contactamos en menos de 24 horas.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "No se pudo procesar la solicitud.",
      },
      {
        status: 500,
      }
    );
  }
}