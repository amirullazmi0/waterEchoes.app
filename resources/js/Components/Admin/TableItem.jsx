const TableItem = ({ sensor }) => {
    return (
        <>
            <div className="flex justify-center card bg-base-100 border shadow-sm p-2 m-2">
                <div className="overflow-x-auto">
                    {sensor || sensor == true ?
                        <table className="table w-full">
                            {/* head */}
                            <thead>
                                <tr className="text-center">
                                    <td>No</td>
                                    <th>PH</th>
                                    <th>TDS</th>
                                    <th>suhu</th>
                                    <th>salinitas</th>
                                    <th>amonia</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sensor.map((s, index ) => (
                                    <tr key={s.id} className="text-center">
                                        <td className="font-bold">{index = index + 1}</td>
                                        <td>{s.value1}</td>
                                        <td>{s.value2}</td>
                                        <td>{s.value3}</td>
                                        <td>{s.value4}</td>
                                        <td>{s.value5}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        :
                        <div className="p-5 text-center">
                            <h1 className="font-bold">TIDAK ADA SENSOR</h1>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default TableItem