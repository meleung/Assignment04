/*eslint-env browser*/

//STEP 1
//var favoriteMovies = ["Gattaca",
//                      "The Shawshank Redemption",
//                      "Hero",
//                      "Forrest Gump",
//                      "Iron Man"];
//window.console.log("Second favorite movie is \"" + favoriteMovies[1] + "\"");

//STEP 2
//var movies = new Array(5);
//var i;
//movies[0] = "Gattaca";
//movies[1] = "The Shawshank Redemption";
//movies[2] = "Hero";
//movies[3] = "Forrest Gump";
//movies[4] = "Iron Man";
//window.console.log("First favorite movie is \"" + movies[0] + "\"");

//STEP 3
//var movies = new Array(5);
//var i;
//movies[0] = "Gattaca";
//movies[1] = "The Shawshank Redemption";
//movies[2] = "Hero";
//movies[3] = "Forrest Gump";
//movies[4] = "Iron Man";
//window.console.log("First favorite movie is \"" + movies[0] + "\"");
//movies[5] = "Finding Nemo";
//window.console.log("movies.length = " + movies.length);

//STEP 4
//var movies = ["Gattaca",
//              "The Shawshank Redemption",
//              "Hero",
//              "Forrest Gump",
//              "Iron Man"];
//delete movies[0];
//window.console.log("movies[0] = " + String(movies[0]));
//window.console.log("movies[1] = " + String(movies[1]));
//window.console.log("movies[2] = " + String(movies[2]));
//window.console.log("movies[3] = " + String(movies[3]));
//window.console.log("movies[4] = " + String(movies[4]));

//STEP 5
//var movies = ["Gattaca",
//              "The Shawshank Redemption",
//              "Hero",
//              "Forrest Gump",
//              "Iron Man",
//              "Friday",
//              "Ferris Bueller's Day Off"];
//var i;
//for (i = 0; i < movies.length; i += 1) {
//    window.console.log("movies[" + String(i) + "] = " + String(movies[i]));
//}

//STEP 6
//var movies = ["Gattaca",
//              "The Shawshank Redemption",
//              "Hero",
//              "Forrest Gump",
//              "Iron Man",
//              "Friday",
//              "Ferris Bueller's Day Off"];
//var movie;
//for (movie in movies) {
//    if (movies.hasOwnProperty(movie)) {
//        window.console.log("movies[" + String(movie) + "] = " + String(movies[movie]));
//    }
//}

//STEP 7
//var movies = ["Gattaca",
//              "The Shawshank Redemption",
//              "Hero",
//              "Forrest Gump",
//              "Iron Man",
//              "Friday",
//              "Ferris Bueller's Day Off"];
//var i;
//movies.sort();
//for (i = 0; i < movies.length; i += 1) {
//    window.console.log("movies[" + String(i) + "] = " + String(movies[i]));
//}

//STEP 8
//var movies = ["Gattaca",
//              "The Shawshank Redemption",
//              "Hero",
//              "Forrest Gump",
//              "Iron Man",
//              "Friday",
//              "Ferris Bueller's Day Off"];
//var leastFavMovies = [];
//leastFavMovies[0] = "Transformers";
//leastFavMovies[1] = "Traffic";
//leastFavMovies[2] = "Mamma Mia";
//var i;
//
//window.console.log("Movies I like:");
//window.console.log("");
//for (i = 0; i < movies.length; i += 1) {
//    window.console.log(String(movies[i]));
//}
//window.console.log("");
//
//window.console.log("Movies I regret watching:");
//window.console.log("");
//for (i = 0; i < leastFavMovies.length; i += 1) {
//    window.console.log(String(leastFavMovies[i]));
//}

//STEP 9
//var movies = ["Gattaca",
//              "The Shawshank Redemption",
//              "Hero",
//              "Forrest Gump",
//              "Iron Man",
//              "Friday",
//              "Ferris Bueller's Day Off"];
//var leastFavMovies = [];
//leastFavMovies[0] = "Transformers";
//leastFavMovies[1] = "Traffic";
//leastFavMovies[2] = "Mamma Mia";
//
//movies = movies.concat(leastFavMovies).sort().reverse();
//var i;
//for (i = 0; i < movies.length; i += 1) {
//    window.console.log("movies[" + String(i) + "] = " + String(movies[i]));
//}

//STEP 10
//var movies = ["Gattaca",
//              "The Shawshank Redemption",
//              "Hero",
//              "Forrest Gump",
//              "Iron Man",
//              "Friday",
//              "Ferris Bueller's Day Off"];
//var leastFavMovies = [];
//leastFavMovies[0] = "Transformers";
//leastFavMovies[1] = "Traffic";
//leastFavMovies[2] = "Mamma Mia";
//
//movies = movies.concat(leastFavMovies).sort().reverse();
//window.console.log(movies.pop());

//STEP 11
//var movies = ["Gattaca",
//              "The Shawshank Redemption",
//              "Hero",
//              "Forrest Gump",
//              "Iron Man",
//              "Friday",
//              "Ferris Bueller's Day Off"];
//var leastFavMovies = [];
//leastFavMovies[0] = "Transformers";
//leastFavMovies[1] = "Traffic";
//leastFavMovies[2] = "Mamma Mia";
//
//movies = movies.concat(leastFavMovies).sort().reverse();
//window.console.log(movies.shift());

