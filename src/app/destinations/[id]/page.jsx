import {
  ArrowRight,
  ArrowLeft,
  Pencil,
  MapPin,
  Star,
  CalendarDays,
  Trash2,
  Check,
} from "lucide-react";
import { Button, Input } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import Link from "next/link";
import { EditModal } from "@/components/EditModal";
import { DeleteDialogue } from "@/components/DeleteDialogue";

const DestinationDetailsPage =async ({params}) => {
    const {id} = await params;
    console.log(id); 
    const res = await fetch(`http://localhost:5000/destination/${id}`);
    const destination = await res.json();
      const {
    _id,
    departureDate,
    imageUrl,
    destinationName,
    country,
    duration,
    price,
    description,
  } = destination;

    return (
        <div>
            <div className="min-h-screen bg-base-100 px-4 py-5 sm:px-6 lg:px-10">
  <div className="mx-auto max-w-7xl">

    {/* Top Navigation */}
    <div className="mb-5 flex flex-wrap items-center justify-between gap-3">

      <Link href='/destinations'>
      <button  className="inline-flex items-center gap-2 text-sm font-medium text-base-content/60 transition hover:text-primary" >
        <ArrowLeft size={17} />
        Back to Destinations
      </button>
      </Link>

      <div className="flex items-center gap-3">

       <EditModal destination={destination}></EditModal>
        <DeleteDialogue destination={destination}></DeleteDialogue>
      </div>
    </div>

    {/* Hero Banner */}
    <div className="relative w-full overflow-hidden rounded-xl">
  <Image
    src={imageUrl}
    alt={destinationName}
    width={1600}
    height={700}
    sizes="(max-width: 768px) 100vw, 1200px"
    className="mx-auto h-[230px] w-full object-cover sm:h-[320px] lg:h-[390px]"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
</div>

    {/* Main Content */}
    <div className="mt-7 grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-10">

      {/* Destination Information */}
      <div className="min-w-0">

        <div className="mb-2 flex items-center gap-2 text-sm text-base-content/60">
          <MapPin size={15} />
          <span>{country}</span>
        </div>

        <h1 className="text-3xl font-semibold tracking-tight text-base-content sm:text-4xl lg:text-5xl">
          {destinationName}
        </h1>

        {/* Rating & Duration */}
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
          <div className="flex items-center gap-1.5">
            <Star
              size={17}
              fill="currentColor"
              className="text-success"
            />
            <span className="font-semibold">Rating</span>
            <span className="text-base-content/55">
              review
            </span>
          </div>

          <div className="flex items-center gap-2 text-base-content/70">
            <CalendarDays size={15} />
            <span className="font-medium">{duration}</span>
          </div>
        </div>

        {/* Overview */}
        <div className="mt-7">
          <h2 className="mb-3 text-xl font-semibold tracking-tight">
            Overview
          </h2>
        </div>

        {/* Highlights */}
        <div className="mt-6">
          <h2 className="mb-4 text-sm text-justify tracking-tight">
            {description}
          </h2>

          <p className="mb-4 text-sm leading-6 text-base-content/65">
       
          </p>

        
        </div>
      </div>

      {/* Booking Card */}
      <div className="w-full lg:sticky lg:top-6">
        <div className="card rounded-xl border border-base-200 bg-base-100 shadow-md">
          <div className="card-body gap-4 p-5 sm:p-6">

            <div>
              <p className="text-xs font-medium text-base-content/55">
                Starting from
              </p>

              <p className="mt-1 text-3xl font-bold tracking-tight text-primary">
                ${Number(price).toLocaleString("en-US")}
              </p>

              <p className="mt-1 text-xs text-base-content/55">
                per person
              </p>
            </div>

            <div className="divider my-0" />

            {/* Travel Date */}
           {/* Travel Date */}
            <div className="w-full">
            <Input
                type="date"
                aria-label="Travel date"
                defaultValue={departureDate}
                variant="bordered"
                radius="sm"
                className="w-full"
            />
            </div>

            {/* Booking Button */}
            <Button
              color="primary"
              radius="sm"
              size="lg"
              endContent={<ArrowRight size={17} />}
              className="w-full bg-cyan-600 font-semibold text-white hover:bg-cyan-700"
            >
              Book Now
            </Button>

            {/* Benefits */}
            <div className="mt-1 space-y-3">
              {[
                "Free cancellation up to 7 days",
                "Travel insurance included",
                "24/7 customer support",
              ].map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-2 text-xs text-base-content/65"
                >
                  <Check
                    size={15}
                    className="shrink-0 text-success"
                  />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</div>
        </div>
    );
};

export default DestinationDetailsPage;