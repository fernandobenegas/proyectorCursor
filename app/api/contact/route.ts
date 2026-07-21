import { NextRequest, NextResponse } from "next/server";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdaqzqpb";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, phone, service, message } = body;

    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: "Completá todos los campos del formulario." },
        { status: 400 }
      );
    }

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        service,
        message,
      }),
    });

    if (!response.ok) {
      const error = await response.text();

      console.error("Formspree:", error);

      return NextResponse.json(
        {
          error: "No se pudo enviar el formulario.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message: "¡Solicitud enviada correctamente! Te responderemos a la brevedad.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Ocurrió un error inesperado.",
      },
      {
        status: 500,
      }
    );
  }
}