"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Link from "next/link";
import Card from "@/app/components/recommendation/card";
import { useState, useEffect, useCallback, useMemo } from "react";
import Modal from "@/app/components/recommendation/modal";
import Header from "@/app/components/recommendation/header";


const POSTS_PER_PAGE = 5;
export default function Recommendations() {


  //--------------------- cards fetching --------------------//
  const [employees, SetEmployees] = useState([])

  useEffect(() => {

    fetch("/models/employee.json")
      .then((response) => response.json())
      .then((data) => { SetEmployees(data) })
      .catch((error) => console.error("Failed to fetch employees:", error));
  }, [])

  const memorizedEmployees = useMemo(() => employees, [employees]);

  //--------------------- /cards fetching --------------------//

  //--------------------- Cards filter -----------------------//


  const [filters, setFilters] = useState({
    price: false,
    rating: false,
    sat_sun:false,
    mon_tue:false,
    wed_thu:false,
    fri:false,
    time: false,
    price_range:false
  })

  const [isclicked, SetIsClicked] = useState(false);
  const [filteredemployees, SetFilteredemployees] = useState([]);
  const [time,setTime] = useState('');
  const [price,setPrice] = useState('');


  function filterEmployees() {
    let filtered = [...employees];

    if (filters.price) {
      filtered = filtered.sort((b, a) => parseInt(a.price) - parseInt(b.price))
    }

    if (filters.rating) {
      filtered = filtered.sort((b, a) => parseFloat(a.rating) - parseFloat(b.rating))
    }

    if(filters.sat_sun)
    {
      filtered = filtered.filter((employee)=>employee.available_days.includes('Saturday') || employee.available_days.includes('Sunday'))
    }

    if(filters.mon_tue)
    {
      filtered = filtered.filter((employee)=>employee.available_days.includes('Tuesday') || employee.available_days.includes('Monday'))
    }

    if(filters.wed_thu)
    {
      filtered = filtered.filter((employee)=>employee.available_days.includes('Wednesday') || employee.available_days.includes('Thursday'))
    }

    if(filters.fri)
    {
      filtered = filtered.filter((employee)=>employee.available_days.includes('Friday'))
    }

    if (filters.time) {
      if(time.includes('AM'))
      {
        filtered = filtered.filter((employee)=>parseInt(employee.start_time)<=parseInt(time.slice(0,2).trim()))
      }

      else
      {
        filtered = filtered.filter((employee)=>parseInt(employee.end_time)>parseInt(time.slice(0,2).trim()))
      }
    }

    if(filters.price_range)
    {
      filtered = filtered.filter((employee)=> parseInt(employee.price)<parseInt(price))
    }

    return filtered;
   
  }

  const updateFilter = (filterName) => {
    setFilters((prevFilters) => {
      const isPriceOrRating = ['price', 'rating'].includes(filterName);

      if (filterName != 'reset') {
        const newfilters =
        {
            price: isPriceOrRating ? (filterName === 'price' ? !prevFilters.price : false) : prevFilters.price,
            rating: isPriceOrRating ? (filterName === 'rating' ? !prevFilters.rating : false) : prevFilters.rating,
            time: filterName === 'time' ? true : prevFilters.time,
            price_range: filterName === 'price_range' ? true : prevFilters.price_range,
            sat_sun: filterName === 'sat_sun',
            mon_tue: filterName === 'mon_tue',
            wed_thu: filterName === 'wed_thu',
            fri: filterName === 'fri',
            //time: prevFilters.time
        }
        return newfilters;

    }
    else {
        const newfilters =
        {
            price: false,
            rating: false,
            time: false,
            price_range: false,
            sat_sun: false,
            mon_tue: false,
            wed_thu: false,
            fri: false,
            //time: prevFilters.time
        }
        return newfilters;
    }

    });
    SetIsClicked(true);
  };


  useEffect(() => {  // if no filter
    if (!isclicked) {
      SetFilteredemployees(memorizedEmployees)
    }
  }, [isclicked, memorizedEmployees])

  useEffect(() => {

    if (isclicked) {
      const filteredResults = filterEmployees();
      SetFilteredemployees(filteredResults);
    }
    else {
      SetFilteredemployees(memorizedEmployees)
    }



  }, [isclicked, filters])



  //--------------------- /Cards filter ---------------------//

  
    //--------------------- Pagnitation controls ---------------//

    const [currentPage, setCurrentPage] = useState(1);

    // Calculate total pages
    const totalPages = Math.ceil(filteredemployees.length / POSTS_PER_PAGE);

    // Calculate the index range for employees to display
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    const employeesToDisplay = filteredemployees.slice(startIndex, endIndex);



  return (
    <div className="bg-light ">
      <Header />
      <div className="container max-w-screen-xl mx-auto flex grid grid-col-3 gap-4 pt-[50px] bg-[#FBE4CC]">
        <div className=" justify-center flex ">
          <Menu>
            <MenuButton className="inline-flex gap-2 w-[150px] rounded-full hover:bg-dark py-1.5 px-3 text-sm/6 font-semibold text-dark border-2 hover:border-light hover:text-light border-dark shadow-2xl">
              <span className="justify-self-center w-[150px]">FILTER BY</span>
            </MenuButton>

            <MenuItems
              transition
              anchor="bottom end"
              className="w-52 origin-top-right rounded-xl border-2 border-dark bg-light p-1 text-sm/6 text-dark transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-dark data-[focus]:text-light" onClick={() => updateFilter('price')}>
                  price
                </button>
              </MenuItem>

              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-dark data-[focus]:text-light " onClick={() => updateFilter('rating')}>
                  rating
                </button>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>

        <div className="grid grid-col-4 gap-10">

          <div className="col-start-1 border-2 border-dark rounded-lg mb-[50px] h-[430px] shadow-2xl">
            <div className="container mx-auto px-[1px] mb-[40px]">
              <div className="mb-[20px] flex items-center justify-between">
                  <span className="text-dark font-bold pl-[30px]">DATE</span>
                  <div className="border-2 border-dark text-dark items-center rounded-full w-[100px]  mt-[10px] mr-[10px] flex justify-center hover:bg-dark">
                      <button className="text-dark hover:text-light w-full h-full flex justify-center" onClick={() => updateFilter('reset')}>
                          RESET
                      </button>
                  </div>
              </div>
              <div className="grid grid-cols-2 gap-2 justify-center flex pl-[50px]">
                <div className="border-2 border-dark text-dark items-center rounded-full w-[200px] flex justify-center hover:bg-dark ">
                  <button className="text-dark hover:text-light w-full h-full flex justify-center" onClick={() => updateFilter('sat_sun')}>
                    SAT - SUN
                  </button>
                </div>
                <div className="border-2 border-dark text-dark items-center rounded-full w-[200px] flex justify-center hover:bg-dark ">
                  <button className="text-dark hover:text-light w-full h-full flex justify-center" onClick={() => updateFilter('mon_tue')}>
                    MON - TUE
                  </button>
                </div>
                <div className="border-2 border-dark text-dark items-center rounded-full w-[200px] flex justify-center hover:bg-dark ">
                  <button className="text-dark hover:text-light w-full h-full flex justify-center" onClick={() => updateFilter('wed_thu')}>
                    WED - THU
                  </button>
                </div>
                <div className="border-2 border-dark text-dark items-center rounded-full w-[200px] flex justify-center hover:bg-dark ">
                  <button className="text-dark hover:text-light w-full h-full flex justify-center" onClick={() => updateFilter('fri')}>
                    FRIDAY
                  </button>
                </div>
              </div>
            </div>

            <div className="my-4 h-[2px] w-[400px] bg-dark mx-auto"></div>

            <div className="container mx-auto px-[10px] mb-[60px]">
              <span className="block mb-[10px] text-dark font-bold pl-[30px] mt-[20px] block">TIME</span>
              <Menu>
                <MenuButton className="inline-flex gap-2 w-[400px] rounded-full hover:bg-dark py-1.5 px-3 text-sm/6 ml-[30px] font-semibold text-dark border-2 hover:border-light hover:text-light border-dark ml-[50px]">
                  <span className="justify-center flex w-[450px] ">
                    AVAILABLE TIMES
                  </span>
                </MenuButton>

                <MenuItems
                  transition
                  anchor="bottom end"
                  className="w-52 origin-top-right rounded-xl border-2 border-dark bg-light p-1 text-sm/6 text-dark transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] data-[closed]:scale-95 data-[closed]:opacity-0"
                >
                  <MenuItem>
                    <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-dark data-[focus]:text-light" onClick={() => {updateFilter('time');setTime("8 AM")}}>
                       AT 8:00 AM
                    </button>
                  </MenuItem>

                  <MenuItem>
                    <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-dark data-[focus]:text-light" onClick={() => {updateFilter('time');setTime("9 AM")}}>
                       AT 9:00 AM
                    </button>
                  </MenuItem>

                  <MenuItem>
                    <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-dark data-[focus]:text-light " onClick={() => {updateFilter('time');setTime("10 AM")}}>
                       AT 10:00 AM
                    </button>
                  </MenuItem>

                  <MenuItem>
                    <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-dark data-[focus]:text-light " onClick={() => {updateFilter('time');setTime("11 AM")}}>
                       AT 11:00 AM
                    </button>
                  </MenuItem>

                  <MenuItem>
                    <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-dark data-[focus]:text-light " onClick={() => {updateFilter('time');setTime("12 AM")}}>
                       AT 12:00 AM
                    </button>
                  </MenuItem>

                  <MenuItem>
                    <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-dark data-[focus]:text-light " onClick={() => {updateFilter('time');setTime("1 PM")}}>
                       AT 1:00 PM
                    </button>
                  </MenuItem>

                  <MenuItem>
                    <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-dark data-[focus]:text-light "onClick={() => {updateFilter('time');setTime("2 PM")}}>
                       AT 2:00 PM
                    </button>
                  </MenuItem>

                  <MenuItem>
                    <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-dark data-[focus]:text-light " onClick={() => {updateFilter('time');setTime("3 PM")}}>
                       AT 3:00 PM
                    </button>
                  </MenuItem>

                  <MenuItem>
                    <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-dark data-[focus]:text-light "onClick={() => {updateFilter('time');setTime("4 PM")}}>
                       AT 4:00 PM
                    </button>
                  </MenuItem>

                  <MenuItem>
                    <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-dark data-[focus]:text-light "onClick={() => {updateFilter('time');setTime("5 PM")}}>
                       AT 5:00 PM
                    </button>
                  </MenuItem>

                  <MenuItem>
                    <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-dark data-[focus]:text-light "onClick={() => {updateFilter('time');setTime("6 PM")}}>
                       AT 6:00 PM
                    </button>
                  </MenuItem>

                  <MenuItem>
                    <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-dark data-[focus]:text-light "onClick={() => {updateFilter('time');setTime("7 PM")}}>
                       AT 7:00 PM
                    </button>
                  </MenuItem>

                  <MenuItem>
                    <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-dark data-[focus]:text-light "onClick={() => {updateFilter('time');setTime("8 PM")}}>
                       AT 8:00 PM
                    </button>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>

            <div className="my-4 h-[2px] w-[400px] bg-dark mx-auto"></div>

            <div className="container mx-auto px-[10px] mb-[60px]">
              <span className="block mb-[10px] text-dark font-bold pl-[30px] mt-[20px] block">PRICE RANGE</span>
              <div className=" justify-center flex ">
                <Menu>
                  <MenuButton className="inline-flex gap-2 w-[150px] rounded-full hover:bg-dark py-1.5 px-3 text-sm/6 font-semibold text-dark border-2 hover:border-light hover:text-light border-dark ">
                    <span className="justify-self-center w-[150px]">PRICES</span>
                  </MenuButton>

                  <MenuItems
                    transition
                    anchor="bottom end"
                    className="w-52 origin-top-right rounded-xl border-2 border-dark bg-light p-1 text-sm/6 text-dark transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] data-[closed]:scale-95 data-[closed]:opacity-0"
                  >
                    <MenuItem>
                      <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-dark data-[focus]:text-light" onClick={() => {updateFilter('price_range');setPrice('40')}}>
                        lower than 40$
                      </button>
                    </MenuItem>

                    <MenuItem>
                      <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-dark data-[focus]:text-light " onClick={() => {updateFilter('price_range');setPrice('50')}}>
                        lower than 50$
                      </button>
                    </MenuItem>

                    <MenuItem>
                      <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-dark data-[focus]:text-light " onClick={() => {updateFilter('price_range');setPrice('60')}}>
                        lower than 60$
                      </button>
                    </MenuItem>

                    <MenuItem>
                      <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-dark data-[focus]:text-light " onClick={() => {updateFilter('price_range');setPrice('70')}}>
                        lower than 70$
                      </button>
                    </MenuItem>

                    <MenuItem>
                      <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-dark data-[focus]:text-light " onClick={() => {updateFilter('price_range');setPrice('80')}}>
                        lower than 80$
                      </button>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>

          <div className="col-start-3">
            {
              employeesToDisplay.map(employee => {
                console.log("the available employees are: ",employee)
                return <Card key={employee.id} employee={employee} />
              })
            }

          </div>

          
        </div>

        <div className="pagination justify-self-center py-[10px] shadow-xl">
            <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                disabled={currentPage === 1}
                className="bg-dark text-light p-[3px]"
            >
                Previous
            </button>
            <span className="p-[5px] border-2 border-dark">{`Page ${currentPage} of ${totalPages}`}</span>
            <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
                disabled={currentPage === totalPages}
                className="bg-dark text-light p-[3px]"
            >
                Next
            </button>
          </div>
      </div>
    </div>
  );
}
