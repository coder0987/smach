import { useRef } from 'react';
import { Outlet } from 'react-router-dom';

const GamesRoot = () => {
    const fullscreenRef = useRef(null);
    const toggleFullscreen = () => {
        const element = fullscreenRef.current;

        if (!element) {return;}
    
        if (!document.fullscreenElement) {
          // Request fullscreen mode on the element
          if (element.requestFullscreen) {
            element.requestFullscreen();
          } else if (element.mozRequestFullScreen) { // Firefox
            element.mozRequestFullScreen();
          } else if (element.webkitRequestFullscreen) { // Chrome, Safari, Opera
            element.webkitRequestFullscreen();
          } else if (element.msRequestFullscreen) { // IE/Edge
            element.msRequestFullscreen();
          }
        } else {
          // Exit fullscreen mode
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
          } else if (document.webkitExitFullscreen) { // Chrome, Safari, Opera
            document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
          }
        }
    }
    return (
        <section className="flex flex-col md:flex-row h-full w-full gap-4">
            <div className='flex flex-col w-full'>
                <div className='flex flex-col w-full bg-black p-2 rounded-lg'>
                    <h1 className='header md:pl-2'>Game</h1>
                    <div ref={fullscreenRef} className='aspect-[4/3] rounded-lg'>
                        <Outlet />
                        <button
                            onClick={toggleFullscreen}
                            className="absolute bottom-4 right-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            {document.fullscreenElement ? 'Exit Fullscreen' : 'Go Fullscreen'}
                        </button>
                    </div>
                </div>
                <div className='flex'>
                    <h2>Description</h2>
                </div>
            </div>
            <div className='flex flex-col items-center w-full h-full md:max-w-[25%]'>
                <h1 className='flex header'>Suggested games</h1>
                <div className="main-text p-4 flex flex-col items-center">
                    <p className='p-8'>lorem ipsum</p>
                    <p className='p-8'>lorem ipsum</p>
                    <p className='p-8'>lorem ipsum</p>
                    <p className='p-8'>lorem ipsum</p>
                    <p className='p-8'>lorem ipsum</p>
                </div>
            </div>
        </section>
    );
}

export default GamesRoot