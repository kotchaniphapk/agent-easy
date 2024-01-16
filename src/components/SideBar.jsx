import React, { useState } from "react";
import { Button } from "@nextui-org/react";

const ComponentName = () => {
  return (
    <div className="flex flex-col">
       <div className="flex flex-1 overflow-x-hidden"> {/*detail side*/}
        <div className="hidden md:flex md:w-64 md:flex-col"> {/*side bar*/}
          <div className="flex flex-col pt-5 overflow-y-auto border-1 border-t-0">
            <div className="flex flex-col justify-between flex-1 h-full px-4">
              <div className="space-y-4">
                <div>
                  <Button
                    color="primary"
                    type="button"
                    variant="solid"
                    className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-semibold leading-5 text-white"
                  >
                    <svg
                      className="w-5 h-5 mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    Create New Property
                  </Button>
                </div>

                <nav className="flex-1 space-y-1">
                  <a
                    href="#"
                    title=""
                    className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 rounded-lg hover:bg-gray-200 group"
                  >
                    <svg
                      className="flex-shrink-0 w-5 h-5 mr-4"
                      xmlns="http://www.w3.org/2000/svg"
                      w-6
                      h-6
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Dashboard
                  </a>
                </nav>

                <div>
                  <p className="px-4 text-xs font-semibold tracking-widest text-gray-400 uppercase">
                    Analytics
                  </p>
                  <nav className="flex-1 mt-4 space-y-1">
                    <a
                      href="#"
                      title=""
                      className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 rounded-lg hover:bg-gray-200 group"
                    >
                      <svg
                        className="flex-shrink-0 w-5 h-5 mr-4"
                        xmlns="http://www.w3.org/2000/svg"
                        w-6
                        h-6
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                      Performance
                    </a>

                    <a
                      href="#"
                      title=""
                      className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 rounded-lg hover:bg-gray-200 group"
                    >
                      <svg
                        className="flex-shrink-0 w-5 h-5 mr-4"
                        xmlns="http://www.w3.org/2000/svg"
                        w-6
                        h-6
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                        />
                      </svg>
                      Hotjar
                      <span className="text-xs uppercase ml-auto font-semibold text-primary-600 bg-primary-50 border border-primary-300 rounded-full inline-flex items-center px-2 py-0.5">
                        {" "}
                        New{" "}
                      </span>
                    </a>
                  </nav>
                </div>

                <div>
                  <p className="px-4 text-xs font-semibold tracking-widest text-gray-400 uppercase">
                    Support
                  </p>
                  <nav className="flex-1 mt-4 space-y-1">
                    <a
                      href="#"
                      title=""
                      className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 rounded-lg hover:bg-gray-200 group"
                    >
                      <svg
                        className="flex-shrink-0 w-5 h-5 mr-4"
                        xmlns="http://www.w3.org/2000/svg"
                        w-6
                        h-6
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                      Tickets
                      <span className="text-xs uppercase ml-auto font-semibold text-white bg-gray-500 border border-transparent rounded-full inline-flex items-center px-2 py-0.5">
                        {" "}
                        15{" "}
                      </span>
                    </a>

                    <a
                      href="#"
                      title=""
                      className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 rounded-lg hover:bg-gray-200 group"
                    >
                      <svg
                        className="flex-shrink-0 w-5 h-5 mr-4"
                        xmlns="http://www.w3.org/2000/svg"
                        w-6
                        h-6
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      Agents
                    </a>

                    <a
                      href="#"
                      title=""
                      className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 rounded-lg hover:bg-gray-200 group"
                    >
                      <svg
                        className="flex-shrink-0 w-5 h-5 mr-4"
                        xmlns="http://www.w3.org/2000/svg"
                        w-6
                        h-6
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                      Customers
                    </a>
                  </nav>
                </div>

                <div>
                  <p className="px-4 text-xs font-semibold tracking-widest text-gray-400 uppercase">
                    Shop
                  </p>
                  <nav className="flex-1 mt-4 space-y-1">
                    <a
                      href="#"
                      title=""
                      className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 rounded-lg hover:bg-gray-200 group"
                    >
                      <svg
                        className="flex-shrink-0 w-5 h-5 mr-4"
                        xmlns="http://www.w3.org/2000/svg"
                        w-6
                        h-6
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                        />
                      </svg>
                      Products
                    </a>

                    <a
                      href="#"
                      title=""
                      className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 rounded-lg hover:bg-gray-200 group"
                    >
                      <svg
                        className="flex-shrink-0 w-5 h-5 mr-4"
                        xmlns="http://www.w3.org/2000/svg"
                        w-6
                        h-6
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                      Orders
                    </a>

                    <a
                      href="#"
                      title=""
                      className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 rounded-lg hover:bg-gray-200 group"
                    >
                      <svg
                        className="flex-shrink-0 w-5 h-5 mr-4"
                        xmlns="http://www.w3.org/2000/svg"
                        w-6
                        h-6
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      Reports
                    </a>
                  </nav>
                </div>
              </div>

              <div className="pb-4 mt-12">
                <nav className="flex-1 space-y-1">
                  <a
                    href="#"
                    title=""
                    className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 rounded-lg hover:bg-gray-200 group"
                  >
                    <svg
                      className="flex-shrink-0 w-5 h-5 mr-4"
                      xmlns="http://www.w3.org/2000/svg"
                      w-6
                      h-6
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Settings
                  </a>

                  <a
                    href="#"
                    title=""
                    className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 rounded-lg hover:bg-gray-200 group"
                  >
                    <svg
                      className="flex-shrink-0 w-5 h-5 mr-4"
                      xmlns="http://www.w3.org/2000/svg"
                      w-6
                      h-6
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    Logout
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col flex-1">
          <main>
            <div className="py-6">
              <div className="px-4 mx-auto sm:px-6 md:px-8">
                <div className="max-w-md">
                  <h1 className="text-lg font-bold text-gray-900">Settings</h1>
                  <p className="mt-2 text-sm font-medium leading-6 text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Turpis morbi pulvinar venenatis non.
                  </p>
                </div>
              </div>

              <div className="px-4 mx-auto mt-8 sm:px-6 md:px-8">
                <div className="px-3 py-2 bg-white border border-gray-200 rounded-lg">
                  <nav className="flex flex-wrap gap-4">
                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-500 transition-all duration-200 bg-transparent rounded-lg hover:text-gray-900 hover:bg-gray-100 group whitespace-nowrap"
                    >
                      {" "}
                      Profile{" "}
                    </a>

                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-500 transition-all duration-200 bg-transparent rounded-lg hover:text-gray-900 hover:bg-gray-100 group whitespace-nowrap"
                    >
                      {" "}
                      Password{" "}
                    </a>

                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-500 transition-all duration-200 bg-transparent rounded-lg hover:text-gray-900 hover:bg-gray-100 group whitespace-nowrap"
                    >
                      {" "}
                      Team{" "}
                    </a>

                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-500 transition-all duration-200 bg-transparent rounded-lg hover:text-gray-900 hover:bg-gray-100 group whitespace-nowrap"
                    >
                      {" "}
                      Notification{" "}
                    </a>

                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 transition-all duration-200 bg-gray-100 rounded-lg group whitespace-nowrap"
                    >
                      {" "}
                      Billing Details{" "}
                    </a>

                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-500 transition-all duration-200 bg-transparent rounded-lg hover:text-gray-900 hover:bg-gray-100 group whitespace-nowrap"
                    >
                      {" "}
                      Integrations{" "}
                    </a>
                  </nav>
                </div>

                <div className="mt-8 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="text-base font-bold text-gray-900">
                      Subscription Plan:{" "}
                      <span className="text-primary-600">Standard</span>
                    </p>
                    <p className="mt-1 text-sm font-medium text-gray-500">
                      Monthly Plan
                    </p>
                  </div>

                  <div className="mt-4 sm:mt-0">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold leading-5 text-gray-600 transition-all duration-200 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    >
                      Cancel Subscription
                    </button>
                  </div>
                </div>

                <hr className="mt-6 border-gray-200" />

                <div className="mt-4 sm:flex sm:items-center sm:justify-between">
                  <p className="text-sm font-medium text-gray-900">
                    Your next payment is{" "}
                    <span className="font-bold">$59.00 USD</span>, to be charged
                    on <span className="font-bold">April 08, 2022</span>
                  </p>

                  <p className="mt-2 text-sm font-medium text-gray-500 sm:mt-0">
                    Your payment will be automatically renewed each month
                  </p>
                </div>

                <div className="mt-8 bg-white border border-gray-200 rounded-xl">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-x-24 gap-y-8">
                      <div className="lg:col-span-2">
                        <p className="text-base font-bold text-gray-900">
                          Payment Method
                        </p>
                        <p className="mt-2 text-sm font-medium text-gray-500">
                          Choose your preferred payment method for making future
                          payments
                        </p>
                      </div>

                      <div className="lg:col-span-3">
                        <div className="space-y-5">
                          <div className="relative overflow-hidden border border-primary-600 rounded-xl bg-primary-50">
                            <div className="absolute top-4 right-4">
                              <svg
                                className="w-6 h-6 text-primary-600"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </div>

                            <div className="relative px-4 py-5">
                              <div className="flex items-start">
                                <img
                                  className="flex-shrink-0 w-auto h-6 rounded-md"
                                  src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/select-box/3/visa-logo.png"
                                  alt=""
                                />

                                <div className="ml-4">
                                  <p className="text-sm font-bold text-gray-900">
                                    Visa ending 4331
                                  </p>
                                  <p className="mt-1 text-sm font-medium text-gray-500">
                                    Expiry 09/2024
                                  </p>

                                  <div className="flex items-center mt-4 space-x-6">
                                    <a
                                      href="#"
                                      title=""
                                      className="text-sm font-semibold text-gray-400 transition-all duration-200 rounded-md cursor-not-allowed pointer-events-none hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
                                    >
                                      Primary Card
                                    </a>

                                    <a
                                      href="#"
                                      title=""
                                      className="text-sm font-semibold text-primary-600 transition-all duration-200 rounded-md hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600"
                                    >
                                      {" "}
                                      Edit{" "}
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="relative overflow-hidden bg-white border border-gray-200 rounded-xl">
                            <div className="absolute top-4 right-4">
                              <svg
                                className="w-6 h-6 text-primary-600 opacity-0"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </div>

                            <div className="relative px-4 py-5">
                              <div className="flex items-start">
                                <img
                                  className="flex-shrink-0 w-auto h-6 rounded-md"
                                  src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/select-box/3/visa-logo.png"
                                  alt=""
                                />

                                <div className="ml-4">
                                  <p className="text-sm font-bold text-gray-900">
                                    Visa ending 5442
                                  </p>
                                  <p className="mt-1 text-sm font-medium text-gray-500">
                                    Expiry 08/2023
                                  </p>

                                  <div className="flex items-center mt-4 space-x-6">
                                    <a
                                      href="#"
                                      title=""
                                      className="text-sm font-semibold text-gray-600 transition-all duration-200 rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
                                    >
                                      {" "}
                                      Set as Primary{" "}
                                    </a>

                                    <a
                                      href="#"
                                      title=""
                                      className="text-sm font-semibold text-primary-600 transition-all duration-200 rounded-md hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600"
                                    >
                                      {" "}
                                      Edit{" "}
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6">
                          <button
                            type="button"
                            className="inline-flex items-center justify-center text-sm font-medium leading-5 text-gray-600 transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 hover:text-gray-900"
                          >
                            <svg
                              className="w-4 h-4 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                              />
                            </svg>
                            Add New Payment Method
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="sm:flex sm:items-center sm:justify-between">
                    <p className="flex-1 text-base font-bold text-gray-900">
                      Latest Transactions
                    </p>

                    <div className="mt-4 sm:mt-0">
                      <div className="flex items-center justify-start space-x-5 sm:justify-end">
                        <div className="flex items-center space-x-1">
                          <label
                            for=""
                            className="flex-shrink-0 text-sm font-medium text-gray-900"
                          >
                            {" "}
                            Sort by:{" "}
                          </label>
                          <select
                            name=""
                            id=""
                            className="block w-full py-0 pl-0 pr-10 text-base bg-transparent border-none rounded-lg focus:outline-none focus:ring-0 sm:text-sm"
                          >
                            <option>Recent</option>
                          </select>
                        </div>

                        <button
                          type="button"
                          className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        >
                          <svg
                            className="w-4 h-4 mr-1 -ml-1"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          Export to CSV
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 ring-1 ring-gray-300 rounded-2xl">
                    <table className="min-w-full lg:divide-y lg:divide-gray-200">
                      <thead className="hidden lg:table-header-group">
                        <tr>
                          <td
                            width="50%"
                            className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal"
                          >
                            Invoice
                          </td>

                          <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">
                            Date
                          </td>

                          <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">
                            Amount
                          </td>

                          <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal">
                            Status
                          </td>
                        </tr>
                      </thead>

                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td
                            width="50%"
                            className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap"
                          >
                            Standard Plan - Feb 2022
                            <div className="mt-1 lg:hidden">
                              <p className="font-medium text-gray-500">
                                07 February, 2022
                              </p>
                            </div>
                          </td>

                          <td className="hidden px-6 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                            07 February, 2022
                          </td>

                          <td className="px-6 py-4 text-sm font-bold text-right text-gray-900 lg:text-left whitespace-nowrap">
                            $59.00
                            <div className="flex items-center justify-end mt-1 font-medium lg:hidden">
                              <svg
                                className="mr-1.5 h-2.5 w-2.5 text-green-500"
                                fill="currentColor"
                                viewBox="0 0 8 8"
                              >
                                <circle cx="4" cy="4" r="3"></circle>
                              </svg>
                              Complete
                            </div>
                          </td>

                          <td className="hidden px-6 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                            <div className="inline-flex items-center">
                              <svg
                                className="mr-1.5 h-2.5 w-2.5 text-green-500"
                                fill="currentColor"
                                viewBox="0 0 8 8"
                              >
                                <circle cx="4" cy="4" r="3"></circle>
                              </svg>
                              Complete
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td
                            width="50%"
                            className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap"
                          >
                            Standard Plan - Jan 2022
                            <div className="mt-1 lg:hidden">
                              <p className="font-medium text-gray-500">
                                09 January, 2022
                              </p>
                            </div>
                          </td>

                          <td className="hidden px-6 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                            09 January, 2022
                          </td>

                          <td className="px-6 py-4 text-sm font-bold text-right text-gray-900 lg:text-left whitespace-nowrap">
                            $59.00
                            <div className="flex items-center justify-end mt-1 font-medium lg:hidden">
                              <svg
                                className="mr-1.5 h-2.5 w-2.5 text-red-500"
                                fill="currentColor"
                                viewBox="0 0 8 8"
                              >
                                <circle cx="4" cy="4" r="3"></circle>
                              </svg>
                              Canceled
                            </div>
                          </td>

                          <td className="hidden px-6 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                            <div className="inline-flex items-center">
                              <svg
                                className="mr-1.5 h-2.5 w-2.5 text-red-500"
                                fill="currentColor"
                                viewBox="0 0 8 8"
                              >
                                <circle cx="4" cy="4" r="3"></circle>
                              </svg>
                              Canceled
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td
                            width="50%"
                            className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap"
                          >
                            Basic Plan - Dec 2021
                            <div className="mt-1 lg:hidden">
                              <p className="font-medium text-gray-500">
                                15 December, 2021
                              </p>
                            </div>
                          </td>

                          <td className="hidden px-6 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                            15 December, 2021
                          </td>

                          <td className="px-6 py-4 text-sm font-bold text-right text-gray-900 lg:text-left whitespace-nowrap">
                            $29.00
                            <div className="flex items-center justify-end mt-1 font-medium lg:hidden">
                              <svg
                                className="mr-1.5 h-2.5 w-2.5 text-green-500"
                                fill="currentColor"
                                viewBox="0 0 8 8"
                              >
                                <circle cx="4" cy="4" r="3"></circle>
                              </svg>
                              Complete
                            </div>
                          </td>

                          <td className="hidden px-6 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                            <div className="inline-flex items-center">
                              <svg
                                className="mr-1.5 h-2.5 w-2.5 text-green-500"
                                fill="currentColor"
                                viewBox="0 0 8 8"
                              >
                                <circle cx="4" cy="4" r="3"></circle>
                              </svg>
                              Complete
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td
                            width="50%"
                            className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap"
                          >
                            Basic Plan - Nov 2021
                            <div className="mt-1 lg:hidden">
                              <p className="font-medium text-gray-500">
                                14 November, 2021
                              </p>
                            </div>
                          </td>

                          <td className="hidden px-6 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                            14 November, 2021
                          </td>

                          <td className="px-6 py-4 text-sm font-bold text-right text-gray-900 lg:text-left whitespace-nowrap">
                            $29.00
                            <div className="flex items-center justify-end mt-1 font-medium lg:hidden">
                              <svg
                                className="mr-1.5 h-2.5 w-2.5 text-yellow-500"
                                fill="currentColor"
                                viewBox="0 0 8 8"
                              >
                                <circle cx="4" cy="4" r="3"></circle>
                              </svg>
                              Pending
                            </div>
                          </td>

                          <td className="hidden px-6 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                            <div className="inline-flex items-center">
                              <svg
                                className="mr-1.5 h-2.5 w-2.5 text-yellow-500"
                                fill="currentColor"
                                viewBox="0 0 8 8"
                              >
                                <circle cx="4" cy="4" r="3"></circle>
                              </svg>
                              Pending
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td
                            width="50%"
                            className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap"
                          >
                            Basic Plan - Oct 2021
                            <div className="mt-1 lg:hidden">
                              <p className="font-medium text-gray-500">
                                15 October, 2021
                              </p>
                            </div>
                          </td>

                          <td className="hidden px-6 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                            15 October, 2021
                          </td>

                          <td className="px-6 py-4 text-sm font-bold text-right text-gray-900 lg:text-left whitespace-nowrap">
                            $29.00
                            <div className="flex items-center justify-end mt-1 font-medium lg:hidden">
                              <svg
                                className="mr-1.5 h-2.5 w-2.5 text-green-500"
                                fill="currentColor"
                                viewBox="0 0 8 8"
                              >
                                <circle cx="4" cy="4" r="3"></circle>
                              </svg>
                              Complete
                            </div>
                          </td>

                          <td className="hidden px-6 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                            <div className="inline-flex items-center">
                              <svg
                                className="mr-1.5 h-2.5 w-2.5 text-green-500"
                                fill="currentColor"
                                viewBox="0 0 8 8"
                              >
                                <circle cx="4" cy="4" r="3"></circle>
                              </svg>
                              Complete
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div> */}
      </div>
    </div>
  );
};
export default ComponentName;
