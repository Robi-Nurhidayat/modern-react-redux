import React from "react";
import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo = ({ time }) => {
  const date = parseISO(time);
  const timeAgo = formatDistanceToNow(date);
  return <p className="text-gray-400 font-normal">{timeAgo}</p>;
};

export default TimeAgo;
