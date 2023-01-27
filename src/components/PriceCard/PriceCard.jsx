import React from "react";

const PriceCard = ({ type }) => {
  if (type === "standard") {
    return (
      <div className="py-8 scale-105 text-center border-purple-500 border-[0.90rem] rounded-xl">
        <div className="mx-8 mb-12 space-y-3">
          <h3 className="mb-10 uppercase">standard</h3>
          <h1 className="text-5xl">200GB</h1>
          <p>$3.99/month</p>
          <button className="px-6 py-3 bg-purple-500 rounded-lg outline outline-2 outline-purple-500">
            Purchase
          </button>
        </div>
        {/* Border */}
        <div className="w-full my-8 border-t border-slate-700"></div>
        {/* Benefits */}
        <div className="mx-8 space-y-1">
          <div className="flex space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 12l5 5l10 -10"></path>
            </svg>
            <p className="text-sm">200 GB of storage</p>
          </div>
          <div className="flex space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 12l5 5l10 -10"></path>
            </svg>
            <p className="text-sm">Option to add members</p>
          </div>
          <div className="flex space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 12l5 5l10 -10"></path>
            </svg>
            <p className="text-sm">Extra member benetifs</p>
          </div>
        </div>
      </div>
    );
  } else  {
    return (
      <div className="py-8 text-center border-slate-500 border-[0.90rem] rounded-xl">
        <div className="mx-8 mb-12 space-y-3">
          <h3 className="mb-10 uppercase">{type=== 'basic' ? 'Basic' : 'premium'}</h3>
          <h1 className="text-5xl">{type=== 'basic' ? '100GB' : '2TB'}</h1>
          <p>${type=== 'basic' ? 1 : 8}.99/month</p>
          <button className="px-6 py-3 rounded-lg outline outline-2 outline-purple-500">
            Purchase
          </button>
        </div>
        {/* Border */}
        <div className="w-full my-8 border-t border-slate-700"></div>
        {/* Benefits */}
        <div className="mx-8 space-y-1">
          <div className="flex space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 12l5 5l10 -10"></path>
            </svg>
            <p className="text-sm">{type=== 'basic' ? '100GB' : '2TB'} of storage</p>
          </div>
          <div className="flex space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 12l5 5l10 -10"></path>
            </svg>
            <p className="text-sm">Option to add members</p>
          </div>
          <div className="flex space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 12l5 5l10 -10"></path>
            </svg>
            <p className="text-sm">Extra member benetifs</p>
          </div>
        </div>
      </div>
    );
  }
};

export default PriceCard;
