class fan{
    constructor(modelNumber=2112, wings=3,  type= "ceiling fan", minCost=3000, blades="steel", voltage="240v"){
        this.minCost=minCost;
        this.type=type;
        this.blades=blades;
        this.modelNumber=modelNumber;
        this.wings=wings;
        this.voltage=voltage;
    }
    estimation(){
        this.minCost=(this.wings*200 + 2400);
        return this.minCost;
    }   
}
class tableFan extends fan{
    estimation(){
        this.minCost=(this.wings*150 + 1050);
        return this.minCost;
        console.log("Cost of TableFan : "+this.minCost);
    }
}

class ceilingFan extends fan{
    estimation(){
        this.minCost=(this.wings*200 +2400);
        return this.minCost;
        console.log("Cost of CeilingFan : " + this.minCost);
    };
}
var _ceilingFan=new ceilingFan(2112, 4, "", 3300, "fibre")
console.log(_ceilingFan)

var _fan = new tableFan();
console.log(_fan.estimation());