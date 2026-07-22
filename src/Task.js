import { formatDistanceToNow } from 'date-fns';
export default class Task
{
    constructor(Id, Name, Priority, Details, dueDate, daysSinceCreation) {
    this.Id = Id;
    this.Name = Name;
    this.Priority = Priority;
    this.Details = Details;
    this.creationDate = Date.now();
    this.dueDate = dueDate;

    // this should be refactored to be calculated each time the user asks for the data,
    // because for now, the moment the task is created created the "less than a minute" is saved to the database
    // and will never be changed
    this.daysSinceCreation = this.calculateDaysSinceCreation();
    }
    getData() {
        return {
            id: this.Id,
            name: this.Name,
            priority: this.Priority,
            details: this.Details,
            creationDate: this.creationDate,
            dueDate: this.dueDate,
        };
    }
    calculateDaysSinceCreation()
    {
            var daysSinceCreation = formatDistanceToNow(
            this.creationDate
        )
        return daysSinceCreation;
    }
    calculateDaysTillExpire()
    {
            var daysTillExpire = formatDistanceToNow(
            this.dueDate
        )
        return daysTillExpire;
    }
    removeTask()
    {
        return;
    }
}