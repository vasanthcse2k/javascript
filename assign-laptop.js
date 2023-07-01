class Laptop{
    constructor(brand,model,price,company,companyDUNS){
        this.brand=brand;
        this.model=model;
        this.price=price;
        this.company=company;
        this.companyDUNS=companyDUNS;
    }
    applyDiscount(percent){
        var discountedPrice=this.price-(this.price*percent)/100;
        return discountedPrice;
    }
    
}
class BudgetLaptop extends Laptop{
       constructor(brand,model,price,company,companyDUNS,maxRAM,hardDiskCapacity){
        super(brand,model,price,company,companyDUNS);
        this.maxRAM=maxRAM;
        this.hardDiskCapacity=hardDiskCapacity;
       } 
       applyDiscount(percent){
        var discountedPrice=super.applyDiscount(percent);
        if(this.maxRAM > 16 ){
            percent -= 2500;
        }
        return discountedPrice;
       }
}
class PremiumLaptop extends Laptop{
    constructor(brand,model,price,company,companyDUNS,graphicsCard,hardDiskCapacity){
        super(brand,model,price,company,companyDUNS);
        this.graphicsCard=graphicsCard;
        this.hardDiskCapacity=hardDiskCapacity;
    }
    applyDiscount(percent){
        var discountedPrice=super.applyDiscount(percent);
        if(this.graphicsCard == `NVIDIA TITAN RTX ${Number}`){
            percent -= 2500;
        }
        return discountedPrice;
    }
}

let budgetLaptop= new BudgetLaptop("hp","ideapad s145",30000,"MOTOROLA","118167613",16,"1TB");
console.log(budgetLaptop.applyDiscount(10));