interface Direccion{
    calle:string;
    pais:string;
    estado:string;
}

interface DatosAlumno{
    nombre:string;
    edad:number;
    direccion:Direccion;
}

const AlumnoUTL:DatosAlumno={
    nombre:'Mario',
    edad:23,
    direccion:{
        calle:'veracruz',
        pais:'MX',
        estado:'GTO'
    },
    mostrarDireccion[]{
        return.this.nombre+' , '+this.direccion.pais
    }

}