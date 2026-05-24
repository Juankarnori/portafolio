'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export type ContactState = {
  ok: boolean
  message: string
} | null

export async function sendContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const nombre = (formData.get('nombre') as string)?.trim()
  const email = (formData.get('email') as string)?.trim()
  const descripcion = (formData.get('descripcion') as string)?.trim()

  if (!nombre || !email || !descripcion) {
    return { ok: false, message: 'Completá todos los campos.' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { ok: false, message: 'El email no es válido.' }
  }

  try {
    await resend.emails.send({
      from: 'Portafolio <onboarding@resend.dev>',
      to: 'juanknoriega070@gmail.com',
      replyTo: email,
      subject: `Nuevo contacto de ${nombre}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:32px;background:#09090f;color:#f1f5f9;border-radius:16px;">
          <h2 style="color:#a78bfa;margin-top:0;">Nuevo mensaje desde tu portafolio</h2>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color:#a78bfa;">${email}</a></p>
          <hr style="border-color:#1f1f2e;margin:20px 0;" />
          <p><strong>Descripción del proyecto:</strong></p>
          <p style="background:#111118;padding:16px;border-radius:8px;border-left:3px solid #7c3aed;">${descripcion.replace(/\n/g, '<br/>')}</p>
        </div>
      `,
    })

    return { ok: true, message: '¡Mensaje enviado! Te respondo en menos de 24 horas.' }
  } catch {
    return { ok: false, message: 'Error al enviar. Escribime directamente por WhatsApp.' }
  }
}
