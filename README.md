# Calculo de Nómina

## Instrucciones 

Ingresa en el campo de texto, los datos de tu equipo en formato JSON y presiona el botón 'Calcular'. Si el formato es correcto y la estructura de los datos sigue la misma estructura que la del ejemplo, veras aparecer el computo del salario total de cada jugador basado en el porcentaje de cumplimiento de su cuota de goles en esta temporada.

Este calculo es el resultado de su salario base mas el bono variable, este bono se define en conjunto con el porcentaje de cumplimiento de la cuota del equipo.

Adicionalmente, en la consola del explorador podrás ver impresa la data computada en forma tabular y en formato JSON. 

## Ejemplo de Datos 

```
[  
   {  
      "nombre":"Juan Perez",
      "nivel":"C",
      "goles":10,
      "sueldo":50000,
      "bono":25000,
      "sueldo_completo":null,
      "equipo":"rojo"
   },
   {  
      "nombre":"EL Cuauh",
      "nivel":"Cuauh",
      "goles":30,
      "sueldo":100000,
      "bono":30000,
      "sueldo_completo":null,
      "equipo":"azul"
   },
   {  
      "nombre":"Cosme Fulanito",
      "nivel":"A",
      "goles":7,
      "sueldo":20000,
      "bono":10000,
      "sueldo_completo":null,
      "equipo":"azul"

   },
   {  
      "nombre":"El Rulo",
      "nivel":"B",
      "goles":9,
      "sueldo":30000,
      "bono":15000,
      "sueldo_completo":null,
      "equipo":"rojo"

   }
]
```
