'use client';
import Booking from '@/app/admin/booking/page';
import { useFormik } from 'formik';
import React from 'react';
import toast from 'react-hot-toast';

const AddBooking = () => {

  const BookingForm = useFormik({
    initialValues: {
      PackageType: '',
      PackageName: '',
      JourneyDate: '',
      Adults: 0,
      Chailds:0
    },
    onSubmit: values => {
      console.log(values);

      fetch(`${process.env.NEXT_PUBLIC_API_URL}/Booking/add`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            response.json()
              .then(data => {
                console.log(data);
                toast.success('Booking added successfully');
              })
          } else {
            toast.error('Failed to add Booking');
          }
        }).catch((err) => {
          console.log(err);
          toast.error('Failed to add Booking');
        });

    }

  })

  const uploadFile = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('myfile', file);
    fetch('http://localhost:5000/util/uploadfile', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        BookingForm.setFieldValue('placeCover', file.BookingType);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div className="dark:bg-slate-700">

      <form className="max-w-sm mx-auto" onSubmit={Booking.handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="PackageType"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
           Package Type
          </label>
          <input
            type="text"
            id="Package Type"
            onChange={Booking.handleChange}
            value={BookingForm.values.name}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required=""
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Package Name
          </label>
          <input
            type="text"
            id="Package Name"
            onChange={BookingForm.handleChange}
            value={BookingForm.values.place}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required=""
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="repeat-password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
           Journey Date
          </label>
          <input
            type="file"
            id="Journey Date"
            onChange={uploadFile}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required=" "
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Adults
          </label>
          <input
            type="text"
            id=" Adults"
            onChange={BookingForm.handleChange}
            value={BookingForm.values.price}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required=""
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor=" Adults"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Childs
          </label>
          <textarea
            type="Number"
            id="Chails"
            onChange={BookingForm.handleChange}
            value={BookingForm.values.facilities}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required=""
          ></textarea>
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              defaultValue=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required=""
            />
          </div>
          <label
            htmlFor="terms"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a href="agree" className="text-blue-600 hover:underline dark:text-blue-500">
              terms and conditions
            </a>
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register new account
        </button>
      </form>
    </div>

  )
}
export default AddBooking;