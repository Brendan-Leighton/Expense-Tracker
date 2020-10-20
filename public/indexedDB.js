// let db;
// // create a new db indexDB for a "expenses" database.
// const indexDB = indexedDB.open("expenses", 1);

// indexDB.onupgradeneeded = function(event) {
//     // create object store called "pending" and set autoIncrement to true
//    const db = event.target.result;
//    db.createObjectStore("expenses", { autoIncrement: true });
//  };

// indexDB.onsuccess = function(event) {
//   db = event.target.result;

//   // check if app is online before reading from db
//   if (navigator.onLine) {
//     checkDatabase();
//   }
// };

// indexDB.onerror = function(event) {
//   console.log("Woops! " + event.target.errorCode);
// };

// function saveRecord(record) {
//   // create a transaction on the expenses db with readwrite access
//   const transaction = db.transaction("expenses", "readwrite");

//   // access your expenses object store
//   const store = transaction.objectStore("expenses");

//   // add record to your store with add method.
//   store.add(record);
// }

// function checkDatabase() {
//   // open a transaction on your expenses db
//   const transaction = db.transaction("expenses", "readwrite");
//   // access your expenses object store
//   const store = transaction.objectStore("expenses");
//   // get all records from store and set to a variable
//   const getAll = store.getAll();

//   getAll.onsuccess = function() {
//     if (getAll.result.length > 0) {
//       fetch("/api/transaction/bulk", {
//         method: "POST",
//         body: JSON.stringify(getAll.result),
//         headers: {
//           Accept: "application/json, text/plain, */*",
//           "Content-Type": "application/json"
//         }
//       })
//       .then(response => response.json())
//       .then(() => {
//         // if successful, open a transaction on your expenses db
//         const transaction = db.transaction(["expenses"], "readwrite");

//         // access your expenses object store
//         const store = transaction.objectStore("expenses");

//         // clear all items in your store
//         store.clear();
//       });
//     }
//   };
// }

// // listen for app coming back online
// window.addEventListener("online", checkDatabase);




let db;
// create a new db request for a "budget" database.
const request = indexedDB.open("budget", 1);

request.onupgradeneeded = function(event) {
   // create object store called "pending" and set autoIncrement to true
  const db = event.target.result;
  db.createObjectStore("pending", { autoIncrement: true });
};

request.onsuccess = function(event) {
  db = event.target.result;

  // check if app is online before reading from db
  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function(event) {
  console.log("Woops! " + event.target.errorCode);
};

function saveRecord(record) {
  // create a transaction on the pending db with readwrite access
  const transaction = db.transaction(["pending"], "readwrite");

  // access your pending object store
  const store = transaction.objectStore("pending");

  // add record to your store with add method.
  store.add(record);
}

function checkDatabase() {
  // open a transaction on your pending db
  const transaction = db.transaction(["pending"], "readwrite");
  // access your pending object store
  const store = transaction.objectStore("pending");
  // get all records from store and set to a variable
  const getAll = store.getAll();

  getAll.onsuccess = function() {
    if (getAll.result.length > 0) {
      fetch("/api/transaction/bulk", {
        method: "POST",
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        }
      })
      .then(response => response.json())
      .then(() => {
        // if successful, open a transaction on your pending db
        const transaction = db.transaction(["pending"], "readwrite");

        // access your pending object store
        const store = transaction.objectStore("pending");

        // clear all items in your store
        store.clear();
      });
    }
  };
}

// listen for app coming back online
window.addEventListener("online", checkDatabase);
