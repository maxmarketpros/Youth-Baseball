export async function submitNetlifyForm(form: HTMLFormElement) {
  const formData = new FormData(form)
  const encoded = new URLSearchParams()

  formData.forEach((value, key) => {
    if (value instanceof File) {
      return
    }

    encoded.append(key, value.toString())
  })

  const response = await fetch("/__forms.html", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: encoded.toString(),
  })

  if (!response.ok) {
    throw new Error("Failed to submit Netlify form")
  }
}
