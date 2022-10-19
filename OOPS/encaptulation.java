package OOPS;

class Person {
    private String name; // private = restricted access
  
    // Getter
    public String getName() {
      return name;
    }
  
    // Setter
    public void setName(String newName) {
      this.name = newName;
    }
  }

  public class encaptulation {
    public static void main(String[] args) {
      Person myObj = new Person();
      myObj.setName("Poorvang"); // Set the value of the name variable to "John"
      System.out.println("Name: "+myObj.getName());
    }
  }