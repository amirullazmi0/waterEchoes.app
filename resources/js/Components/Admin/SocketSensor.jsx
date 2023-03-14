import { ArcGauge } from "@progress/kendo-react-gauges";
import { useEffect, useState } from "react";

const colors = [
    {
        to: 40,
        color: "#0058e9",
    },
    {
        from: 40,
        to: 60,
        color: "#37b400",
    },
    {
        from: 60,
        to: 80,
        color: "#ffc000",
    },
    {
        from: 80,
        color: "#f31700",
    },
];

const colorout = [
    {
        color: "rgb(255, 255, 255)",
    },
]
function SocketSensor({ sensor }) {
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center all-sensor">
                {/* PH */}
                {sensor.value1 > 12 || sensor.value1 < 2 ?
                    <div className="flex justify-center card card-socket sensor-out bg-base-100 border shadow-sm p-1 m-2">
                        <ArcGauge className="gauge-socket" value={!sensor.value1 ? 50 : sensor.value1 / 14 * 100} colors={colorout} />
                        < div className="data-sensor">{!sensor.value1 ? 0 : sensor.value1}</div>
                        <div className="label-sensor">PH</div>
                    </div>
                    :
                    <div className="flex justify-center card card-socket bg-base-100 border shadow-sm p-1 m-2">
                        <ArcGauge className="gauge-socket" value={!sensor.value1 ? 50 : sensor.value1 / 14 * 100} colors={colors} />
                        < div className="data-sensor">{!sensor.value1 ? 0 : sensor.value1}</div>
                        <div className="label-sensor">PH</div>
                    </div>
                }

                {/* TDS */}
                {sensor.value2 > 90 || sensor.value2 < 10 ?
                    <div className="flex justify-center card card-socket sensor-out bg-base-100 border shadow-sm p-1 m-2">
                        <ArcGauge className="gauge-socket" value={!sensor.value2 ? 50 : sensor.value2 / 100 * 100} colors={colorout} />
                        < div className="data-sensor">{!sensor.value2 ? 0 : sensor.value2}</div>
                        <div className="label-sensor">TDS</div>
                    </div>
                    :
                    <div className="flex justify-center card card-socket bg-base-100 border shadow-sm p-1 m-2">
                        <ArcGauge className="gauge-socket" value={!sensor.value2 ? 50 : sensor.value2 / 100 * 100} colors={colors} />
                        < div className="data-sensor">{!sensor.value2 ? 0 : sensor.value2}</div>
                        <div className="label-sensor">TDS</div>
                    </div>
                }

                {/* SUHU */}
                {sensor.value3 > 90 || sensor.value3 < 10 ?
                    <div className="flex justify-center card card-socket sensor-out bg-base-100 border shadow-sm p-1 m-2">
                        <ArcGauge className="gauge-socket" value={!sensor.value3 ? 50 : sensor.value3 / 100 * 100} colors={colorout} />
                        < div className="data-sensor">{!sensor.value3 ? 0 : sensor.value3}</div>
                        <div className="label-sensor">SUHU</div>
                    </div>
                    :
                    <div className="flex justify-center card card-socket bg-base-100 border shadow-sm p-1 m-2">
                        <ArcGauge className="gauge-socket" value={!sensor.value3 ? 50 : sensor.value3 / 100 * 100} colors={colors} />
                        < div className="data-sensor">{!sensor.value3 ? 0 : sensor.value3}</div>
                        <div className="label-sensor">SUHU</div>
                    </div>
                }

                {/* SALINITAS */}
                {sensor.value4 > 90 || sensor.value4 < 10 ?
                    <div className="flex justify-center card card-socket sensor-out bg-base-100 border shadow-sm p-1 m-2">
                        <ArcGauge className="gauge-socket" value={!sensor.value4 ? 50 : sensor.value4 / 100 * 100} colors={colorout} />
                        < div className="data-sensor">{!sensor.value4 ? 0 : sensor.value4}</div>
                        <div className="label-sensor">SALINITAS</div>
                    </div>
                    :
                    <div className="flex justify-center card card-socket bg-base-100 border shadow-sm p-1 m-2">
                        <ArcGauge className="gauge-socket" value={!sensor.value4 ? 50 : sensor.value4 / 100 * 100} colors={colors} />
                        < div className="data-sensor">{!sensor.value4 ? 0 : sensor.value4}</div>
                        <div className="label-sensor">SALINITAS</div>
                    </div>
                }

                {/* PH */}
                {sensor.value5 > 90 || sensor.value5 < 10 ?
                    <div className="flex justify-center card card-socket sensor-out bg-base-100 border shadow-sm p-1 m-2">
                        <ArcGauge className="gauge-socket" value={!sensor.value5 ? 50 : sensor.value5 / 100 * 100} colors={colorout} />
                        < div className="data-sensor">{!sensor.value5 ? 0 : sensor.value5}</div>
                        <div className="label-sensor">AMONIA</div>
                    </div>
                    :
                    <div className="flex justify-center card card-socket bg-base-100 border shadow-sm p-1 m-2">
                        <ArcGauge className="gauge-socket" value={!sensor.value5 ? 50 : sensor.value5 / 100 * 100} colors={colors} />
                        < div className="data-sensor">{!sensor.value5 ? 0 : sensor.value5}</div>
                        <div className="label-sensor">AMONIA</div>
                    </div>
                }
            </div>
        </>
    );
}

export default SocketSensor