import Jumbotron from '@/Components/Admin/Jumbotron';
import Navbar from '@/Components/Admin/Navbar';
import SocketSensor from '@/Components/Admin/SocketSensor';
import { Link, Head } from '@inertiajs/react';

export default function Home(props) {
    return (
        <>
            <div className='bg-body'>
                <Head title={props.title} />
                <Navbar active={props.active} />
                <Jumbotron />
                <div className="lg:p-6 mr-auto">
                    <SocketSensor sensor={props.sensor} />
                </div>
            </div>
        </>
    );
}
