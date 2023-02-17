let salariobasicomensual=pedirdatodelusuario(" digite el salario mensual:");
let numerodehorasextras=pedirdatosdelusuario("digite las horas extras de  trabajo")
let tipohorasextras=pedirdatosdelusuario ("digite el tipo (numero opcion ) de horas extra que ejercio ? \n1 diurna \n2 nocturna \n3 festivas \n4 dominicales \n5")


let  salariobruto=parseInt(calcularsalariosindescuento)
let solarioextra=parseInt(calcularhorasextras)
let descuentocuatroporciento=parseInt(calcularsaliosindescuento)


let texfinal=" el saliro basico "+ salariobruto
texfinal+="\n las horas extras son "+salarioextra
texfinal+="\n el descuento de salud es del 4%"+descuentocuatroporciento
texfinal+="\n el descuento de posesion es del 4%"+descuentocuatroporciento
texfinal+="\n\n elsalario total es:"+(salariobruto+salarioextra-(descuentocuatroporciento*2))