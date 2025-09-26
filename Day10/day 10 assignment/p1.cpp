#include <iostream>
#include <string>
using namespace std;

class vehical{
    protected:
    string brand, model;
    int year;
    double hourlyRate;

public:
vehical(){}

 vehical(string b, string m, int y, double rate){
 brand =  b;
 model = m;
 year = y;
 hourlyRate = rate;
}

virtual void getDetails() = 0;
virtual string getType ()= 0;
double getRate(){
    return hourlyRate;
}
virtual ~vehical(){
}
};
class car : public vehical{
    private:
    int seats;
    string fuelType;

    public:
    car(string b, string m, int y, double rate, int s, string fuel){
        seats =s;
        fuelType = fuel;
         brand =  b;
         model = m;
        year = y;
         hourlyRate = rate;
    }
    void getDetails() override{
        cout<< "Car: "<<brand<<" "<<model<<" (" <<year<<") "
        <<"seats: "<< seats <<", fuel: " << fuelType
        <<", Rate/hr: "<< hourlyRate<< "Rs\n";
    }
    string getType() override{ return "Car";}
};

class Motorcycle : public vehical{
    private:
    int engineCC;
    bool hasGear;

    public:
    Motorcycle(string b, string m, int y, double rate, int cc, bool gear){
      
        engineCC= cc;
        hasGear = gear;
         brand =  b;
         model = m;
        year = y;
         hourlyRate = rate;
    }
    void getDetails() override{
        cout<< "Motorcycle: "<<brand<<" "<<model<<" (" <<year<<") "
        <<"Engine: "<< engineCC <<"cc, "<<
        (hasGear ?"With Gear" : "Gearless") 
        <<", Rate/hr: "<< hourlyRate<< "Rs\n";
    }
    string getType() override{ return "Motorcycle";}
};
class Rental{
    private:
    vehical* rentedVehicle;
    int hours;
    public:
    Rental(vehical* v,int h){
        rentedVehicle=v;
        hours=h;
    }

    void generateBill(){
        cout<<"\n------Rented Bill------\n";
        rentedVehicle->getDetails();
        cout<< "hours Rented: " << hours << endl;
        cout<<  "total Cost: " << rentedVehicle->getRate() * hours << "Rs\n";
        cout<<"\n------------------------\n";
    }
};

int main()
{
   car cars[2]={
    car("toyota","Fortuner",2022, 500, 7, "Diesel"),
    car("honda","city",2021, 300, 5, "petrol")
   };

    Motorcycle bikes[2]={
    Motorcycle("yamaha","R15",2023, 200, 155, true),
    Motorcycle("honda","shine",2023, 100, 125, true)
   };

       cout << "Vehicles Available for Rent:\n";
       for(int i=0; i<2; i++){
        cout<< (i+1) << ". ";
        cars[i].getDetails();
       };
        for(int i=0; i<2; i++){
        cout<< (i+2) << ". ";
        bikes[i].getDetails();
       };

       int choice, hours;
    cout << "\nEnter your choice (1-10): ";
    cin >> choice;
    cout << "Enter number of hours to rent: ";
    cin >> hours;
     if (choice >= 1 && choice <= 2) {
        Rental r(&cars[choice - 1], hours);
        r.generateBill();
    } else if (choice >= 3 && choice <= 4) {
        Rental r(&bikes[choice - 3], hours);
        r.generateBill();
    } else {
        cout << "Invalid choice!" << endl;
    }
           return 0;
}

