const CURRENT_YEAR = new Date().getFullYear();
const AUTHOR_NAME = "Veronika Kolesnikova";

import { footer } from "../../tailwindStyles";

export const Footer = () => {
  return (
    <div className={footer}>
      <p>&copy; {CURRENT_YEAR} {AUTHOR_NAME}</p>
    </div>
  )
}
