export const getBackgroundClass = (status) => {
  if (status === "upcoming") {
    return "bg-purple-custom";
  } else if (status === "ongoing") {
    return "bg-orange-custom";
  } else if (status === "held" || status === "canceled") {
    return "bg-gray-custom";
  } else {
    return ""; // Return an empty string for default or unknown status
  }
};
