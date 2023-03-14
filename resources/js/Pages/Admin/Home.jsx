import Graph from '@/Components/Admin/Graph';
import Jumbotron from '@/Components/Admin/Jumbotron';
import Navbar from '@/Components/Admin/Navbar';
import SocketSensor from '@/Components/Admin/SocketSensor';
import { Link, Head } from '@inertiajs/react';
import { useState } from 'react';

import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;


window.Echo = new Echo({
    broadcaster: 'pusher',
    key: '43b990a5bc74c642315a',
    cluster: 'ap1',
    forceTLS: true
});

// window.Echo.channel('Sensor-Event').listen("SensorEvent", (event) => {
//     console.log('Sensor Realtime')
//     console.log('event : ', event);
// });

export default function Home(props) {
    const [iniSocket, setSocket] = useState('')

    window.Echo.channel('Sensor-Event').listen("SensorEvent", (event) => {
        // console.log('Sensor Realtime')
        // console.log('event : ', event.message);
        setSocket(event.message);
    });

    console.log('state : ', iniSocket);
    return (
        <>
            <div className='bg-body'>
                <Head title={props.title} />
                <Navbar active={props.active} />
                <Jumbotron />
                <div className="lg:p-6 mr-auto">
                    <SocketSensor sensor={iniSocket} />
                    <Graph />
                </div>
            </div>
        </>
    );
}
