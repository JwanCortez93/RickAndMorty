export function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email) return "Este campo es obligatorio";
  if (!emailRegex.test(email)) return "Ingresa un email válido";
  if (email.length > 35)
    return "Este campo no puede tener más de 35 caracteres";
  return "";
}

export function validatePassword(password) {
  const passwordNumberRegex = /\d/;
  const passwordLengthRegex = /^.{6,10}$/;
  if (!password) return "Este campo es obligatorio";
  if (!passwordNumberRegex.test(password))
    return "La contraseña debe contener al menos un número";
  if (!passwordLengthRegex.test(password))
    return "La contraseña debe tener entre 6 y 10 caracteres";
  return "";
}
