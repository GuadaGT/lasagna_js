export const MINUTOS_ESPERADOS_EN_EL_HORNO = 40;

export function minutosRestantesEnElHorno(minutosRealesEnElHorno) 
{
  return MINUTOS_ESPERADOS_EN_EL_HORNO - minutosRealesEnElHorno;
}

export function minutosDePreparacion(numeroDeCapas) 
{
  return numeroDeCapas * 2;
}

export function minutosTotalesDeTrabajo(numeroDeCapas, minutosRealesEnElHorno) {
  const minutosDePreparacion = minutosDePreparacion(numeroDeCapas);
  return minutosDePreparacion + minutosRealesEnElHorno;
}