import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2 h-10'>Latest</p>
            <Marquee className='flex gap-5' pauseOnHover={true} speed={60}>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, iusto. Corrupti saepe rerum voluptatum molestiae, illo animi ullam tempore perspiciatis quaerat sapiente. Consectetur laboriosam vitae vero doloremque! Ad, aspernatur porro.</p>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, iusto. Corrupti saepe rerum voluptatum molestiae, illo animi ullam tempore perspiciatis quaerat sapiente. Consectetur laboriosam vitae vero doloremque! Ad, aspernatur porro.</p>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, iusto. Corrupti saepe rerum voluptatum molestiae, illo animi ullam tempore perspiciatis quaerat sapiente. Consectetur laboriosam vitae vero doloremque! Ad, aspernatur porro.</p>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, iusto. Corrupti saepe rerum voluptatum molestiae, illo animi ullam tempore perspiciatis quaerat sapiente. Consectetur laboriosam vitae vero doloremque! Ad, aspernatur porro.</p>
            </Marquee>
            
        </div>
    );
};

export default LatestNews;