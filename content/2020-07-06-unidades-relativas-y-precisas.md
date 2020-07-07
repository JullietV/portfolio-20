---
date: 2020-07-06
subject: Unidades de longitud en CSS
thumb: /posts/numbers.jpg
alt: Photo by Black ice from Pexels
extract: ¿Qué son unidades de longitud en CSS? ¿Cuáles son las más usadas? ¿En qué caso debo usar las unidades relativas y cuando debo emplear las absolutas? 🤔 Estas y otras dudas menos relevantes resueltas desde la voz de una personita que un día estuvo igual de perdida 😄.
tags:
  - CSS
  - units
  - unidades
---

Ayer, medio forzándome a empezar/continuar ciertos proyectos que tenía en mente hace un tiempo 😅, decidí iniciar con los challenges de [FrontendMentor](https://frontendmentor.io) y llevé a cabo el primero que, si quieres, puedes ver [aquí](https://article-preview-component-phi.vercel.app/) 👩‍💻.
Moviendome por la plataforma, me di cuenta de que algunas de las personas que publicaban soluciones no conocían demasiado las unidades relativas de CSS y por ende estaban llevando a cabo soluciones estáticas sin responsive, por lo que bueno, me ha llevado a escribirles este post bien bonito que espero les sea de ayuda.

## ¿Qué son las unidades de longitud en CSS?
> El tipo numérico con el que te vas a encontrar con mayor frecuencia es length, por ejemplo, 10px (píxeles) o 30em. En CSS se utilizan dos longitudes diferentes: relativa y absoluta. Es importante conocer la diferencia para entender qué dimensiones van a tener las cosas.
> [*MDN*](https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/Valores_y_unidades_CSS, 'La biblia del programador').

Así que, tal como nos indica *la biblia* 🤲 son als medidas con las que deberías estar estilizando elementos. Y además, hay dos tipos de medidas: relativas y absolutas.

### Unidades de longitud absolutas
Son aquellas que **determinan de forma específica, concreta y medible la longitud de los elementos**, sin que esta varíe dependiendo de algún otro factor.

<table>
<thead>
<tr>
<td>Unidad</td>
<td>Símbolo</td>
<td>Ejemplo</td>
</tr>
</thead>
<tbody>
<tr>
<td>Pulgada</td>
<td>in</td>
<td>div {width: 7in}</td>
</tr>
<tr>
<td>Centímetro</td>
<td>cm</td>
<td>div {width: 7cm}</td>
</tr>
<tr>
<td>Milímetro</td>
<td>mm</td>
<td>div {width: 7mm}</td>
</tr>
<tr>
<td>Pica</td>
<td>pc</td>
<td>div {width: 7pc}</td>
</tr>
<tr>
<td>Punto</td>
<td>pt</td>
<td>div {width: 7pt}</td>
</tr>
<tr>
<td>Píxel</td>
<td>px</td>
<td>div {width: 7px}</td>
</tr>
</tbody>
</table>

Las unidades de medida absoluta son más utilizadas para impresión que para la web y, **de todas ellas, la única que deberías utilizar es el Píxel**.

### Unidades de longitud relativa
Son aquellas que **varían dependiendo de otro factor (tamaño)**. Por ejemplo, si determinamos que nuestro elemento tendrá un width (ancho) de 50% le estamos indicando que debe ocupar la mitad del espacio que hereda de su elemento padre, que bien podría ser el alcho del dispositivo en el que visualizo el elemento, el ancho de la ventana del browser, el ancho del div que lo contenga, etc.

<table>
<thead>
<tr>
<td>Símbolo</td>
<td>Relativa a</td>
</tr>
</thead>
<tbody>
<tr>
<td>%</td>
<td>Tamaño del elemento padre</td>
</tr>
<tr>
<td>em</td>
<td>Tamaño de letra del elemento padre</td>
</tr>
<tr>
<td>ex</td>
<td>Altura x de la letra del elemento</td>
</tr>
<tr>
<td>ch</td>
<td>La medida de avance (ancho) del glifo "0" de la letra del elemento</td>
</tr>
<tr>
<td>rem</td>
<td>Tamaño de letra del elemento raís (html)</td>
</tr>
<tr>
<td>lh</td>
<td>Altura de la línea del elemento</td>
</tr>
<tr>
<td>vw</td>
<td>1% del ancho de la ventana gráfica</td>
</tr>
<tr>
<td>vh</td>
<td>1% del alto de la ventana gráfica</td>
</tr>
<tr>
<td>vmin</td>
<td>1% de la dimensión más pequeña de la ventana gráfica</td>
</tr>
<tr>
<td>vmax</td>
<td>1% de la dimensión más grande de la ventana gráfica</td>
</tr>
</tbody>
</table>

Al igual que con las unidades de longitud absolutas, es poco probable que utilices todas estas, `em` y `rem` son las que más frecuentemente conseguirás en un archivo CSS.

Entonces, ya que me has leído hasta acá, probablemente te estarás preguntando entonces *¿Cuándo debería usar una unidad o la otra?*  😅 y vale, que allí voy. 

### Cuándo utilizar unidades relativas

Las unidades relativas son aplicadas para lograr "adaptabilidad" al crear Responsive Design. Por ejemplo, supongamos que tienes un bonito sitio web con unas medidas bastante decentes de 1440x900(px) y se ve precioso, ¿a que si? Estás orgulloso, lo publicas y le envías el link a tu amigo Juan por WhatsApp ¿y qué te dice Juan? Que el sitio no se ve bien desde su celular. Claro, porque estuviste desarrollando en base a unidades absolutas.

![Responsive](/posts/responsive.gif)

¿Te pasó? que no cunda el pánico, porque te voy a compartir unos tutoriales muy buenos para iniciar en la práctica del Responsive Design.

- [How to think responsively: a responsive web design tutorial](https://www.freecodecamp.org/news/how-to-start-thinking-responsively/)
- [Sobre cómo usar px, em, rem y % en "Responsive Design"](https://abalozz.es/sobre-como-usar-px-em-rem-y-percent-en-responsive-design/)

### Cuándo utilizar unidades absolutas (Px)

Las unidades absolutas debes aplicarlas a elementos que no deseas que varíen sin importar las condiciones de los elementos a su alrededor, el navegador o incluso el usuario. Por ejemplo: Suponte que estás construyendo una `Card` a la cual le estás colocando una sombra, tu no quieres que el tamaño o la posición de la sombra de esa card varíe dependiendo de algún otro factor, quieres que la sombra sea la misma _bajo cualquier circunstancia_, en tu móvil, tu laptop con retina, la Pc de tu amigo Juan o el iPad de tu amiga Carla. ¡Allí! Allí aplicas las unidades de medida absoluta.

Espero que el post te haya resultado útil ✨.

Julls.