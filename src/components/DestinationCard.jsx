
import Image from "next/image";
import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";
import { LuArrowUpRight, LuCalendarDays } from "react-icons/lu";

const DestinationCard = ({ destination }) => {
  const {
    _id,
    imageUrl,
    destinationName,
    country,
    duration,
    price,
  } = destination;

  return (
   <div className="">
     <div className="group  card overflow-hidden rounded-xl bg-white p-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Image Section */}
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          width={800}
          height={500}
          alt={destinationName || "Travel destination"}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Location */}
      <div className="mt-4 flex items-center gap-2 text-gray-500">
        <IoLocationOutline className="shrink-0 text-xl" />
        <span className="text-base">{country}</span>
      </div>

      {/* Destination Name and Price */}
      <div className="mt-2 flex items-start justify-between gap-3">
        <h2 className="min-w-0 text-xl font-semibold leading-snug text-gray-900">
          {destinationName}
        </h2>

        <p className="shrink-0 text-xl font-bold text-gray-900">
          ${price}
          <span className="text-sm font-normal text-gray-500">
            /Person
          </span>
        </p>
      </div>

      {/* Duration */}
      <div className="mt-4 flex items-center gap-2 text-gray-500">
        <LuCalendarDays className="shrink-0 text-xl" />
        <span className="text-base">
          {duration} Days/Nights
        </span>
      </div>

      {/* Booking Link */}
     <Link href={`/destinations/${_id}`}>
      <button className="group flex cursor-pointer items-center gap-2 border-b-2 border-cyan-500 pb-1 font-semibold text-cyan-600 transition-colors hover:border-cyan-700 hover:text-cyan-700">
        BOOK NOW
        <LuArrowUpRight className="text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </button>
    </Link>

    </div>
   </div>
  );
};

export default DestinationCard;
