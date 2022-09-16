//Exportar e Importar
import { calcularIVA, Producto} from "./05-desesct-funciones"

const carrito:Producto[]=[ 
    {
        desc:'Telofono1',
        precio:1270
    },
    {
        desc:'Telefono2',
        precio:1270
    }
];

const [total,iva]=calcularIVA(carrito);
console.log('Total: ',total);
console.log('Total + IVA: ',iva);