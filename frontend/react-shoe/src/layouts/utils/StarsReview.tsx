import React from "react";
import { FaStar as FaStarIcon, FaStarHalfAlt as FaStarHalfAltIcon, FaRegStar as FaRegStarIcon } from "react-icons/fa";

interface StarsReviewProps {
  rating: number;
  reviews?: number;
  size?: number;
}

const FaStar = FaStarIcon as React.FC<{ size?: number; className?: string }>;
const FaStarHalfAlt = FaStarHalfAltIcon as React.FC<{ size?: number; className?: string }>;
const FaRegStar = FaRegStarIcon as React.FC<{ size?: number; className?: string }>;

export const StarsReview: React.FC<StarsReviewProps> = ({ rating, reviews, size = 20 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      {/* full stars */}
      {Array.from({ length: fullStars }).map((_, i) => (
        <FaStar key={`full-${i}`} size={size} className="text-warning" />
      ))}

      {/* half star */}
      {hasHalfStar && <FaStarHalfAlt size={size} className="text-warning" />}

      {/* empty stars */}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <FaRegStar key={`empty-${i}`} size={size} className="text-muted" />
      ))}

      {/* reviews count */}
      {reviews !== undefined && (
        <span className="text-sm text-gray-600 ml-2">({reviews})</span>
      )}
    </div>
  );
};
