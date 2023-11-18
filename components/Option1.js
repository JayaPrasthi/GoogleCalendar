

export const OptionData = () => {
    return (

        <>
            <select value={select} onChange={(e) => setSelect(e.target.value)} >
                <option value="Month"> Month </option>
                <option value="Week"> Week </option>
            </select>
        </>
    )

}