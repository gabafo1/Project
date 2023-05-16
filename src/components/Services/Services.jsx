import React from 'react';
import baas from '../../asset/cloudicon/baasico.png';
import caas from '../../asset/cloudicon/colico.png';
import { ArrowSmRightIcon } from '@heroicons/react/outline';

function Service() {
  return (
    <div className="service component__space py-16 bg-[#fbfbff] w-full h-full" id="Services">
      <div className="heading">
        <h1 className="text-6xl text-center font-bold mb-10">Our services</h1>
        <p className="text-center leading-6">
        Cloudflex's comprehensive range of cloud computing solutions is specifically crafted <br/>to support you at every stage of your business journey. Whether you prefer a hands-on
        </p>
        <p className="text-center items-center leading-6">
          approach or require assistance from our team of experts.
        </p>
      </div>

      <div className="justify-center">
        <div className="flex flex-wrap justify-center">

          <div className="w-full md:w-1/2 lg:w-1/4 m-6">
            <div className="service__box rounded-lg border drop-shadow-lg bg-white p-8">
              <div className="icon">
                <img src={baas} alt='' className='w-14 h-full mb-2 object-cover' />
              </div>
              <div className="service__meta">
                <h1 className="text-lg font-semibold mb-2 ">
                  Backup as a Service
                </h1>
                <p className="text-sm leading-5">
                  A service designed using enterprise-class technology to provide a reliable
                </p>
                <p className="text-sm leading-5">
                  backup and recovery service that is easy to deploy; save cost on storage hardware and space.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 m-6">
            <div className="service__box rounded-lg border drop-shadow-lg bg-white p-8">
              <div className="icon">
                <img src={caas} alt='' className='w-14 h-full mb-2 object-cover' />
              </div>
              <div className="service__meta">
                <h1 className="text-lg font-semibold mb-2 ">
                  Colocation
                </h1>
                <p className="text-sm leading-5">
                  This is the best choice for clients
                </p>
                <p className="text-sm leading-5">
                  who want independence of owning their own server(s); We provision rack-space for your devices in a purpose-built enterprise facility.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 m-6">
            <div className="service__box rounded-lg border drop-shadow-lg bg-white p-8">
              <div className="icon">
                <img src={caas} alt='' className='w-14 h-full mb-2 object-cover' />
              </div>
              <div className="service__meta">
                <h1 className="text-lg font-semibold mb-2 ">
                  Colocation
                </h1>
                <p className="text-sm leading-5">
                  This is the best choice for clients
                </p>
                <p className="text-sm leading-5">
                  who want independence of owning their own server(s); We provision rack-space for your devices in a purpose-built enterprise facility.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 m-6">
            <div className="service__box rounded-lg border drop-shadow-lg bg-white p-8">
              <div className="icon">
                <img src={caas} alt='' className='w-14 h-full mb-2 object-cover' />
              </div>
              <div className="service__meta">
                <h1 className="text-lg font-semibold mb-2 ">
                  Colocation
                </h1>
                <p className="text-sm leading-5">
                  This is the best choice for clients
                </p>
                <p className="text-sm leading-5">
                  who want independence of owning their own server(s); We provision rack-space for your devices in a purpose-built enterprise facility.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 m-6">
            <div className="service__box rounded-lg border drop-shadow-lg bg-white p-8">
              <div className="icon">
                <img src={caas} alt='' className='w-14 h-full mb-2 object-cover' />
              </div>
              <div className="service__meta">
                <h1 className="text-lg font-semibold mb-2 ">
                  Colocation
                </h1>
                <p className="text-sm leading-5">
                  This is the best choice for clients
                </p>
                <p className="text-sm leading-5">
                  who want independence of owning their own server(s); We provision rack-space for your devices in a purpose-built enterprise facility.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 m-6">
            <div className="service__box rounded-lg border drop-shadow-lg bg-white p-8">
              <div className="icon">
                <img src={caas} alt='' className='w-14 h-full mb-2 object-cover' />
              </div>
              <div className="service__meta">
                <h1 className="text-lg font-semibold mb-2 ">
                  Colocation
                </h1>
                <p className="text-sm leading-5">
                  This is the best choice for clients
                </p>
                <p className="text-sm leading-5">
                  who want independence of owning their own server(s); We provision rack-space for your devices in a purpose-built enterprise facility.
                </p>
              </div>
            </div>
          </div>
          {/* Repeat the above code for other service boxes */}
          
        </div>
        <div className='grid place-items-center py-4 '>
          <p className='text-blue-600 flex px-7 py-5 rounded-full text-2xl'>See all<ArrowSmRightIcon className='w-9 transition duration-300 ease hover:transform hover:translate-x-3 transition-duration: 0.5s' /></p>
        </div>
      </div>
    </div>
  );
}

export default Service;