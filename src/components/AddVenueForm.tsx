"use client"
import React, { useState } from 'react';

// import { useRouter } from 'next/router';

const AddVenueForm = () => {
  const new_date = new Date().toLocaleDateString();
  const [selectedOption, setSelectedOption] = useState('Select an option');
  const [name, setName] = useState('');
  const [coach, setCoach] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [sport, setSport] = useState('');
  const [court, setCourt] = useState('Court1');
  const [session, setSession] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState(new_date);
  const [time, setTime] = useState('');

  const locationTimeSlots = {
    'JumeirahResort & Spa 1 - Dubai Marine Beach': ['06-11 a.m. to 12-00 a.m.',],
    'Home of Padel': ['06-00 a.m. to 12-00 a.m.',],
    'pro tennis academy center': ['06-00 a.m. to 12-00 a.m.',],
  };
  const getLocationTimeSlot = (location:any) => {
    switch (location) {
      case 'JumeirahResort & Spa 1 - Dubai Marine Beach':
        return '06-00 a.m. to 12-00 a.m';
      case 'Home of Padel':
        return '06-00 a.m. to 12-00 a.m';
      case 'pro tennis academy center':
        return '06-00 a.m. to 12-00 a.m';
      default:
        return '04-00 p.m. to 12-00 a.m'; 
    }
  };
//   const router = useRouter();
  const handleSubmit = () => {
    if (!name || !email || !contact || !session || !location || !date || !time) {
      alert('Please fill in all required fields');
      return;
    }
    const data = {
      name,
      contact,
      email,
      session,
      coach,
      court,
      location,
      sport,
      selectedOption,
      date,
      time,
    };
    console.log(data);

    // let config = {
    //   method: 'post',
    //   maxBodyLength: Infinity,
    //   url: 'http://localhost:4000/tick',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   data: data,
     
    // };
    // router.push({
    //   pathname: 'booking-success',
    //   query: data,
    // });

    // axios
    //   .request(config)
    //   .then((response) => {
    //     console.log(JSON.stringify(response.data));
    //     setName('');
    //     setEmail('');
    //     setContact('');
    //     setSport('Tennis');
    //     setCourt('Court1');
    //     setSession('');
    //     setLocation('Select Location');
    //     setDate('');
    //     setSelectedOption('Select an option');
    //     setCoach('');
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  const handleLocationChange = (e:any) => {
    
    setLocation(e.target.value);
    setCourt('');
    setCoach('');
    setTime(''); 
  };
  let timeOptions = [];
//   if (locationTimeSlots.hasOwnProperty(location)) {
//     timeOptions = locationTimeSlots[location].map((slot:any) => (
//       <option key={slot} value={slot}>
//         {slot}
//       </option>
//     ));
//   }
  const locationTimeSlot = getLocationTimeSlot(location);
  return (
    <div className='card m-4 xl:w-1/2 md:w-md grid mx-auto place-self-center'>
    <div className="container mx-auto max-w-xl px-4">
      <h1 className='text-xl text-center pt-3 fw-bold text-decoration underline'>Booking Form</h1>
      <div className="pt-2 text-black font-semibold">Name</div>
      <input
        type="text"
        className="outline-0 h-10 w-full px-3 rounded-md bg-gray-300 text-black"
        value={name}
        placeholder='Enter Name'
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <div className="pt-5 text-black font-semibold">Email</div>
      <input
        type="text"
        className="outline-0 h-10 w-full px-3 rounded-md bg-gray-300 text-black"
        value={email}
        placeholder='Enter Email'
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <div className="pt-5 text-black font-semibold">Contact</div>
      <input
        type="text"
        className="outline-0 h-10 w-full px-3 rounded-md bg-gray-300 text-black"
        value={contact}
        placeholder='Enter Contact'
        onChange={(e) => {
          setContact(e.target.value);
        }}
      />

      <div className="pt-5 text-black font-semibold">Sport</div>
      <select
        className="outline-0 h-10 w-full px-3 rounded-md bg-gray-300 text-black"
        value={sport}
        onChange={(e) => {
          setSport(e.target.value);
        }}
      >
        <option value="Tennis">Tennis</option>
        <option value="Padel Tennis">Padel Tennis</option>
      </select>

      <div className="pt-5 text-black font-semibold">Session</div>
      <select
        className="outline-0 h-10 w-full px-3 rounded-md bg-gray-300 text-black"
        value={selectedOption}
        onChange={(e) => {
          setSelectedOption(e.target.value);
        }}
      >
        <option value="">Select an option</option>
        <option value="1">Private Lesson</option>
        <option value="2">Semi-Private Lesson</option>
        <option value="3">Groups lesson for kids</option>
      </select>
      {selectedOption === '1' && (
        <select
          className="outline-0 w-full mt-2 px-3 bg-gray-300 text-black rounded-md p-2"
          value={session}
          onChange={(e) => {
            setSession(e.target.value);
          }}
        >
          <option value="45 min Private Lesson">
            45 min Private Lesson :300 AED
          </option>
          <option value="Package of Eleven (5)- 45 min Private Lessons-200 AED">
            Package of Five (5)- 45 min Private Lessons:1350 AED
          </option>
          <option value="Package of Eleven (10)- 45 min Private Lessons">
            Package of Ten (10)- 45 min Private Lessons :2700 AED
          </option>
          <option value="60 min Private Lesson">
            60 min Private Lesson : 350 AED
          </option>
          <option value="Package of Eleven (5)- 60 min Private Lessons">
            Package of Eleven (5)- 60 min Private Lessons :1575 AED
          </option>
          <option value="Package of Eleven (10)- 60 min Private Lessons">
            Package of Eleven (10)- 60 min Private Lessons :3150 AED
          </option>
        </select>
      )}
      {selectedOption === '2' && (
        <select
          className="outline-0 w-full mt-2 px-3 bg-gray-300 text-black rounded-md"
          value={session}
          onChange={(e) => {
            setSession(e.target.value);
          }}
        >
          <option value="1 hour Semi-Private Lesson">
            1 hour Semi-Private Lesson :400 AED
          </option>
          <option value="Package of Five (5) 1-hour Semi-Private Lessons">
            Package of Five (5) 1-hour Semi-Private Lessons :1800 AED
          </option>
          <option value="Package of Five (10) 1-hour Semi-Private Lessons">
            Package of Five (10) 1-hour Semi-Private Lessons :3600 AED
          </option>
        </select>
      )}
      {selectedOption === '3' && (
        <select
          className="outline-0 w-full mt-2 px-3 bg-gray-300 text-black rounded-md"
          value={session}
          onChange={(e) => {
            setSession(e.target.value);
          }}
        >
          <option value="1 hour Group-Private Lesson">
            1 hour Group-Private Lesson :2174 AED
          </option>
          <option value="Package of Eleven (11) 1-hour Group-Private Lessons">
            Package of Eleven (11) 1-hour Group-Private Lessons :3750 AED
          </option>
          <option value="Package of Eleven (15) 1-hour Group-Private Lessons">
            Package of Eleven (15) 1-hour Group-Private Lessons: 4920 AED
          </option>
          <option value="Package of Eleven (22) 1-hour Group-Private Lessons">
            Package of Eleven (22) 1-hour Group-Private Lessons: 5000 AED
          </option>
          <option value="Package of Eleven (30) 1-hour Group-Private Lessons">
            Package of Eleven (30) 1-hour Group-Private Lessons: 5400 AED
          </option>
        </select>
      )}

      <div className="pt-5 text-black font-semibold">Location</div>
      <select
        className="outline-0 h-10 w-full px-3 rounded-md bg-gray-300 text-black"
        value={location}
        onChange={handleLocationChange}
        
      >
         <option value="Select Location">
         Select Location
        </option>
        <option value="Downtown - JSS Private School">
          Downtown - JSS Private School
        </option>
        <option value="Al Safa - Al Ittihad Private School">
          Al Safa - Al Ittihad Private School
        </option>
        <option value="Umm Suqeim - Collegiate International School">
          Umm Suqeim - Collegiate International School
        </option>
        <option value="JumeirahResort & Spa 1 - Dubai Marine Beach">
          JumeirahResort & Spa 1 - Dubai Marine Beach
        </option>
        <option value="Al Barsha - Brighton College">
          Al Barsha - Brighton College
        </option>
        <option value="Al Barsha - Bloom World Academy">
          Al Barsha - Bloom World Academy
        </option>
        <option value="Mirdif - Uptown International School">
          Mirdif - Uptown International School
        </option>
        <option value="Al Warqa - International Academic School">
          Al Warqa - International Academic School
        </option>
        <option value="Nad Al Sheb- Hartland International School">
          Nad Al Sheba - Hartland International School
        </option>
        <option value="Al Barsha-Gems World academy">
        Al Barsha-Gems World academy
        </option>
        <option value="Nad Al Sheba-Dubai School">
        Nad Al Sheba-Dubai School
        </option>
        <option value="Gems Willington Academy">
        Gems Willington Academy
        </option>
        <option value="Home of Padel">
        Home of Padel
        </option>
        <option value="pro tennis academy center">
        pro tennis academy center
        </option>
      </select>

      <div className="pt-5 text-black font-semibold">Court Availability</div>
      <select
        className="outline-0 h-10 w-full px-3 rounded-md bg-gray-300 text-black"
        value={court}
        onChange={(e) => {
          setCourt(e.target.value);
        }}
      >
       {location === 'Downtown - JSS Private School' && (
          <>
            <option value="Tennis(4)">Tennis(4)</option>
            <option value="Pickleball(2)">Pickleball(2)</option>
          </>
        )}
         {location === 'Al Safa - Al Ittihad Private School' && (
          <>
            <option value="Tennis(2)">Tennis(2)</option>
            <option value="Padel(3)">Padel(3)</option>
          </>
        )}
         {location === 'Umm Suqeim - Collegiate International School' && (
          <>
            <option value="Tennis(1)">Tennis(1)</option>
           
          </>
        )}
         {location === 'JumeirahResort & Spa 1 - Dubai Marine Beach' && (
          <>
            <option value="Tennis(1)">Tennis(1)</option>
          
          </>
        )}
         {location === 'Al Barsha - Brighton College' && (
          <>
            <option value="Tennis(2)">Tennis(2)</option>
           
          </>
        )}
         {location === 'Al Barsha - Bloom World Academy' && (
          <>
            <option value="Tennis(2)">Tennis(2)</option>
           
          </>
        )}
         {location === ' Mirdif - Uptown International School' && (
          <>
            <option value="Tennis(2)">Tennis(2)</option>
        
          </>
        )}
         {location === 'Al Warqa - International Academic School' && (
          <>
            <option value="Tennis(1)">Tennis(1)</option>
           
          </>
        )}
         {location === 'Nad Al Sheba - Hartland International School' && (
          <>
            <option value="Tennis(2)">Tennis(2)</option>
            
          </>
        )}
         {location === 'Home of Padel' && (
          <>
           
            <option value="Padel(8)">Padel(8)</option>
          </>
        )}
         {location === 'Al Barsha-Gems World academy' && (
          <>
            <option value="Tennis(2)">Tennis(2)</option>
            
          </>
        )}
         {location === 'Gems Willington Academy' && (
          <>
            <option value="Tennis(2)">Tennis(2)</option>
           
          </>
        )}
         {location === 'Nad Al Sheba-Dubai School' && (
          <>
            
            <option value="Padel(3)">Padel(3)</option>
          </>
        )}
         {location === 'pro tennis academy center' && (
          <>
            <option value="Tennis(4)">Tennis(4)</option>
           
          </>
        )}
         
      </select>

      <div className="pt-5 text-black font-semibold">Coach</div>
      <select
        className="outline-0 h-10 w-full px-3 rounded-md bg-gray-300 text-black"
        value={coach}
        onChange={(e) => {
          setCoach(e.target.value);
        }}
      >
        {location === 'Downtown - JSS Private School' && (
          <>
            <option value="Aftab(Tennis)">Aftab(Tennis)</option>
            <option value="Aman(Tennis)">Aman(Tennis)</option>
            <option value="Sanjeet(Tennis)">Sanjeet(Tennis)</option>
            <option value="Hassam(Tennis)">Hassam(Tennis)</option>
            <option value="Sara Umair(Tennis)">Sara Umair(Tennis)</option>
            <option value="Abbas(Tennis)">Abbas(Tennis)</option>
            <option value="Dou Dou(Pickleball)">Dou Dou(Pickleball)</option>
            <option value="Archit(Pickleball)">Archit(Pickleball)</option>
            <option value="Thomas(Pickleball)">Thomas(Pickleball)</option>
          </>
        )}
        {location === 'Al Safa - Al Ittihad Private School' && (
          <>
            <option value="Mahinder(Tennis)">Mahinder(Tennis)</option>
            <option value="Parminder(Padel)">Parminder(Padel)</option>
           
          </>
        )}
        {location === 'Umm Suqeim - Collegiate International School' && (
          <>
            <option value="Waqas(Tennis)">Waqas(Tennis)</option>
            
          </>
        )}
        {location === 'JumeirahResort & Spa 1 - Dubai Marine Beach' && (
          <>
            <option value="Nicholas(Tennis)">Nicholas(Tennis)</option>
            <option value="Bestin(Tennis)">Bestin(Tennis)</option>
            
          </>
        )}
        {location === 'Al Barsha - Brighton College' && (
          <>
            <option value="Mohanna-HC(Tennis)">Mohanna-HC</option>
            <option value="Ajay(Tennis)">Ajay(Tennis)</option>
            
          </>
        )}
        {location === 'Al Barsha - Bloom World Academy' && (
          <>
            <option value="Bestin(Tennis)">Bestin(Tennis)</option>
            <option value="Bob(Tennis)">Bob(Tennis)</option>
            
          </>
        )}
        {location === 'Mirdif - Uptown International School' && (
          <>
            <option value="Zariyab-HC(Tennis)">Zariyab-HC(Tennis)</option>
            <option value="Shakirullah(Tennis)">Shakirullah(Tennis)</option>
            
          </>
        )}
        {location === 'Al Warqa - International Academic School' && (
          <>
            <option value="None">None</option>
            
          </>
        )}
        {location === 'Nad Al Sheb- Hartland International School' && (
          <>
             <option value="Talha(Tennis)">Talha(Tennis)</option>
          </>
        )}
        {location === 'Al Barsha-Gems World academy' && (
          <>
           
           <option value="None">None</option>
            
          </>
        )}
        {location === 'Nad Al Sheba-Dubai School' && (
          <>
            <option value="None">None</option>
            
          </>
        )}
        {location === 'Gems Willington Academy' && (
          <>
             <option value="Dharam(Tennis)">Dharam(Tennis)</option>
            
          </>
        )}
         {location === 'Home of Padel' && (
          <>
             <option value="None">None</option>
            
          </>
        )}
         {location === 'pro tennis academy center' && (
          <>
            <option value="Blaze-HC(Tennis)">Blaze-HC(Tennis)</option>
            <option value="Stanley(Tennis)">Stanley(Tennis)</option>
            <option value="Shakirullah(Tennis)">Shakirullah(Tennis)</option>
            <option value="Ijaz(Tennis)">Ijaz(Tennis)</option>
            
          </>
        )}
        
      </select>

      <div className="pt-5 text-black font-semibold">Date</div>
      <input
        type="date"
        className="outline-0 h-10 w-full px-3 rounded-md bg-gray-300 text-black"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />

      <div className="pt-5 text-black font-semibold">Time</div>
      <select
        className="outline-0 h-10 w-full px-3 rounded-md bg-gray-300 text-black"
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
        }}
      >
         <option value="">Select a time slot</option>
            <option value={locationTimeSlot}>{locationTimeSlot}</option>
        
      </select>

      <div className="flex justify-center mt-5">
        <button
          className="p-2 bg-blue-500 text-white rounded-lg font-semibold m-2"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
    </div>
  );
};

export default AddVenueForm;