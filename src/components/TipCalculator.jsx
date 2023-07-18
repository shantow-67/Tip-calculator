import { useState } from "react";
import Bill from "./Bill";
import SelectPercentage from "./SelectPercentage";
import Output from "./Output";
import Reset from "./Reset";


const TipCalculator = () => {

    const [bill, setBill] = useState("")
    const[percent1,setpercent1]=useState(0)
    const[percent2,setpercent2]=useState(0)

    const tip = bill * ((percent1 + percent2) / 100);

    const resetHandle = () => {
        setBill("")
        setpercent1(0)
        setpercent2(0)

    }
    return (
        <div className="container">
            <h1 className="text-center">Tip Calculator</h1>
            <form action="" className="m-3 p-3 form-group border border-warning .bg-secondary.bg-gradient">
            <Bill bill={bill} onSetBill={setBill}  />
            <SelectPercentage percent={percent1} onSetPercent={setpercent1}>
               Have you enjoyed the service?
            </SelectPercentage>
            <SelectPercentage percent={percent2} onSetPercent={setpercent2}>
                Have your friend enjoyed the service?
            </SelectPercentage>

            <div className="p-3 bg-warning d-flex flex-row">
            {bill > 0 && (
            <>
                    <Output bill={bill} onTip={tip} />
                    <Reset onReset={resetHandle} />
            </>   
                )}
             </div>   
           </form>
            
        </div>
    );
};

export default TipCalculator;