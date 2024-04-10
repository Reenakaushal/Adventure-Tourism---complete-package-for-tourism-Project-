import React from 'react'
import classes from "./page.module.css"

const Page = () => {
  return (

    // <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
    <div>
      <div
        className="w-full m-0 p-0 bg-cover bg-bottom"
        style={{
          backgroundColor: 'white',
          boxShadow: 'back',
          height: "60vh",
          maxHeight: 460,
          backgroundImage: `url('/pietro-de-grandi-T7K4aEPoGGk-unsplash.jpg')`
        }}
      >
        <div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8'>
          <div className="container max-w-100 pt-16 md:pt-100 text-center break-normal">
            {/*Title*/}
            <p className="text-white font-extrabold text-3xl md:text-5xl">
              <div class="bg-[url('/img/pietro-de-grandi-T7K4aEPoGGk-unsplash.jpg')]">
              </div>
            </p>
            <div class="text-5xl font-extrabold ...">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                Explore Top Destinations by Region
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}

      {/* End Grid */}
      <>

        {/*Header*/}
        {/* </div> */}
        {/*Container*/}
        <div className="container px-4 md:px-0 max-w-6xl mx-auto mt-32">
          <div className="mx-0 sm:mx-6">
            {/*Nav*/}
            <nav className="mt-0 w-full">
              <div className="container mx-auto flex items-center">
                <div className="flex w-1/2 pl-4 text-sm">
                  <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                    <li className="mr-2">
                      <a
                        className="inline-block py-2 px-2 text-white no-underline hover:underline"
                        href="post.html"
                      >
                        POST
                      </a>
                    </li>
                    <li className="mr-2">
                      <a
                        className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-2"
                        href="multimenu post.html"
                      >
                        MULTIMENU POST
                      </a>
                    </li>
                    <li className="mr-2">
                      <a
                        className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-2"
                        href="#"
                      >
                        LINK
                      </a>
                    </li>
                    <li className="mr-2">
                      <a
                        className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-2"
                        href="post_vue.html"
                      >
                        POST_VUE
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex w-1/2 justify-end content-center">
                  <a
                    className="inline-block text-gray-500 no-underline hover:text-white hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 avatar"
                    data-tippy-content="@twitter_handle"
                    href="https://twitter.com/intent/tweet?url=#"
                  >
                    <svg
                      className="fill-current h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                    >
                      <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z" />
                    </svg>
                  </a>
                  <a
                    className="inline-block text-gray-500 no-underline hover:text-white hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 avatar"
                    data-tippy-content="#facebook_id"
                    href="https://www.facebook.com/sharer/sharer.php?u=#"
                  >
                    <svg
                      className="fill-current h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                    >
                      <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z" />
                    </svg>
                  </a>
                </div>
              </div>
            </nav>
            <div className="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
              {/*Lead Card*/}
              <div className="flex h-full bg-white rounded overflow-hidden shadow-lg">
                <a
                  href="post.html"
                  className="flex flex-wrap no-underline hover:no-underline"
                >
                  <div className="w-full md:w-2/3 rounded-t">
                    <img
                      src="https://www.aljazeera.com/wp-content/uploads/2020/10/2017-01-05T000000Z_51394911_RC1696BDDFB0_RTRMADP_3_INDIA-MONKS.jpg?resize=1920%2C1080"
                      className="h-full w-full shadow"
                    />
                  </div>
                  <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">

                      <div className="w-full font-bold text-3xl text-gray-900 px-6">
                        Adventure Activities in Manali
                      </div>
                      <p className="text-gray-800 font-serif text-base px-6 mb-5">
                        Camping, Trekking, Skiing, Snowboarding, Quad biking, Zorbing, Ziplining, Biking, Rappelling, Paragliding, Downhill Cycling, Jeep Safari ,River Crossing, Angling , Ziplining and many more.

                        Manali is situated amidst the frosty hilltops of Himalayas, with ravishing sights, delightful cuisine, and a sanctuary and interspersed local markets throughout the town.. But did you know that Manali is a getaway destination for those seeking thrilling sports as well? Skiing is, in fact, one of the most popular adventures in Manali.

                        Due to its rocky terrain and mountainous region, activities like trekking, hiking, biking, and rock climbing have become current venturesome activities. Due to the various streams of rivers, river rafting and white water rafting have also popularized in the repertoire of adventurous activities in Manali, making it an essential part of Manali tour packages.
                      </p>
                    </div>
                    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                      <div className="flex items-center justify-between">
                        <img
                          className="w-8 h-8 rounded-full mr-4 avatar"
                          data-tippy-content="Author Name"
                          src="http:/Snapchat-480996321-PhotoRoom.jpg"
                          alt="Avatar of Author"
                        />
                        <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              {/*/Lead Card*/}
              {/*Posts Container*/}
              <div className="flex flex-wrap justify-between pt-12 -mx-6">
                {/*1/3 col */}
                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                  <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                    <a
                      href="#"
                      className="flex flex-wrap no-underline hover:no-underline"
                    >
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMEuoy5kTtJoHqXMLNg6FYrNXr-TastDnrvw&s"
                        className="h-64 w-full rounded-t pb-6"
                      />

                      <div className="w-full font-bold text-xl text-gray-900 px-6">
                        Adventure Activities in Ladakh
                      </div>
                      <p className="text-gray-800 font-serif text-base px-6 mb-5">
                        Ladakh is bordered by the Tibet Autonomous Region to the east, the Indian state of Himachal Pradesh to the south, both the Indian-administered union territory of Jammu and Kashmir and the Pakistan-administered Gilgit-Baltistan to the west, and the southwest corner of Xinjiang across the Karakoram Pass in the far north.
                      </p>
                    </a>
                  </div>
                  <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <img
                        className="w-8 h-8 rounded-full mr-4 avatar"
                        data-tippy-content="Author Name"
                        src="http:/Snapchat-480996321-PhotoRoom.jpg"
                        alt="Avatar of Author"
                      />
                      <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                    </div>
                  </div>
                </div>
                {/*1/3 col */}
                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                  <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                    <a
                      href="#"
                      className="flex flex-wrap no-underline hover:no-underline"
                    >
                      <img
                        src="https://source.unsplash.com/collection/3106804/800x600"
                        className="h-64 w-full rounded-t pb-6"
                      />
                      <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                        GETTING STARTED
                      </p>
                      <div className="w-full font-bold text-xl text-gray-900 px-6">
                        Lorem ipsum dolor sit amet.
                      </div>
                      <p className="text-gray-800 font-serif text-base px-6 mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum
                        dolor sit amet, consectetur adipiscing elit. Aliquam at ip
                        Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                      </p>
                    </a>
                  </div>
                  <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <img
                        className="w-8 h-8 rounded-full mr-4 avatar"
                        data-tippy-content="Author Name"
                        src="http:/Snapchat-480996321-PhotoRoom.jpg"
                        alt="Avatar of Author"
                      />
                      <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                    </div>
                  </div>
                </div>
                {/*1/3 col */}
                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                  <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                    <a
                      href="#"
                      className="flex flex-wrap no-underline hover:no-underline"
                    >
                      <img
                        src="https://source.unsplash.com/collection/539527/800x600"
                        className="h-64 w-full rounded-t pb-6"
                      />
                      <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                        GETTING STARTED
                      </p>
                      <div className="w-full  font-bold text-xl text-gray-900 px-6">
                        Lorem ipsum dolor sit amet.
                      </div>
                      <p className="text-gray-800 font-serif text-base px-6 mb-5">
                        Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                      </p>
                    </a>
                  </div>
                  <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <img
                        className="w-8 h-8 rounded-full mr-4 avatar"
                        data-tippy-content="Author Name"
                        src="http:/Snapchat-480996321-PhotoRoom.jpg"
                        alt="Avatar of Author"
                      />
                      <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                    </div>
                  </div>
                </div>
                {/*1/2 col */}
                <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
                  <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                    <a
                      href="#"
                      className="flex flex-wrap no-underline hover:no-underline"
                    >
                      <img
                        src="https://source.unsplash.com/collection/3657445/800x600"
                        className="h-full w-full rounded-t pb-6"
                      />
                      <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                        GETTING STARTED
                      </p>
                      <div className="w-full font-bold text-xl text-gray-900 px-6">
                        Lorem ipsum dolor sit amet.
                      </div>
                      <p className="text-gray-800 font-serif text-base px-6 mb-5">
                        Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                      </p>
                    </a>
                  </div>
                  <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <img
                        className="w-8 h-8 rounded-full mr-4 avatar"
                        data-tippy-content="Author Name"
                        src="http:/Snapchat-480996321-PhotoRoom.jpg"
                        alt="Avatar of Author"
                      />
                      <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                    </div>
                  </div>
                </div>
                {/*1/2 col */}
                <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
                  <div className="flex-1 flex-row bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                    <a
                      href="#"
                      className="flex flex-wrap no-underline hover:no-underline"
                    >
                      <img
                        src="https://source.unsplash.com/collection/764827/800x600"
                        className="h-full w-full rounded-t pb-6"
                      />
                      <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                        GETTING STARTED
                      </p>
                      <div className="w-full font-bold text-xl text-gray-900 px-6">
                        Lorem ipsum dolor sit amet.
                      </div>
                      <p className="text-gray-800 font-serif text-base px-6 mb-5">
                        Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                      </p>
                    </a>
                  </div>
                  <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <img
                        className="w-8 h-8 rounded-full mr-4 avatar"
                        data-tippy-content="Author Name"
                        src="http:/Snapchat-480996321-PhotoRoom.jpg"
                        alt="Avatar of Author"
                      />
                      <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                    </div>
                  </div>
                </div>
                {/*2/3 col */}
                <div className="w-full md:w-2/3 p-6 flex flex-col flex-grow flex-shrink">
                  <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                    <a
                      href="#"
                      className="flex flex-wrap no-underline hover:no-underline"
                    >
                      <img
                        src="https://source.unsplash.com/collection/325867/800x600"
                        className="h-full w-full rounded-t pb-6"
                      />
                      <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                        GETTING STARTED
                      </p>
                      <div className="w-full font-bold text-xl text-gray-900 px-6">
                        Lorem ipsum dolor sit amet.
                      </div>
                      <p className="text-gray-800 font-serif text-base px-6 mb-5">
                        Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                      </p>
                    </a>
                  </div>
                  <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <img
                        className="w-8 h-8 rounded-full mr-4 avatar"
                        data-tippy-content="Author Name"
                        src="http:/Snapchat-480996321-PhotoRoom.jpg"
                        alt="Avatar of Author"
                      />
                      <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                    </div>
                  </div>
                </div>
                {/*1/3 col */}
                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                  <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                    <a
                      href="#"
                      className="flex flex-wrap no-underline hover:no-underline"
                    >
                      <img
                        src="https://source.unsplash.com/collection/1118905/800x600"
                        className="h-full w-full rounded-t pb-6"
                      />
                      <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                        GETTING STARTED
                      </p>
                      <div className="w-full font-bold text-xl text-gray-900 px-6">
                        Lorem ipsum dolor sit amet.
                      </div>
                      <p className="text-gray-800 font-serif text-base px-6 mb-5">
                        Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                      </p>
                    </a>
                  </div>
                  <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <img
                        className="w-8 h-8 rounded-full mr-4 avatar"
                        data-tippy-content="Author Name"
                        src="http:/Snapchat-480996321-PhotoRoom.jpg"
                        alt="Avatar of Author"
                      />
                      <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*/ Post Content*/}
            </div>
            {/*Subscribe*/}
            <div className="container font-sans bg-green-100 rounded mt-8 p-4 md:p-24 text-center">
              <h2 className="font-bold break-normal text-2xl md:text-4xl">
                Subscribe to Ghostwind CSS
              </h2>
              <h3 className="font-bold break-normal font-normal text-gray-600 text-base md:text-xl">
                Get the latest posts delivered right to your inbox
              </h3>
              <div className="w-full text-center pt-4">
                <form action="#">
                  <div className="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
                    <input
                      type="email"
                      placeholder="youremail@example.com"
                      className="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-green-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-green-400"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* /Subscribe*/}
            {/*Author*/}
            <div className="flex w-full items-center font-sans p-8 md:p-24">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src="http:/Snapchat-480996321-PhotoRoom.jpg"
                alt="Avatar of Author"
              />
              <div className="flex-1">
                <p className="text-base font-bold text-base md:text-xl leading-none">
                  Ghostwind CSS
                </p>
                <p className="text-gray-600 text-xs md:text-base">
                  Tailwind CSS version of Ghost's Casper theme by{" "}
                  <a
                    className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
                    href="https://www.tailwindtoolbox.com"
                  >
                    TailwindToolbox.com
                  </a>
                </p>
              </div>
              <div className="justify-end">
                <a
                  href="post.html"
                  className="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full"
                >
                  Read More
                </a>
              </div>
            </div>
            {/*/Author*/}
          </div>
        </div>
        <footer className="bg-gray-900">
          <div className="container max-w-6xl mx-auto flex items-center px-2 py-8">
            <div className="w-full mx-auto flex flex-wrap items-center">
              <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                <a
                  className="text-gray-900 no-underline hover:text-gray-900 hover:no-underline"
                  href="#"
                >
                  👻 <span className="text-base text-gray-200">Ghostwind CSS</span>
                </a>
              </div>
              <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                <ul className="list-reset flex justify-center flex-1 md:flex-none items-center">
                  <li>
                    <a
                      className="inline-block py-2 px-3 text-white no-underline"
                      href="#"
                    >
                      Active
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-3"
                      href="#"
                    >
                      link
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-3"
                      href="#"
                    >
                      link
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-3"
                      href="#"
                    >
                      link
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </>

    </div>


  )
}

export default Page