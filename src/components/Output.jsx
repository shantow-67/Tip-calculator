

const Output = ({bill,onTip}) => {
    return (
        <div className="form-controll">
            <h3>You pay {bill + onTip} (${bill}+${onTip})</h3>
        </div>
    );
};

export default Output;