import Swal from "sweetalert2";
import dayjs from "dayjs";

export function swalAlert(
  title = "Are you sure?",
  text = "You won't be able to revert this!",
  confirmButtonText = "Yes, delete it!",
) {
  const confirmDelete = Swal.fire({
    title: title,
    text: text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: confirmButtonText,
    customClass: {
      popup: "bg-slate-100/80 backdrop-blur-sm",
    },
  });
  return confirmDelete;
}

export function calculateAge(birthdate) {
  const birthDate = new Date(birthdate);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export function formatFontLabel(font = "") {
  return (
    font.charAt(0).toUpperCase() + font.slice(1).replace(/([A-Z])/g, " $1")
  );
}

export function cap1stLetterEachWord(str) {
  return str?.replace(/\b\w/g, (char) => char.toUpperCase());
}

export function cap1stLetter(str) {
  return str?.charAt(0).toUpperCase() + str?.slice(1);
}

export function onHoverBgColor(color) {
  if (color === "red") return "hover:bg-red-400";
  if (color === "blue") return "hover:bg-blue-700";
  if (color === "yellow") return "hover:bg-yellow-600";
  if (color === "green") return "hover:bg-green-600";
  if (color === "indigo") return "hover:bg-indigo-600";
  return "hover:bg-gray-700";
}

export function convertToJson(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const content = e.target.result;
      const lines = content.split("\n");
      const newArray = lines.map((element) => element.replace("\r", ""));
      const headers = newArray.map((element) => element.split("\t"));
      const jsonData = headers.map((row) => {
        const obj = {};
        row.forEach((value, i) => {
          const key = headers[0][i];
          obj[key] = value;
        });
        return obj;
      });
      const reName = jsonData.map(({ No, UserId, ...rest }) => ({
        uniqueData: No,
        groupId: UserId,
        ...rest,
      }));

      resolve(reName.splice(1, jsonData.length - 2));
    };

    reader.onerror = function (e) {
      reject(e);
    };

    reader.readAsText(file);
  });
}

export function timeArr(defVal) {
  let timeArray = [];

  for (let hour = 0; hour < 24; hour++) {
    for (let minute of [0, 30]) {
      let period = hour < 12 ? "am" : "pm";
      let hour12 = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
      let time = `${hour12.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")} ${period}`;
      timeArray.push(time);
    }
  }
  return [defVal, "day-off", ...timeArray];
}

export function finalDatesArr(dateArrValue) {
  const dateArr = [];
  for (
    let date = dayjs(dateArrValue.startDate);
    date.isSameOrBefore(dayjs(dateArrValue.endDate));
    date = date.add(1, "day")
  ) {
    dateArr.push(date.format("YYYY-MM-DD"));
  }
  return dateArr;
}
