const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

// Original:
// export const fetchAPI = function (date) {
//   let result = [];
//   let random = seededRandom(date.getDate());

//   for (let i = 17; i <= 23; i++) {
//     if (random() < 0.5) {
//       result.push(i + ":00");
//     }
//     if (random() < 0.5) {
//       result.push(i + ":30");
//     }
//   }
//   return result;
// };

// We altered the following function to ensure that there is always a "17:00" for unit testing:
export const fetchAPI = function (date) {
  let result = ["17:00"];
  let random = seededRandom(date.getDate());

  for (let i = 18; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};

// We implement the following logic in the hooks/useSubmit.js to simulate a server response delay
// const submitAPI = function(formData) {
//   return true;
// };
