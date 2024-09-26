"use client";
import React, { useEffect, useState, useRef, useContext } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { GiTwoCoins } from "react-icons/gi";
import currency from "@/data/currency.json";
import { TourContext } from "@/context/TourContextProvider";
import useCurrency from "@/hooks/useCurrency";
import { usePathname } from "next/navigation";

const CustomCurrencyDropDown = () => {
  const { tourDetails, setTourDetails } = useContext(TourContext);
  const pathname = usePathname();

  const [currencies] = useState(Object.entries(currency)); // Convert object to array of key-value pairs
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState(currencies[1][0]);
  const [open, setOpen] = useState(false);

  const selectedCurrency = useCurrency(pathname);

  const handleSelectCurrency = (currencyKey) => {
    setSelected(currencyKey);

    const conversionRate = selectedCurrency[currencyKey.toLowerCase()] || 1;
    // const convertedCurrencyType = currencyKey;
    const convertedCurrencySymbol = currency[currencyKey];

    setTourDetails((prevTourDetails) => ({
      ...prevTourDetails,
      currencyType: currencyKey,
      conversionRate: conversionRate,
      convertedPrice: (tourDetails.price * conversionRate).toFixed(2),
      // convertedCurrencyType: convertedCurrencyType,
      converedCurrencySymbol: convertedCurrencySymbol, // Save selected currency symbol
      totalPrice: (tourDetails.totalLKRPrice * conversionRate).toFixed(2),
    }));
    setOpen(false);
    setInputValue("");
  };

  const DropDownRef = useRef();

  const handleClickOutside = (e) => {
    if (DropDownRef.current && !DropDownRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    // Check the current route and set the initial selected currency accordingly
    if (pathname.includes("/day-trips" || "/tour-packages")) {
      setSelected(selected || currencies[1][0]);
    } else {
      setSelected(tourDetails.currencyType || currencies[0][0]);
    }
  }, [pathname, currencies, selected, tourDetails.currencyType]);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="font-normal">
      <div className="w-full absolute z-[1] left-0 right-0">
        {/* Dropdown button */}
        <div
          onClick={() => setOpen(!open)}
          className={`bg-primary w-full border-[1px] text-[14px] border-black p-1 flex items-center justify-between rounded  ${
            !selected && "text-[#8e8e8e]"
          }`}
        >
          {selected && (
            <div className="flex items-center">
              <span>{selected}</span>
              <span className="mx-1">-</span>
              <span>{currency[selected]}</span>
              {/* Display selected currency symbol */}
            </div>
          )}
          {/* Dropdown icon */}
          <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
        </div>
        {/* Dropdown list */}
        <ul
          ref={DropDownRef}
          className={`bg-white  overflow-y-auto cursor-pointer  my-2 ${
            open ? "max-h-[250px] border-[1px] border-black rounded" : "max-h-0"
          }`}
        >
          {/* Search input */}
          <div className="flex items-center px-2 sticky top-0 bg-white shadow">
            <AiOutlineSearch size={18} className="text-gray-700" />
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value.toLowerCase())}
              placeholder="Preferred Currency"
              className="placeholder:text-gray-700 placeholder:text-[12px] bxs:placeholder:text-[14px] px-2 py-1 outline-none w-full"
            />
          </div>
          {/* Dropdown items */}
          {currencies.map(
            ([currencyKey, currencyValue]) =>
              // Filter currencies based on input value
              (currencyKey.toLowerCase().includes(inputValue) ||
                currencyValue.toLowerCase().includes(inputValue)) && (
                <li
                  key={currencyKey}
                  className={`py-2 px-3 text-[12px] bxs:text-[14px] hover:bg-black hover:text-white flex items-center m-1 rounded ${
                    currencyKey.toLowerCase() === selected.toLowerCase() &&
                    "bg-primary text-black "
                  }`}
                  onClick={() => handleSelectCurrency(currencyKey)}
                >
                  <GiTwoCoins size={20} className="mr-2" />
                  <span>{currencyKey}</span>
                  <span className="mx-1">-</span>
                  <span>{currencyValue}</span>
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
};

export default CustomCurrencyDropDown;
