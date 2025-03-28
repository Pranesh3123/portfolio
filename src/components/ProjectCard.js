import defaultImg from "../assets/img/defaultProjectImg.jpg"
import project1 from "../assets/img/projectImg-1.png";
import project2 from "../assets/img/projectImg-2.png";
import project3 from "../assets/img/projectImg-3.png";
import project4 from "../assets/img/projectImg-4.png";
import project5 from "../assets/img/projectImg-5.png";

export const projects = [
        {
          imgUrl: project5,
          title: "Study Room",
          deployment: "https://stackflow-chartroom.onrender.com",
          description:
            "Study Room is a web-based learning platform built using Python and Django for the backend, with HTML, CSS, and Bootstrap for the frontend. This project serves as an online hub where students can access study materials, browse courses, and manage their learning progress efficiently."
        },
        {
          imgUrl:project2,
          title: "Book Finder",
          deployment: "https://book-finder-ashy-zeta.vercel.app/",
          description:
            "Book Finder is a React-based web application that allows users to search for books using an external API. Users can enter keywords such as book titles, authors, or genres, and the app fetches relevant results from an online book database.",
        },
        {
          imgUrl: project1,
          title: "Ecommerce-Website",
          deployment: "https://dreamydeals.vercel.app/",
          description:
            "This E-Commerce Website is a full-fledged online shopping platform built using React for the frontend and integrated with handling products, user authentication, and add to cart. The project provides a seamless shopping experience with features such as product listings, user authentication, cart management, and a secure process.",
        },
      
        {
          imgUrl: project3,
          title: "Chatbot",
          deployment: "https://chatter-brown-ten.vercel.app/",
          description:
            "Chatbot is a simple yet interactive web-based chatbot built using HTML, CSS, and JavaScript. It provides an engaging way for users to interact with an automated assistant that can respond to predefined inputs and simulate a conversation.",
        },
        {
          imgUrl: project4,
          title: "Zomata Clone",
          deployment: "https://zomoto-clone-delta.vercel.app/",
          description:
            "The Zomato Clone is a static web page designed using HTML, CSS, and JavaScript to replicate the look and feel of Zomato’s food discovery platform. This project provides a responsive and visually appealing interface but does not include backend functionality, making it a purely front-end project.",
        },
        {
          imgUrl: defaultImg,
          title: "Voice Assistant",
          deployment: "",
          description:
            "The Voice Assistant is a Python-based interactive virtual assistant that responds to voice commands and performs basic tasks. It is built using Python’s speech recognition and text-to-speech libraries, allowing users to interact with their system hands-free."
        },
      
      ];