"use server"

export async function sendMessage(formData: { name: string; phone: string; project: string }) {
  try {
    const message = `(TVR_WEB) - LandingPage\nNovo lead\nNome: ${formData.name}\nCelular: ${formData.phone}\nProjeto: ${formData.project}`

    const response = await fetch(`${process.env.API_URL}/send_message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": process.env.API_KEY || "",
      },
      body: JSON.stringify({
        chat_id: process.env.CHAT_ID,
        text: message,
      }),
    })

    if (!response.ok) {
      return { success: false, message: "Erro ao enviar mensagem. Tente novamente." }
    }

    return { success: true, message: "Mensagem enviada com sucesso! Entraremos em contato em breve." }
  } catch (error) {
    console.error("Error sending message:", error)
    return { success: false, message: "Erro ao enviar mensagem. Tente novamente." }
  }
}
