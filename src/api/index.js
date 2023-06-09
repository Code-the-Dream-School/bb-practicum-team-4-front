import axios from "axios";

const BASEURL = "http://localhost:8000/api/v1/";
// const BASEURL = `${process.env.REACT_APP_BACKEND_URL}/api/v1/`;
// const BASEURL =
// 	"https://ctd-practicum-team4-back.onrender.com/api/v1/";

// note: not used, but could be used with GET with params
const getData = async (url, params) => {
	try {
		let res = await axios.get(url, params);
		let data = await res.data;
		return data;
	} catch (error) {
		console.log(error, `error - getData in ${url} route`);
	}
};

const getAllData = async (url) => {
	try {
		let res = await axios.get(url);
		let data = await res.data;
		return data;
	} catch (error) {
		console.log(
			error,
			`error - getAllData in ${url} route`
		);
	}
};

const fetchData = async (url, method, body) => {
	fetch(url, {
		method: method,
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
	})
		.then((response) => response.text())
		.then((result) => console.log(result))
		.catch((error) => console.log("error", error));
};

export { BASEURL, getData, getAllData, fetchData };
