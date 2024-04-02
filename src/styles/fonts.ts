import { Open_Sans, Montserrat, Playfair_Display } from 'next/font/google';

const openSans = Open_Sans({ 
    subsets: ['latin'],
    weight: "300" 
});

const montserrat = Montserrat({ 
    subsets: ['latin'],
    weight: "400" 
});

const playfairDisplay = Playfair_Display({ 
    subsets: ['latin'],
    weight: "400" 
});

export { openSans, montserrat, playfairDisplay };