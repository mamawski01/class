import toast from "react-hot-toast";
import { convertToJson } from "../../utils/helpers";

function trimStrings(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "string") {
      obj[key] = obj[key].trim();
    }
  }
  return obj;
}

export async function onSubmitForm(data, onSubmitRule) {
  if (data.password !== data.repeatPassword) {
    toast.error("Passwords do not match");
    return null;
  }

  const trimData = trimStrings(data);

  if (data.password === data.repeatPassword) {
    if (onSubmitRule === "file") {
      const finalData = new FormData();
      for (const key in data) {
        if (typeof data[key] === "object") {
          finalData.append(key, data[key][0]);
        } else {
          finalData.append(key, trimData[key]);
        }
      }
      return finalData;
    }

    if (onSubmitRule === "simple/textOnly") {
      return trimData;
    }
  }

  if (onSubmitRule === "attendanceUpload") {
    return convertToJson(trimData.attendanceUpload[0]);
  }

  if (onSubmitRule === "attUserDefScheduleBEGetOne") {
    const transformedDefaultVal = {
      ...trimData,
      days: Array(7)
        .fill()
        .map((_, index) => {
          const dayIndex = index + 1;
          return {
            timeIn: trimData[`timeIn${dayIndex}`],
            timeOut: trimData[`timeOut${dayIndex}`],
            notes: trimData[`notes${dayIndex}`],
            day: trimData[`day${dayIndex}`],
          };
        }),
    };

    return transformedDefaultVal;
  }
}
