//operacion de multiplicar a x b
//usando sumas
//a=3 b=5
//res 3+3+3+3+3=15

class oper{
    private numero:number;
    private numerosumatorio:number=5;
    setNumero(a:number){
        this.numero=a;
    }
    
    getNumer():number{
        return this.numero;
    }
    calc():void{

        for(let i=0; i<5; ++i){
            console.log(`${this.numero} + ${this.numero} + ${this.numero} + ${this.numero} + ${this.numero} = ${this.numerosumatorio*this.numero}`);
        }

    }

}

let tab =new oper();
tab.setNumero(3)
console.log(tab.calc());