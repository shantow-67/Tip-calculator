

const SelectPercentage = ({percent,onSetPercent,children}) => {
    return (
        <div  className="form-control mb-3 border border-info bg-dark">
            <label className="text-info mr-2">{children}</label>
            <select value={percent}
                onChange={(e) => { onSetPercent(Number(e.target.value)) }}
                className="bg-warning ml-3 ">
                <option value="0">Bad(0%)</option>
                <option value="5">Good (5%)</option>
                <option value="10">Better (10%)</option>
                <option value="20">impressive (20%)</option>
            </select>
        </div>
    );
};

export default SelectPercentage;