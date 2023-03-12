import { formatDistanceToNow } from 'date-fns'


export function dateFormatter(date) {
    return formatDistanceToNow(new Date(date), {addSuffix: true})
}

