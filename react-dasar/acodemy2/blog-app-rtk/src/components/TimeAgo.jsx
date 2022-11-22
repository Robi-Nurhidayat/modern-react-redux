import React from "react";
import { formatDistanceToNow, parseISO } from "date-fns";

const TimeAgo = ({ timestamp }) => {
  const date = parseISO(timestamp);
  const timeAgo = formatDistanceToNow(date);
  return (
    <>
      <p className="text-sm text-gray-500">{timeAgo}</p>
    </>
  );
};

export default TimeAgo;
