

const Bill = ({ bill, onSetBill }) => {
    
    return (
        <div  className="form-control mb-3 border border-info bg-dark" >
            <label className="text-info">How much the bill?</label>
            <input
                type="text"
                placeholder="bill..."
                value={bill}
                onChange={(e) => onSetBill(Number(e.target.value))}
                 className="form-control "
            />

        </div>
    );
};

export default Bill;