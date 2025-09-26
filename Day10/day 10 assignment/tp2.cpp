#include <iostream>
#include <string>
#include <vector>
using namespace std;

// -------------------- Abstract Base Class --------------------
class Vehicle {
protected:
    string brand, model;
    int year;
    double hourlyRate;

public:
    Vehicle(string b, string m, int y, double rate) : 
    brand(b), model(m), year(y), hourlyRate(rate) {}

    virtual void getDetails() = 0; 
    virtual string getType() = 0;  

    double getRate() { return hourlyRate; }

    virtual ~Vehicle() {}
};

// -------------------- Car Class --------------------
class Car : public Vehicle {
private:
    int seats;
    string fuelType;

public:
    Car(string b, string m, int y, double rate, int s, string fuel)
        : Vehicle(b, m, y, rate), seats(s), fuelType(fuel) {}

    void getDetails() override {
        cout << "Car: " << brand << " " << model << " (" << year << ") "
             << "Seats: " << seats << ", Fuel: " << fuelType 
             << ", Rate/hr: " << hourlyRate << " Rs\n";
    }

    string getType() override { return "Car"; }
};

// -------------------- Motorcycle Class --------------------
class Motorcycle : public Vehicle {
private:
    int engineCC;
    bool hasGear;

public:
    Motorcycle(string b, string m, int y, double rate, int cc, bool gear)
        : Vehicle(b, m, y, rate), engineCC(cc), hasGear(gear) {}

    void getDetails() override {
        cout << "Motorcycle: " << brand << " " << model << " (" << year << ") "
             << "Engine: " << engineCC << "cc, "
             << (hasGear ? "With Gear" : "Gearless")
             << ", Rate/hr: " << hourlyRate << " Rs\n";
    }

    string getType() override { return "Motorcycle"; }
};

// -------------------- Rental Basket --------------------
class RentalBasket {
private:
    vector<pair<Vehicle*, int>> rentals; // (vehicle, hours)

public:
    void addRental(Vehicle* v, int hours) {
        rentals.push_back({v, hours});
    }

    void generateBill() {
        double total = 0;
        cout << "\n====== Rental Bill ======\n";
        for (auto &r : rentals) {
            r.first->getDetails();
            cout << "Hours Rented: " << r.second 
                 << ", Cost: " << r.first->getRate() * r.second << " Rs\n";
            cout << "-------------------------\n";
            total += r.first->getRate() * r.second;
        }
        cout << "Total Payable: " << total << " Rs\n";
        cout << "=========================\n";
    }
};

// -------------------- Main --------------------
int main() {
    // 5 Cars
    Car cars[5] = {
        Car("Toyota", "Fortuner", 2022, 500, 7, "Diesel"),
        Car("Honda", "City", 2021, 300, 5, "Petrol"),
        Car("Hyundai", "Creta", 2023, 400, 5, "Diesel"),
        Car("Kia", "Seltos", 2022, 350, 5, "Petrol"),
        Car("Mahindra", "XUV700", 2023, 550, 7, "Diesel")
    };

    // 5 Motorcycles
    Motorcycle bikes[5] = {
        Motorcycle("Yamaha", "R15", 2023, 200, 155, true),
        Motorcycle("Honda", "Shine", 2021, 120, 125, true),
        Motorcycle("TVS", "Ntorq", 2022, 100, 125, false),
        Motorcycle("Royal Enfield", "Classic 350", 2023, 250, 350, true),
        Motorcycle("Bajaj", "Pulsar 220", 2022, 180, 220, true)
    };

    RentalBasket basket;
    int choice, hours;

    do {
        cout << "\n===== Vehicle Menu =====\n";
        cout << "--- Cars ---\n";
        for (int i = 0; i < 5; i++) {
            cout << (i + 1) << ". ";
            cars[i].getDetails();
        }
        cout << "--- Motorcycles ---\n";
        for (int i = 0; i < 5; i++) {
            cout << (i + 6) << ". ";
            bikes[i].getDetails();
        }
        cout << "11. Finish and Generate Bill\n";

        cout << "Enter your choice: ";
        cin >> choice;

        if (choice >= 1 && choice <= 5) {
            cout << "Enter hours: ";
            cin >> hours;
            basket.addRental(&cars[choice - 1], hours);
        } 
        else if (choice >= 6 && choice <= 10) {
            cout << "Enter hours: ";
            cin >> hours;
            basket.addRental(&bikes[choice - 6], hours);
        } 
        else if (choice == 11) {
            break;
        } 
        else {
            cout << "Invalid choice!\n";
        }

    } while (choice != 11);

    basket.generateBill();
    return 0;
}