let philip = {
    fullName: "Phillip Smith",
    bills: [101, 150, 49, 20],
    calcTips: function(){
        this.tips = [];
        this.totalBills = [];
        const billsArr = this.bills;
        let tipsPercentage ;
        for(let i = 0; i < billsArr.length; i++){
            if(billsArr[i] < 50){
                tipsPercentage = 0.1;
            }else if(billsArr[i] >= 50 && billsArr[i] < 100){
                tipsPercentage = 0.15;
            }else if(billsArr[i] >= 100 && billsArr[i] < 150){
                tipsPercentage = 0.2;
            }else{
                tipsPercentage = 0.25;
            }
            this.tips[i] = tipsPercentage * billsArr[i];
            this.totalBills[i] = billsArr [i] + this.tips[i];
        }
    }
}
let marco = {
    fullName: "Marco Smith",
    bills: [100, 170, 51, 15],
    calcTips: function(){
        this.tips = [];
        this.totalBills = [];
        const billsArr = this.bills;
        let tipsPercentage ;
        for(let i = 0; i < billsArr.length; i++){
            if(billsArr[i] < 50){
                tipsPercentage = 0.1;
            }else if(billsArr[i] >= 50 && billsArr[i] < 100){
                tipsPercentage = 0.15;
            }else if(billsArr[i] >= 100 && billsArr[i] < 150){
                tipsPercentage = 0.2;
            }else{
                tipsPercentage = 0.25;
            }
            this.tips[i] = tipsPercentage * billsArr[i];
            this.totalBills[i] = billsArr [i] + this.tips[i];
        }
    }
}
function avgTips(tipsArr){
    let sum = 0;
    tipsArr.forEach(element => {
        sum += element;
    });
    return sum/tipsArr.length;
}
philip.calcTips();
marco.calcTips();
philip.avgTips = avgTips(philip.tips);
marco.avgTips = avgTips(marco.tips);
console.log(philip, marco);
