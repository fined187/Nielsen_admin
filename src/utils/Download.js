/* eslint-disable */
import { forwardRef, useEffect, useImperativeHandle } from "react";
import { URL } from "../constants";

const Download = forwardRef((props, ref) => {

		function downloadMatching(url) {
			const userInfo = localStorage.getItem("userInfo");
			url = URL + "getMatchingExcel?userinfo=" + userInfo
			//url = " http://10.10.10.44:9000/getMatchingExcel?userinfo="+userInfo
			fetch(url, { method: 'GET' }).then((res) => {
				return res.blob();
			}).then((blob) => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.href = url;
				a.download = "MatchingRateExcel.xlsx";
				document.body.appendChild(a);
				a.click();
				setTimeout((_) => {
					window.URL.revokeObjectURL(url);
				}, 60000);
				a.remove();
			}).catch((err) => {
					console.error('err: ', err);
				});
			};
	
		const downloadBulk = (url) => {
			const userInfo = localStorage.getItem("userInfo");
			url = URL + "getBulkExcel?userinfo=" + userInfo
			//url = "http://10.10.10.44:9000/getBulkExcel?userinfo="+userInfo
			fetch(url, { method: 'GET' }).then((res) => {
				return res.blob();
			}).then((blob) => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.href = url;
				a.download = "Bulk.xlsx";
				document.body.appendChild(a);
				a.click();
				setTimeout((_) => {
					window.URL.revokeObjectURL(url);
				}, 60000);
				a.remove();
			}).catch((err) => {
					console.error('err: ', err);
				});
		};
		
		const downloadPriceGet = (url) => {
			const userInfo = localStorage.getItem("userInfo");
			url = URL + "getPriceExcel?userinfo=" + userInfo + "&dataType=" + props.formData.dataType
				//url = "http://10.10.10.44:9000/getPriceExcel?userinfo="+userInfo+"&dataType=getData"
			fetch(url, { method: 'GET' }).then((res) => {
				return res.blob();
			}).then((blob) => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.href = url;
				a.download = "GetPrice.xlsx";
				document.body.appendChild(a);
				a.click();
				setTimeout((_) => {
					window.URL.revokeObjectURL(url);
				}, 60000);
				a.remove();
			}).catch((err) => {
				console.error('err: ', err);
			});
		};
		
		const downloadPriceSend = (url) => {
			const userInfo = localStorage.getItem("userInfo");
			url = URL + "getPriceExcel?userinfo=" + userInfo + "&dataType=" + props.formData.dataType
			//url = " http://10.10.10.44:9000/getPriceExcel?userinfo="+userInfo+"&dataType=sendData"
			fetch(url, { method: 'GET' }).then((res) => {
				return res.blob();
			}).then((blob) => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.href = url;
				a.download = "SendPrice.xlsx";
				document.body.appendChild(a);
				a.click();
				setTimeout((_) => {
					window.URL.revokeObjectURL(url);
				}, 60000);
				a.remove();
			}).catch((err) => {
					console.error('err: ', err);
			});
		};
		
		const downloadRocket = (url) => {
			const userInfo = localStorage.getItem("userInfo");
			url = URL + "getRocketExcel?userinfo="+userInfo
			//url = " http://10.10.10.44:9000/getRocketExcel?userinfo="+userInfo
	
			fetch(url, { method: 'GET' })
			.then((res) => {
				return res.blob();
			})
			.then((blob) => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.href = url;
				a.download = "RocketExcel.xlsx";
				document.body.appendChild(a);
				a.click();
				setTimeout((_) => {
					window.URL.revokeObjectURL(url);
				}, 60000);
				a.remove();
			})
			.catch((err) => {
				console.error('err: ', err);
			});
			};
		
		const downloadSendCheck = (url) => {
			const userInfo = localStorage.getItem("userInfo");
			url = URL + "getSendCheckExcel?userinfo=" + userInfo
			//url = " http://10.10.10.44:9000/getSendCheckExcel?userinfo="+userInfo
			fetch(url, { method: 'GET' }).then((res) => {
				return res.blob();
			}).then((blob) => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.href = url;
				a.download = "getSend.xlsx";
				document.body.appendChild(a);
				a.click();
				setTimeout((_) => {
					window.URL.revokeObjectURL(url);
				}, 60000);
				a.remove();
			}).catch((err) => {
				console.error('err: ', err);
			});
			};
	
		const downloadOverview = (url) => {
			const userInfo = localStorage.getItem("userInfo");
			const startDate = localStorage.getItem("startDate");
			const endDate = localStorage.getItem("endDate");
			const type = localStorage.getItem("type")
			url = URL + "getAllStatusExcel?startDate=" + startDate + "&endDate=" + endDate + "&type=" + type + "&userinfo=" + userInfo
			//url = " http://10.10.10.44:9000/getAllStatusExcel?startDate="+startDate+"&endDate="+endDate+"&type="+type+"&userinfo="+userInfo
	
			fetch(url, { method: 'GET' }).then((res) => {
				return res.blob();
			}).then((blob) => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.href = url;
				a.download = "getOverview.xlsx";
				document.body.appendChild(a);
				a.click();
				setTimeout((_) => {
					window.URL.revokeObjectURL(url);
				}, 60000);
				a.remove();
			}).catch((err) => {
				console.error('err: ', err);
			});
			};

			useImperativeHandle(ref, () => ({
				downloadMatching,
				downloadBulk,
				downloadPriceGet,
				downloadRocket,
				downloadPriceSend,
				downloadOverview,
				downloadSendCheck
			}))
});

export default Download;