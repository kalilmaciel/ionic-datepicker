"use strict";var app=angular.module("ionic-datepicker",["ionic"]);app.service("DatepickerService",function(){this.monthsList=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],this.yearsList=[1900,1901,1902,1903,1904,1905,1906,1907,1908,1909,1910,1911,1912,1913,1914,1915,1916,1917,1918,1919,1920,1921,1922,1923,1924,1925,1926,1927,1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2e3,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030,2031,2032,2033,2034,2035,2036,2037,2038,2039,2040,2041,2042,2043,2044,2045,2046,2047,2048,2049,2050,2051,2052,2053,2054,2055,2056,2057,2058,2059,2060,2061,2062,2063,2064,2065,2066,2067,2068,2069,2070,2071,2072,2073,2074,2075,2076,2077,2078,2079,2080,2081,2082,2083,2084,2085,2086,2087,2088,2089,2090,2091,2092,2093,2094,2095,2096,2097,2098,2099,2100],this.weekNames=["D","S","T","Q","Q","S","S"],this.buttonsNames=["Fechar","Hoje","OK"]}),app.directive("ionicDatepicker",["$ionicPopup","DatepickerService",function(e,t){return{restrict:"AE",replace:!0,scope:{ipDate:"=idate",disablePreviousDates:"=disablepreviousdates",disableFutureDates:"=disablefuturedates",callback:"=callback",title:"=title",disabledDates:"=?disableddates",mondayFirst:"=?mondayfirst"},link:function(a,n,s){a.datePickerTitle=a.title||"Select Date";var i=t.monthsList;if(a.monthsList=i,a.yearsList=t.yearsList,a.weekNames=t.weekNames,a.buttonsNames=t.buttonsNames,a.currentMonth="",a.currentYear="",a.ipDate||(a.ipDate=new Date),angular.isDefined(a.mondayFirst)&&"false"!=a.mondayFirst?a.mondayFirst=!0:a.mondayFirst=!1,angular.isDefined(a.disabledDates))for(var o=0;o<a.disabledDates.length;o++)a.disabledDates[o]=a.disabledDates[o].getTime();else a.disabledDates=[];a.previousDayEpoch=+new Date-864e5,a.nextDayEpoch=+new Date;var r=angular.copy(a.ipDate);if(r.setHours(0),r.setMinutes(0),r.setSeconds(0),r.setMilliseconds(0),a.selctedDateString=r.toString(),a.today={},1==a.mondayFirst){var l=a.weekNames.shift();a.weekNames.push(l)}var c=new Date,d=new Date(c.getFullYear(),c.getMonth(),c.getDate());a.today={dateObj:c,date:d.getDate(),month:d.getMonth(),year:d.getFullYear(),day:d.getDay(),dateString:d.toString(),epochLocal:d.getTime(),epochUTC:d.getTime()+60*d.getTimezoneOffset()*1e3};var u=function(e){e.setHours(0),e.setMinutes(0),e.setSeconds(0),e.setMilliseconds(0),a.selctedDateString=new Date(e).toString(),r=angular.copy(e);var t=new Date(e.getFullYear(),e.getMonth(),1).getDate(),n=new Date(e.getFullYear(),e.getMonth()+1,0).getDate();a.dayList=[];for(var s=t;n>=s;s++){var o=new Date(e.getFullYear(),e.getMonth(),s);a.dayList.push({date:o.getDate(),month:o.getMonth(),year:o.getFullYear(),day:o.getDay(),dateString:o.toString(),epochLocal:o.getTime(),epochUTC:o.getTime()+60*o.getTimezoneOffset()*1e3})}var t=a.dayList[0].day-a.mondayFirst;a.currentMonthFirstDayEpoch=a.dayList[0].epochLocal,a.currentMonthLastDayEpoch=a.dayList[a.dayList.length-1].epochLocal;for(var l=0;t>l;l++)a.dayList.unshift({});a.rows=[],a.cols=[],a.currentMonth=i[e.getMonth()],a.currentYear=e.getFullYear(),a.currentMonthSelected=a.currentMonth,a.currentYearSelected=a.currentYear,a.numColumns=7,a.rows.length=6,a.cols.length=a.numColumns};a.monthChanged=function(e){var t=a.monthsList.indexOf(e);r.setMonth(t),u(r)},a.yearChanged=function(e){r.setFullYear(e),u(r)},a.prevMonth=function(){1===r.getMonth()&&r.setFullYear(r.getFullYear()),r.setMonth(r.getMonth()-1),a.currentMonth=i[r.getMonth()],a.currentYear=r.getFullYear(),u(r)},a.nextMonth=function(){11===r.getMonth()&&r.setFullYear(r.getFullYear()),r.setMonth(r.getMonth()+1),a.currentMonth=i[r.getMonth()],a.currentYear=r.getFullYear(),u(r)},a.date_selection={selected:!1,selectedDate:"",submitted:!1},a.dateSelected=function(e){a.selctedDateString=e.dateString,a.selctedDateStringCopy=angular.copy(a.selctedDateString),a.date_selection.selected=!0,a.date_selection.selectedDate=new Date(e.dateString)},n.on("click",function(){if(a.ipDate)u(angular.copy(a.ipDate));else{var t=new Date;u(t)}e.show({templateUrl:"/lib/ionic-datepicker/src/date-picker-modal.html",title:a.datePickerTitle,subTitle:"",scope:a,buttons:[{text:a.buttonsNames[0],type:"button-small button-assertive",onTap:function(e){a.callback(void 0)}},{text:a.buttonsNames[1],type:"button-small button-balanced",onTap:function(e){var t=new Date;t.setHours(0),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0);var n=new Date(t.getFullYear(),t.getMonth(),t.getDate()),s={date:t.getDate(),month:t.getMonth(),year:t.getFullYear(),day:t.getDay(),dateString:t.toString(),epochLocal:n.getTime(),epochUTC:n.getTime()+60*n.getTimezoneOffset()*1e3};a.selctedDateString=s.dateString,a.date_selection.selected=!0,a.date_selection.selectedDate=new Date(s.dateString),u(new Date),e.preventDefault()}},{text:a.buttonsNames[2],type:"button-small button-positive",onTap:function(e){a.date_selection.submitted=!0,a.date_selection.selected===!0?(a.ipDate=angular.copy(a.date_selection.selectedDate),a.callback(a.ipDate)):e.preventDefault()}}]})})}}}]);