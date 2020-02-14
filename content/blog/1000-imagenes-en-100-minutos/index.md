---
title: 1000 imagenes en 100 minutos.
date: "2020-02-14T22:40:32.169Z"
description: 
tags: ["experiencias"]
category: "tecnologia"
---

> "Una máquina puede hacer el trabajo de cincuenta hombres ordinarios. Ninguna máquina puede hacer el trabajo de un hombre extraordinario." - Elbert Hubbard, Escritor.

Me parece fascinante como 17 líneas de código, pueden ahorrar potencialmente, una semana de trabajo de una persona.

Estas semana, he tenido el privilegio de ayudar a un cliente a cargar sus productos en una tienda virtual de Woocommerce.

Sin embargo, había un problema en nuestro Excel de carga: no teníamos imagenes.

## ¿Cómo sacas 1000 imagenes de productos?

Puedes hacerlo a mano, buscando cada imagen de producto en Google Images o la página de tu proveedor, copiando y pegando el link al Excel de carga de productos 1000 veces, invirtiendo horas de tu preciosa vida en un trabajo tan repetitivo... y aburrido.

_O puedes usar el poder de la programación._

Para ello, pensando un poco en el caso del cliente cree un código bastante similar al siguiente para comprimir esas horas de trabajo.

```
# Conjunto de identificadores de productos.
skus=( 3682802 4461395 4461397 "y 1000 SKUs más para el Array..."  
)

```

```
# URL de página de producto del proveedor
imageURL='https://proveedor.com/producto'
```

```
getImage () {
 # Muestra el HTML de la página de producto del proveedor en la terminal
 cat data | \ 
 # Extrae el HTML donde está el link a la imagen que quiero
 grep -oP "<a href='https://.+?\.jpg.+?' id='aProductImage'>" | \
 # Extrae la imagen
 grep -oP 'https://.+?\.jpg.+?'	
}
```

```
# Por cada SKU harás esto...
for i in "${skus[@]}"
do
   echo "$imageURL$i"
   # Descarga el HTML de la página de producto
   curl "$imageURL$i" --output data
   # Obten la imagen de esa página de producto 
   getImage
   # Imprime lo que solicito en un archivo CSV
   printf "%d , %s , %s \n" $i "$(getImage)" "$(echo "$image$i")"   >> images.csv
done

```
## Mi mensaje (basado en hechos reales).

¿Y a qué viene esto? 

Simplemente recordar como la programación, automatización, el conversar con el computador para hacer que siga las instrucciones precisas hace que la calidad de horas de trabajo en una organización se eleven, se llene de creatividad, desafío, demanda de talento nuestra jornada.

La ausencia de ella nos lleva a mal invertir tiempo en actividades aburridas poco producentes.

Una de mis principios fundamentales es:

> "Todo lo que sea aburrido y repetitivo puede y debe ser automatizado." Daniel Páez.

## Observaciones técnicas.

1000 imagenes en 100 minutos son 10 imagenes cada minuto, un rendimiento siendo honesto bastante ineficiente comparado con lo que podría llegar a ser.

Soy muy consciente de ello. 

Me comprometo a estudiar, practicar y mejorar este tipo de código Bash para hacerlos más eficientes.

## Mi llamado a la acción

Piensa en algo aburrido y repetitivo que habrás hecho esta semana en tu vida personal o profesional y que conversemos para ver como podríamos automatizarlo, optimizarlo, replantearlo.