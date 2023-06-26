import { format } from "date-fns";
export const isNotSigned = localStorage.getItem("uid") ? false : true;

export function kCalculatePrice(duration, pricePerHour, fee = 5) {
  // console.log(duration);
  const totalMinutes =
    duration.days * 24 * 60 + duration.hours * 60 + duration.minutes;
  const totalPrice = (totalMinutes / 60) * pricePerHour;
  const final = totalPrice + fee;
  return parseFloat(final.toFixed(2));
}
export const kFormatDate = (date) =>
  format(new Date(date), "MMM dd, yyy hh:mm a");

export function kFormatDuration(duration) {
  let d = `${duration.days > 0 ? `${duration.days} days` : ""} ${
    duration.hours > 0 ? `${duration.hours} hours` : ""
  } ${duration.minutes > 0 ? `${duration.minutes} min` : ""}`;
  return d;
}

export const kTerms =
  "Acceptance of Terms By using the IPark web app, you agree to comply with and be bound by these terms and conditions. \nIf you do not agree to these terms, you should not use the app. \nUser Responsibilities \nYou are responsible for providing accurate and up-to-date information when using the app. \nYou are responsible for maintaining the security and confidentiality of your account credentials. \nYou agree not to use the app for any unlawful or unauthorized purposes. \nParking Reservations \nIPark allows users to make parking reservations at participating parking facilities. \nThe availability of parking spots is subject to change and cannot be guaranteed. \nReservations are subject to the terms and conditions of the specific parking facility. \nPayment and Refunds \nPayment for parking reservations is processed securely through the app. \nRefunds are subject to the cancellation policy of the specific parking facility. \nIPark is not responsible for any disputes or issues related to payments or refunds. \nLimitation of Liability IPark strives to provide accurate and reliable information but does not guarantee the accuracy or completeness of the information provided. \nIPark is not liable for any damages or losses incurred as a result of using the app or relying on the information provided. \nIntellectual Property All intellectual property rights related to the IPark app, including logos, trademarks, and content, belong to IPark or its licensors. \nYou may not use or reproduce any of the intellectual property without explicit permission from IPark. \nPrivacy\nIPark collects and processes personal data in accordance with its privacy policy. \nBy using the app, you consent to the collection, use, and disclosure of your personal data as described in the privacy policy. \nModifications to the Terms IPark reserves the right to modify or update these terms and conditions at any time without prior notice. \nIt is your responsibility to review the terms periodically for any changes. \nGoverning Law These terms and conditions are governed by and construed in accordance with the laws of [your jurisdiction]. \nAny disputes arising from or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of [your jurisdiction].";
