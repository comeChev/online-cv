export type Color =
  | "purple"
  | "blue"
  | "green"
  | "yellow"
  | "orange"
  | "red"
  | "pink";

export type ColorClass = [string, string, string];

export function getColor(color: Color) {
  let colorClass: ColorClass = ["", "", ""];
  switch (color) {
    case "purple":
      colorClass = ["text-purple-600", "text-purple-400", "text-purple-300"];
      break;
    case "blue":
      colorClass = ["text-blue-600", "text-blue-400", "text-blue-300"];
      break;
    case "green":
      colorClass = ["text-green-600", "text-green-400", "text-green-300"];
      break;
    case "yellow":
      colorClass = ["text-yellow-600", "text-yellow-400", "text-yellow-300"];
      break;
    case "orange":
      colorClass = ["text-orange-600", "text-orange-400", "text-orange-300"];
      break;
    case "red":
      colorClass = ["text-red-600", "text-red-400", "text-red-300"];
      break;
    case "pink":
      colorClass = ["text-pink-600", "text-pink-400", "text-pink-300"];
      break;
    default:
      colorClass = ["text-gray-600", "text-gray-400", "text-gray-300"];
  }
  return colorClass;
}

export function getAge(birthDate: string) {
  const today = new Date();

  const birthDateYear = new Date(birthDate).getFullYear();
  const birthDateMonth = new Date(birthDate).getMonth();
  const birthDateDay = new Date(birthDate).getDate();

  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayDay = today.getDate();

  let age = todayYear - birthDateYear;
  if (todayMonth < birthDateMonth - 1) {
    age--;
  }
  if (birthDateMonth - 1 === todayMonth && todayDay < birthDateDay) {
    age--;
  }
  return age;
}

export function getDateBetween(from: string, to: string) {
  const fromDate = new Date(from);
  const toDate = new Date(to);

  const fromMonth = fromDate
    .toLocaleString("fr-FR", { month: "long" })
    .toUpperCase();
  const toMonth = toDate
    .toLocaleString("fr-FR", { month: "long" })
    .toUpperCase();

  return `de ${fromMonth} ${fromDate.getFullYear()} à ${toMonth} ${toDate.getFullYear()}`;
}

export function getStringPhone(phone: string) {
  const phoneArray = phone.split("");
  let phoneString = "";
  phoneArray.forEach((char, index) => {
    if (index === 5 || index === 7 || index === 9) {
      phoneString += `${char} `;
    } else if (index === 3) {
      phoneString += ` ${char} `;
    } else {
      phoneString += char;
    }
  });
  return phoneString;
}
