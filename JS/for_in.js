const Human = {FirstName:"Abhishek", LastName:"Pujara", age:25};
for (let H in Human) {
    document.write("<br/>"+H);
  }
document.write("<hr/>");
for (let H in Human) {
  document.write("<br/>"+Human[H]);
}