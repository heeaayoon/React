import { useState } from 'react';
function MyClockTime(){
    var today = new Date();
    const [clock, setclock] = useState(today);
    setInterval(() => setclock(today), 1000);
    return <div className='font-bold'>{today.toLocaleTimeString()}</div>
}
export default MyClockTime