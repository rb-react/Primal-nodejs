// create a server without express

const http = require("http");

// create a server

let users = [
  {
    id: 1,
    name: "aaaa",
    mobile: 11111,
    age: 10,
    city: "Pune",
  },
  {
    id: 2,
    name: "bbbb",
    mobile: 22222,
    age: 20,
    city: "Pune",
  },
  {
    id: 3,
    name: "cccc",
    mobile: 33333,
    age: 30,
    city: "Pune",
  },
  {
    id: 4,
    name: "dddd",
    mobile: 44444,
    age: 40,
    city: "mumbai",
  },
  {
    id: 5,
    name: "eeee",
    mobile: 55555,
    age: 50,
    city: "Pune",
  },
  {
    id: 6,
    name: "ffff",
    mobile: 66666,
    age: 60,
    city: "mumbai",
  },
];

const server = http.createServer((request, response) => {
  const { method, url } = request;

  if (method === "GET" && url == "/") {
    response.write("Hi from server");
    response.end();
  }
  //Get the User
  else if (method === "GET" && url == "/users") {
    // response.write("user list");
    response.write(JSON.stringify(users));
    response.end();
  }
  //Insert the User
  else if (method === "POST" && url == "/users") {
    // get the user data from request

    let body = [];
    request
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        //at this poing, 'body' has the entire request body stored in it as a string
        console.log("Body: ", body);
        users.push(JSON.parse(body));

        response.write("User created...");
        response.end();
      });
  }
  //Update the User
  else if (method === "PUT" && /\/users\/[0-9]/.test(url)) {
    // get the user data from request

    const id = url?.split("/")[2];
    console.log("ID: ", id);

    // get the index of the user object
    const index = users?.findIndex((user) => user.id == id);

    let body = [];
    request
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = JSON.parse(Buffer.concat(body).toString());

        const updatedUser = { ...users[index], ...body };
        users.splice(index, 1, updatedUser);

        response.write("User updated...");
        response.end();
      });
  }
  //Delete the User
  else if (method === "DELETE" && /\/users\/[0-9]/.test(url)) {
    const id = url?.split("/")[2];

    users = users.filter((user) => user.id != id);

    response.write(`User with id ${id} deleted..`);
    response.end();
  }
});
//to start server and deside server port
server.listen(9090, () => {
  console.log("server is started...");
});

//   } else if (method === "POST" && url == "/users") {
//     // get the user data from request

//     let body = [];
//     request
//       .on("data", (chunk) => {
//         body.push(chunk);
//       })
//       .on("end", () => {
//         body = Buffer.concat(body).toString();
//         //at this poing, 'body' has the entire request body stored in it as a string
//         console.log("Body: ", body);
//         users.push(JSON.parse(body));

//         response.write("User created...");
//         response.end();
//       });
//   }
// });

// //to start server and deside server port
// server.listen(9090, () => {
//   console.log("server is started...");
// });

// http://localhost:9090
// hi from server
// http://localhost:9090/users
// user list
