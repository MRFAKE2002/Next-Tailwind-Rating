import React, { Dispatch, SetStateAction } from "react";

//! Type
type Props = {
  index: number;
  rating: number;
  // setRating: Dispatch<SetStateAction<number>>;
  onRatingChange: (startIndex: number, isLeftHalf: boolean) => void;
};

function Star({ index, rating, onRatingChange }: Props) {
  //! Custom Function

  const handleLeftClick = () => {
    onRatingChange(index, true);
  };

  const handleRightClick = () => {
    onRatingChange(index, false);
  };

  const isFullStar = rating >= index + 1;

  const isHalfStar = rating >= index + 0.5 && rating < index + 1;

  const starClass = isFullStar
    ? "bxs-star"
    : isHalfStar
    ? "bxs-star-half"
    : "bx-star";

  return (
    <div className="relative">
      <i
        className={`bx ${starClass} text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-green-400`}
      ></i>
      <button
        className="absolute top-0 left-0 w-1/2 h-full cursor-pointer bg-red-500/60"
        onClick={handleLeftClick}
      ></button>
      <button
        className="absolute top-0 right-0 w-1/2 h-full cursor-pointer bg-red-500/80"
        onClick={handleRightClick}
      ></button>
    </div>
  );
}

export default Star;
