"use client";
import { IoIosArrowDown } from "react-icons/io";
import React, { Suspense, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";

import Link from "next/link";
import { GoCircle } from "react-icons/go";
import faqs from "@/data/faq.json";

//all the click handlesr should issolated to seperate client components
//but in here i place all the components and others in same file
//just because of the assignment asked to do i single js file

//data set
// const faqs = [
//   {
//     question: "How to Book a Taxi from Colombo Airport ?",
//     answer:
//       "To book a taxi from Colombo Airport, simply visit airportcab.lk to explore services and rates. You can contact them directly via phone at +94 719 885 885 or WhatsApp at +94 712 100 500. For convenience, you can also use their online booking form, where you'll need to provide details like your arrival time, flight number, and destination.",
//   },
//   {
//     question: "What is the Process After Booking and Arrival ?",
//     answer:
//       "Once your booking is submitted, you’ll receive a confirmation via email. Upon arrival at the airport, look for a representative holding a sign with your name who will assist with your luggage and guide you to your taxi.",
//   },
//   {
//     question: "When should you book airport taxi?",
//     answer:
//       "As a general rule of thumb, we'd recommend around half an hour after you're due to touch down if you only have carry-on bags, 30 to 45 minutes if you have checked-in luggage.",
//   },
//   {
//     question: "How to Get from Colombo Airport to Your Hotel ?",
//     answer:
//       "Arriving at Colombo Airport and wondering how to get to your hotel? Look no further! AirportCab.lk offers seamless airport transfer services that ensure you arrive at your destination safely and comfortably.",
//   },
//   {
//     question: "Why Choose AirportCab.lk ?",
//     answer:
//       "AirportCab.lk offers reliable, punctual service at affordable rates with professional drivers. Booking is easy either through their website or by calling +94 719 885 885. For a smooth experience, provide your flight details and destination when booking. Pre-booking is recommended, especially during busy seasons, and AirportCab.lk monitors flight arrivals for timely pickups. For a hassle-free transfer from Colombo Airport, choose AirportCab.lk and enjoy a comfortable ride.",
//   },
//   {
//     question: "How Much USD Can I Carry Out of Sri Lanka ?",
//     answer:
//       "When leaving Sri Lanka, you can carry up to USD 10,000 or its equivalent in other foreign currencies without declaring it. For amounts exceeding USD 15,000, a declaration to Sri Lanka Customs is required. Additionally, Sri Lankan residents are limited to carrying out a maximum of 20,000 LKR.",
//   },
//   {
//     question: "How Much is a Taxi from the Airport to Colombo ?",
//     answer:
//       "The cost of a taxi from Bandaranaike International Airport (CMB) to Colombo varies by service provider and taxi type. Generally, standard taxi fares range from LKR 3,500 to LKR 6,000 (approximately €9 to €30), while minivan taxis for larger groups typically cost between LKR 4,500 and LKR 7,000. For more accurate pricing and to book a ride, contact Airport Cab at +94 719 885 885 or visit their website at airportcab.lk.",
//   },
//   {
//     question: "Is It Easy to Get a Taxi in Sri Lanka ?",
//     answer:
//       "Yes, obtaining a taxi in Sri Lanka is easy. The island provides various options, including traditional taxis, ride-hailing apps, and airport transfer services. For a convenient airport pickup, you can book a taxi through airportcab.lk, known for its reliable service. Simply contact them at +94 719 885 885 to arrange your ride and ensure a hassle-free start to your journey in Sri Lanka.",
//   },
// ];

const FAQ = () => {
  return (
    <Suspense
      fallback={
        <div className="px-5 py-2 text-primary bg-white rounded-md">
          FAQ Loading...
        </div>
      }
    >
      <FaqContent />
    </Suspense>
  );
};

//main component
const FaqContent = () => {
  const [expandedIndices, setExpandedIndices] = useState([]);

  //   const searchParams = useSearchParams();
  //   const router = useRouter();
  //   const search = searchParams.get("search") || "";
  const [inputValue, setInputValue] = useState("");
  //in searching im not using debounce principle incase of get instant search apperance
  const handleToggle = (index) => {
    setExpandedIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const HandleToggleAll = () => {
    if (expandedIndices.length === selectedArray.length) {
      setExpandedIndices([]);
    } else {
      setExpandedIndices(selectedArray.map((_, index) => index));
    }
  };

  //   useEffect(() => {
  //     router.replace(`?search=${inputValue}`, undefined, {
  //       shallow: true,
  //       scroll: false,
  //     });
  //   }, [inputValue, router]);

  const inputRef = useRef(null);

  const filteredArray = faqs.filter((q) => {
    const lowercasedQuestion = q.question.toLowerCase();
    return lowercasedQuestion.startsWith(inputValue.toLowerCase());
  });
  const selectedArray = inputValue === "" ? faqs : filteredArray;

  return (
    <div
      className="flex relative flex-col py-14 z-0
     gap-y-8 items-center justify-center w-full  bg-gray-100"
    >
      {/**bg-gradient-radial from-white to-newprimary  bg-gradient-to-b from-newprimary to-indigo-500 **/}
      {/* <div className="flex  top-[10%] 2xl:right-[30%] right-[5%] 2xl:left-[30%] left-[5%] absolute md:px-5 px-3 2xl:py-2 py-1 bg-white rounded-md shadow-xl"> */}
      <div className="flex 2xl:w-[60%] w-[90%] md:px-5 px-3 2xl:py-2 py-1 bg-white rounded-md shadow-xl">
        <input
          type="text"
          className="flex-1 outline-none md:text-[16px] text-[14px] text-primary font-semibold placeholder:md:text-[18px] placeholder:text-[14px] placeholder:font-normal placeholder:text-primary/50"
          onChange={(e) => setInputValue(e.target.value)}
          ref={inputRef}
          placeholder="Search Your Problem"
          value={inputValue}
        />
        <Link href={`?search=${inputValue}`}>
          <IoIosSearch
            className="text-primary 2xl:size-[30px] size-[25px]"
            onClick={() => inputRef.current.focus()}
          />
        </Link>
      </div>

      <div className="flex flex-col justify-center items-center 2xl:w-[60%] w-[90%] gap-10">
        <div className="2xl:text-[50px] bigmd:text-[40px] text-[30px] font-semibold">
          FAQ
        </div>

        <div className="flex flex-col  gap-y-5">
          {selectedArray.map((qu, index) => (
            <QuizBox
              key={index}
              quiz={qu.question}
              answer={qu.answer}
              isExpanded={expandedIndices.includes(index)}
              onToggle={() => handleToggle(index)}
            />
          ))}
          {selectedArray.length < 1 && (
            <div className="md:text-[16px] text-[14px] py-2 text-center">
              Sorry, no matches found. Please try a different search term.
            </div>
          )}
        </div>
      </div>

      <div
        className="absolute -bottom-[2%] 2xl:right-[20%] right-[5%] bg-white rounded-md p-2 shadow-custom size-[50px] flex items-center justify-center shadow-md"
        onClick={HandleToggleAll}
      >
        <GoCircle
          className={`text-primary rounded-full transition-all duration-500 ${
            expandedIndices.length === 0 ? "text-[35px]" : "text-[25px]"
          }`}
        />
      </div>
    </div>
  );
};

export default FAQ;

// QuizBox Component
// const QuizBox = ({ quiz, answer, isExpanded, onToggle }) => {
//   return (
//     <div className="flex flex-col w-full shadow-md">
//       <div
//         className={`${
//           isExpanded ? "rounded-t-md" : "rounded-md"
//         } md:px-5 px-3 py-2 flex justify-between items-center bg-white`}
//         onClick={onToggle}
//       >
//         <div className="font-semibold md:text-[18px] text-[14px]">{quiz}</div>
//         <IoIosArrowDown
//           className={`${
//             isExpanded ? "rotate-180" : "rotate-0"
//           } duration-500 transition-all w-[20px] ml-2`}
//         />
//       </div>
//       <div
//         className={`${
//           isExpanded
//             ? "h-auto opacity-100 py-2 border-t-2 border-indigo-300"
//             : "h-0 opacity-0"
//         } text-left w-full bg-white text-gray-700 font-light transition-all duration-500 rounded-b-md md:px-5 px-3 overflow-hidden md:text-[16px] text-[12px]`}
//       >
//         {answer}
//       </div>
//     </div>
//   );
// };

const QuizBox = ({ quiz, answer, isExpanded, onToggle }) => {
  // Function to identify and convert phone numbers, WhatsApp numbers, and URLs into clickable links
  const formatAnswer = (text) => {
    // Regular expression to detect URLs
    const urlRegex = /(https?:\/\/[^\s]+|[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
    // Regular expression to detect phone numbers (both WhatsApp and regular numbers)
    const phoneRegex =
      /(\+?\d{1,4}[\s-]?\(?\d+\)?[\s-]?\d+[\s-]?\d+[\s-]?\d+)/g;

    return text.split(" ").map((word, index) => {
      // If it's a URL or domain (like airportcab.lk)
      if (urlRegex.test(word)) {
        const url = word.startsWith("http") ? word : `https://${word}`;
        return (
          <Link
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 font-medium"
          >
            {word}
          </Link>
        );
      }

      // If it's a phone number, determine if it's for WhatsApp or a regular call
      if (phoneRegex.test(word)) {
        const isWhatsApp = word.includes("+94712100500"); // Assuming WhatsApp uses this number in the example
        const number = word.replace(/\D/g, ""); // Strip non-digit characters
        const href = isWhatsApp ? `https://wa.me/${number}` : `tel:${number}`;

        const printedNumber = `+94 ${number.slice(2, 4)} ${number.slice(
          4,
          8
        )} ${number.slice(8)}`;

        return (
          <Link
            key={index}
            href={href}
            className="text-[#19763b] font-medium"
            target="_blank"
          >
            {printedNumber}
          </Link>
        );
      }

      // Otherwise, return the word as is
      return "  " + word + "  ";
    });
  };

  return (
    <div className="flex flex-col w-full shadow-md">
      <div
        className={`${
          isExpanded ? "rounded-t-md" : "rounded-md"
        } md:px-5 px-3 py-2 flex justify-between items-center bg-white`}
        onClick={onToggle}
      >
        <div className="font-semibold md:text-[16px] text-[14px]">{quiz}</div>
        <IoIosArrowDown
          className={`${
            isExpanded ? "rotate-180" : "rotate-0"
          } duration-500 transition-all w-[20px] ml-2`}
        />
      </div>
      <div
        className={`${
          isExpanded
            ? "h-auto opacity-100 py-2 border-t-2 border-indigo-300"
            : "h-0 opacity-0"
        } text-left w-full bg-white text-gray-700 font-light transition-all duration-500 rounded-b-md md:px-5 px-3 overflow-hidden md:text-[16px] text-[12px]`}
      >
        {formatAnswer(answer)}
      </div>
    </div>
  );
};
