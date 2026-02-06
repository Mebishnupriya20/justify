// Base URL for the backend API (override in `.env` with NEXT_PUBLIC_API_BASE).
// console.log(process.env.NEXT_PUBLIC_API_BASE)
// export const API_BASE =
//   process.env.NEXT_PUBLIC_API_BASE || "http://127.0.0.1:5000";

// export const API_BASE="https://supreme-happiness-v69p55rqpr452pwg9.github.dev"
export const API_BASE="http://127.0.0.1:5000"

// Map ML labels to user-friendly display names.
export const LEGAL_LABEL: Record<string, string> = {
  business: "Contact Contract / Commercial Lawyer",
  politics: "Contact Constitution / Government Lawyer",
  tech: "Contact Cyber / IT Lawyer",
  sport: "Contact Sports Law Lawyer",
  entertainment: "Contact Media / IP Lawyer",
};