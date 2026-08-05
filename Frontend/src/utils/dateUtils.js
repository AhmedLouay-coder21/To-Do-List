import { formatDistanceToNow } from 'date-fns';
export default class Task
{
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
}