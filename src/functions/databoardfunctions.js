import axios from "axios";
import { baseurl } from "../api/url";
export function datetoviewformat(date) {
  const varstore = new Date(Date.parse(date));
  return varstore.toUTCString().slice(5, 16);
}
export async function postrecord(body) {
  try {
    const response = await axios.post(
      `${baseurl}/travelEmission`,
      // "https://emissions-calculator-react.herokuapp.com/travelEmission",
      body
    );
    if (response.status === 201) {
      return { success: true, record: { _id: response.data._id, ...body } };
    }
  } catch (error) {
    // console.log({ error });
    return { success: false };
  }
}
export async function deleterecord(recordid) {
  // console.log({ recordid, name: "deletefunc" });
  try {
    const response = await axios.delete(
      `${baseurl}/travelEmission`,
      // "https://emissions-calculator-react.herokuapp.com/travelEmission",
      {
        data: { _id: recordid },
      }
    );
    if (response.status === 200) {
      return { success: true, deletionid: recordid };
    }
  } catch (error) {
    // console.log({ error });
    return { success: false };
  }
}
export async function updaterecord(body) {
  try {
    const response = await axios.put(
      `${baseurl}/travelEmission`,
      // "https://emissions-calculator-react.herokuapp.com/travelEmission",
      body
    );
    if (response.status === 200) {
      return { success: true, record: body };
    }
  } catch (error) {
    // console.log({ error });
    return { success: false };
  }
}
export async function postrecordc(body) {
  try {
    const response = await axios.post(
      `${baseurl}/cargoEmission`,
      // "https://emissions-calculator-react.herokuapp.com/cargoEmission",
      body
    );
    if (response.status === 201) {
      return { success: true, record: { _id: response.data._id, ...body } };
    }
  } catch (error) {
    // console.log({ error });
    return { success: false };
  }
}
export async function deleterecordc(recordid) {
  // console.log({ recordid, name: "deletefunc" });
  try {
    const response = await axios.delete(
      `${baseurl}/cargoEmission`,
      // "https://emissions-calculator-react.herokuapp.com/cargoEmission",
      {
        data: { _id: recordid },
      }
    );
    if (response.status === 200) {
      return { success: true, deletionid: recordid };
    }
  } catch (error) {
    // console.log({ error });
    return { success: false };
  }
}
export async function updaterecordc(body) {
  try {
    const response = await axios.put(
      `${baseurl}/cargoEmission`,
      // "https://emissions-calculator-react.herokuapp.com/cargoEmission",
      body
    );
    if (response.status === 200) {
      return { success: true, record: body };
    }
  } catch (error) {
    // console.log({ error });
    return { success: false };
  }
}
export async function postrecorde(body) {
  try {
    const response = await axios.post(
      `${baseurl}/electricityEmission`,
      // "https://emissions-calculator-react.herokuapp.com/electricityEmission",
      body
    );
    if (response.status === 201) {
      return { success: true, record: { _id: response.data._id, ...body } };
    }
  } catch (error) {
    // console.log({ error });
    return { success: false };
  }
}
export async function updaterecorde(body) {
  try {
    const response = await axios.put(
      `${baseurl}/electricityEmission`,
      // "https://emissions-calculator-react.herokuapp.com/electricityEmission",
      body
    );
    if (response.status === 200) {
      return { success: true, record: body };
    }
  } catch (error) {
    // console.log({ error });
    return { success: false };
  }
}
export async function deleterecorde(recordid) {
  // console.log({ recordid, name: "deletefunc" });
  try {
    const response = await axios.delete(
      `${baseurl}/electricityEmission`,
      // "https://emissions-calculator-react.herokuapp.com/electricityEmission",
      {
        data: { _id: recordid },
      }
    );
    if (response.status === 200) {
      return { success: true, deletionid: recordid };
    }
  } catch (error) {
    // console.log({ error });
    return { success: false };
  }
}
