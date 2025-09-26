#include <iostream>
#include <string>
using namespace std;

// -------------------- Abstract Base Class --------------------
class Vehicle {
protected:
    string brand;
    string model;
    int year;
    double hourlyRate;

public:
    Vehicle(string b, string m, int y, double rate)
        : brand(b), model(m), year(y), hourlyRate(rate) {}

    virtual void getDetails() = 0; // Pure virtual → abstraction
    virtual string getType() = 0;  // For polymorphism

    double getRate() { return hourlyRate; }

    virtual ~Vehicle() {}
};

// -------------------- Derived Class: Car --------------------
class Car : public Vehicle {
private:
    int seats;
    string fuelType;

public:
    Car(string b, string m, int y, double rate, int s, string fuel)
        : Vehicle(b, m, y, rate), seats(s), fuelType(fuel) {}

    void getDetails() override {
        cout << "Car: " << brand << " " << model << " (" << year << ")\n";
        cout << "Seats: " << seats << ", Fuel: " << fuelType 
             << ", Rate/hr: " << hourlyRate << " Rs\n";
    }

    string getType() override {
        return "Car";
    }
};

// -------------------- Derived Class: Motorcycle --------------------
class Motorcycle : public Vehicle {
private:
    int engineCC;
    bool hasGear;

public:
    Motorcycle(string b, string m, int y, double rate, int cc, bool gear)
        : Vehicle(b, m, y, rate), engineCC(cc), hasGear(gear) {}

    void getDetails() override {
        cout << "Motorcycle: " << brand << " " << model << " (" << year << ")\n";
        cout << "Engine: " << engineCC << "cc, "
             << (hasGear ? "With Gear" : "Gearless")
             << ", Rate/hr: " << hourlyRate << " Rs\n";
    }

    string getType() override {
        return "Motorcycle";
    }
};

// -------------------- Rental Class --------------------
class Rental {
private:
    Vehicle* rentedVehicle;  // Polymorphism (Car, Motorcycle, etc.)
    int hours;

public:
    Rental(Vehicle* v, int h) : rentedVehicle(v), hours(h) {}

    void generateBill() {
        cout << "\n------ Rental Bill ------\n";
        rentedVehicle->getDetails();
        cout << "Hours Rented: " << hours << endl;
        cout << "Total Cost: " << rentedVehicle->getRate() * hours << " Rs\n";
        cout << "-------------------------\n";
    }
};

// -------------------- Main --------------------
int main() {
    // Create Car and Motorcycle objects
    Car c1("Toyota", "Fortuner", 2022, 500, 7, "Diesel");
      Car c2("Toyota", "Fortuner", 2022, 500, 7, "Diesel");
        Car c3("Toyota", "Fortuner", 2022, 500, 7, "Diesel");
    Motorcycle m1("Yamaha", "R15", 2023, 200, 155, true);

    cout << "Vehicles Available for Rent:\n";
    cout << "1. "; c1.getDetails();
    cout << "2. "; m1.getDetails();

    int choice, hours;
    cout << "\nEnter your choice (1=Car, 2=Motorcycle): ";
    cin >> choice;

    cout << "Enter number of hours to rent: ";
    cin >> hours;

    if (choice == 1) {
        Rental r1(&c1, hours);
        r1.generateBill();
    } 
    else if (choice == 2) {
        Rental r2(&m1, hours);
        r2.generateBill();
    } 
    else {
        cout << "Invalid choice!" << endl;
    }

    return 0;
}

