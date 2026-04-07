// Add this to hide a table cell on small screens
const HIDE_ON_TABLET_AND_DOWN = "hidden md:table-cell";

const responsiveThStyle =
  "table-cell font-medium md:font-bold lg:px-4 sm:px-none py-2 border-b";

// Pass header name to determine if it should be hidden on small screens
export const hideHeaderOnTabletAndDown = (header: string) =>
  header === "Description" || header === "Account" ? HIDE_ON_TABLET_AND_DOWN : "";

export const getHeaderStyle = (header: string) =>
  `${responsiveThStyle} ${hideHeaderOnTabletAndDown(header)}`;
