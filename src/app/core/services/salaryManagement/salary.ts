export default abstract class HeroSalary {
    
    calculateSalary(hourlyRate:number, numberHoursWorked: number): number {
        return hourlyRate * numberHoursWorked;
    }

    calculateWeekHourSalary() {} // Option supplémentaire

    calculateNightHourSalary() {} // Option supplémentaire
}