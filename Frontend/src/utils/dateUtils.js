import { formatDistanceToNow, toDate } from 'date-fns';
import { GenericApiFetch } from '../Api/Api';
const data = await GenericApiFetch();

export function calculateDaysSinceCreation()
{
        var daysSinceCreation = formatDistanceToNow(
        data.creationDate
    )
    return daysSinceCreation;
}
export function calculateDaysTillExpire()
{
    var daysTillExpire = formatDistanceToNow(data.dueDate)
    return daysTillExpire;
}