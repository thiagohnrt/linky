interface RGBColor {
  r: number;
  g: number;
  b: number;
}

function calculateLuminance(color: RGBColor): number {
  const { r, g, b } = color;
  const a = [r, g, b].map(function (v) {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

export function generateColor(character: string): [string, string] {
  const alphabetColors: { [key: string]: RGBColor } = {
    a: { r: 255, g: 0, b: 0 }, // Vermelho
    b: { r: 0, g: 255, b: 0 }, // Verde
    c: { r: 0, g: 0, b: 255 }, // Azul
    d: { r: 255, g: 255, b: 0 }, // Amarelo
    e: { r: 255, g: 0, b: 255 }, // Magenta
    f: { r: 0, g: 255, b: 255 }, // Ciano
    g: { r: 128, g: 0, b: 0 }, // Marrom
    h: { r: 0, g: 128, b: 0 }, // Verde escuro
    i: { r: 0, g: 0, b: 128 }, // Azul escuro
    j: { r: 128, g: 128, b: 0 }, // Oliva
    k: { r: 128, g: 0, b: 128 }, // Roxo
    l: { r: 0, g: 128, b: 128 }, // Teal
    m: { r: 192, g: 192, b: 192 }, // Cinza claro
    n: { r: 128, g: 128, b: 128 }, // Cinza
    o: { r: 255, g: 215, b: 0 }, // Ouro
    p: { r: 255, g: 140, b: 0 }, // Laranja escuro
    q: { r: 255, g: 69, b: 0 }, // Vermelho escuro
    r: { r: 255, g: 20, b: 147 }, // Rosa
    s: { r: 255, g: 165, b: 0 }, // Laranja
    t: { r: 0, g: 255, b: 127 }, // Verde primavera
    u: { r: 0, g: 100, b: 0 }, // Verde escuro
    v: { r: 218, g: 112, b: 214 }, // Orquídea
    w: { r: 240, g: 230, b: 140 }, // Cádmio amarelo
    x: { r: 75, g: 0, b: 130 }, // Índigo
    y: { r: 255, g: 255, b: 240 }, // Marfim
    z: { r: 255, g: 182, b: 193 }, // Rosa claro
  };

  const color = alphabetColors[character.toLowerCase()];
  if (!color) return ["#000", "#FFF"];

  const luminance = calculateLuminance(color);
  const textColor = luminance > 0.5 ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)";
  const backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;

  return [backgroundColor, textColor];
}