//STEP 12
//var movies = ["Gattaca",
//              "The Shawshank Redemption",
//              "Hero",
//              "Forrest Gump",
//              "Iron Man",
//              "Friday",
//              "Ferris Bueller's Day Off"];
//var leastFavMovies = [];
//leastFavMovies[0] = "Transformers";
//leastFavMovies[1] = "Traffic";
//leastFavMovies[2] = "Mamma Mia";
//
//movies = movies.concat(leastFavMovies).sort().reverse();
//
//var nextFavMovies = [];
//nextFavMovies[0] = "Jerry McGuire";
//nextFavMovies[1] = "Good Will Hunting";
//nextFavMovies[2] = "The Rock";
//
//var i;
//for (i = 0; i < leastFavMovies.length; i += 1) {
//    var leastFavMovieIndex = movies.indexOf(leastFavMovies[i]);
//    movies[leastFavMovieIndex] = nextFavMovies[i];
//}
//
//for (i = 0; i < movies.length; i += 1) {
//    window.console.log("movies[" + String(i) + "] = " + String(movies[i]));
//}

//STEP 13
//var employee1 = [], employee2 = [];
//
//employee1['employeeID'] = 742;
//employee1['name'] = "John Depp";
//employee1['title'] = "Associate Engineer";
//employee1['department'] = "Mobile Devices";
//employee1['isCurrent'] = false;
//
//employee2['employeeID'] = 248;
//employee2['name'] = "Laura Palmer";
//employee2['title'] = "Editor in Chief";
//employee2['department'] = "Marketing";
//employee2['isCurrent'] = true;
//
//var employees = [];
//employees.push(employee1);
//employees.push(employee2);
//window.console.log(employees[1]['name']);

//STEP 14
//var employee1 = [], employee2 = [];
//
//employee1['employeeID'] = 742;
//employee1['name'] = "John Depp";
//employee1['title'] = "Associate Engineer";
//employee1['department'] = "Mobile Devices";
//employee1['isCurrent'] = false;
//
//employee2['employeeID'] = 248;
//employee2['name'] = "Laura Palmer";
//employee2['title'] = "Editor in Chief";
//employee2['department'] = "Marketing";
//employee2['isCurrent'] = true;
//
//var employees = [];
//employees.push(employee1);
//employees.push(employee2);
//
//var i;
//for (i = 0; i < employees.length; i += 1) {
//    window.console.log(employees[i]['name']);
//}

//STEP 15
//var employee1 = [], employee2 = [], employee3 = [];
//
//employee1['employeeID'] = 742;
//employee1['name'] = "John Depp";
//employee1['title'] = "Associate Engineer";
//employee1['department'] = "Mobile Devices";
//employee1['isCurrent'] = true;
//
//employee2['employeeID'] = 248;
//employee2['name'] = "Laura Palmer";
//employee2['title'] = "Editor in Chief";
//employee2['department'] = "Marketing";
//employee2['isCurrent'] = true;
//
//employee3['employeeID'] = 463;
//employee3['name'] = "Jerry Tom";
//employee3['title'] = "Sous Chef";
//employee3['department'] = "Catering";
//employee3['isCurrent'] = false;
//
//var employees = [];
//employees.push(employee1);
//employees.push(employee2);
//employees.push(employee3);
//
//var i;
//for (i = 0; i < employees.length; i += 1) {
//    if (employees[i]['isCurrent']) {
//        window.console.log(employees[i]['name']);
//    }
//}

//STEP 16
//var movies = [["Gattaca", 1],
//              ["The Shawshank Redemption", 2],
//              ["Hero", 3],
//              ["Forrest Gump", 4],
//              ["Iron Man", 5]];
//
//function stringFilter(elem) {
//    "use strict";
//    return typeof elem === "string";
//}
//
//var i;
//for (i = 0; i < movies.length; i += 1) {
//    var movie = movies[i].filter(stringFilter);
//    window.console.log(movie);
//}

//STEP 17
//var employees = ["Zak", "Jessica", "Mark", "Fred", "Sally"];
//var showEmployee = function (param) {
//    "use strict";
//    window.console.log("Employees:");
//    window.console.log("");
//    var i;
//    for (i = 0; i < param.length; i += 1) {
//        window.console.log(String(param[i]).toUpperCase());
//    }
//};
//showEmployee(employees);

//STEP 18
//function filterValues(arr) {
//    "use strict";
//    return arr.filter(function (elem) {
//        var value;
//        switch (elem) {
//        case false:
//        case null:
//        case 0:
//        case '':
//            value = false;
//            break;
//        default:
//            value = true;
//        }
//        return value;
//    });
//}
//window.console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

//STEP 19
//function getRandom(arr) {
//    "use strict";
//    return arr[Math.floor(Math.random() * arr.length)];
//}
//
//var numericArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//var i;
//for (i = 0; i < 5; i += 1) {
//    window.console.log(String(getRandom(numericArray)));
//}

//STEP 20
//function getLargest(arr) {
//    "use strict";
//    return arr.reduce(function (prev, curr) {
//        return prev < curr ? curr : prev;
//    });
//}
//var numericArray = [];
//var i;
//for (i = 0; i < 10; i += 1) {
//    numericArray[i] = Math.round(Math.random() * 100);
//    window.console.log("numericArray[" + String(i) + "] = " + numericArray[i]);
//}
//window.console.log("Largest = " + String(getLargest(numericArray)));