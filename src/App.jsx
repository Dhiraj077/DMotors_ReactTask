import { React } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import Section1 from "./components/Section1";
// import Section2 from "./components/Section2";
// import Section3 from "./components/Section3";
// import Section4 from "./components/section4";
// import TestimonialCarousel from "./components/TestimonialCarousel";
// import Section5 from "./components/section5";
// import Section6 from "./components/Section6";
// import Section7 from "./components/Section7";
import Footer from "./components/Footer";

// const testimonials = [
//   {
//     image: 'https://example.com/testimonial1.jpg',
//     name: 'John Doe',
//     message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   },
//   {
//     image: 'https://example.com/testimonial2.jpg',
//     name: 'Jane Smith',
//     message: 'Pellentesque in lacus vestibulum, pulvinar leo nec, rhoncus mi.',
//   }, {
//     image: 'https://example.com/testimonial2.jpg',
//     name: 'Jane Smith',
//     message: 'Pellentesque in lacus vestibulum, pulvinar leo nec, rhoncus mi.',
//   },
//   {
//     image: 'https://example.com/testimonial2.jpg',
//     name: 'Jane Smith',
//     message: 'Pellentesque in lacus vestibulum, pulvinar leo nec, rhoncus mi.',
//   },
//   {
//     image: 'https://example.com/testimonial2.jpg',
//     name: 'Jane Smith',
//     message: 'Pellentesque in lacus vestibulum, pulvinar leo nec, rhoncus mi.',
//   },
//   {
//     image: 'https://example.com/testimonial2.jpg',
//     name: 'Jane Smith',
//     message: 'Pellentesque in lacus vestibulum, pulvinar leo nec, rhoncus mi.',
//   },

//   // Add more testimonials as needed
// ];


function App() {
  return (
    <div>
      <div >
        <Navbar />
        <Hero />
      </div>
      {/* <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <TestimonialCarousel />
      <Section5 />
      <Section6 />
      <Section7 /> */}
      <Footer />
    </div>
  );
}

export default App;
