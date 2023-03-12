
import { io } from "socket.io-client";
// const socket = io('https://skripsi-iot-ku.site/webSocket');

// console.log('socket', socket)

const Graph = () => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-center all-sensor">
                <div className="flex justify-center card bg-base-100 border shadow-sm p-2 m-2">
                    <img src="https://lh3.googleusercontent.com/YLUe4juF8FfLjcH5qaY5j4INs0PxZDeJVThQBm6GIbiTMFzkG7k3ax7LrOarIzJONQgv=w606-rwa" alt="" />
                    <div className="label-sensor">Graph Day</div>
                </div>
                <div className="flex justify-center card bg-base-100 border shadow-sm p-2 m-2">
                    <img src="https://lh3.googleusercontent.com/YLUe4juF8FfLjcH5qaY5j4INs0PxZDeJVThQBm6GIbiTMFzkG7k3ax7LrOarIzJONQgv=w606-rwa" alt="" />
                    <div className="label-sensor">Graph Week</div>
                </div>
                <div className="flex justify-center card bg-base-100 border shadow-sm p-2 m-2">
                    <img src="https://lh3.googleusercontent.com/YLUe4juF8FfLjcH5qaY5j4INs0PxZDeJVThQBm6GIbiTMFzkG7k3ax7LrOarIzJONQgv=w606-rwa" alt="" />
                    <div className="label-sensor">Graph Month</div>
                </div>
            </div>
        </>
    )
}

export default Graph    