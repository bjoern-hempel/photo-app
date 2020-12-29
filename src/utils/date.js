/**
 * Formats the given date value.
 * 
 * @param {Date} date 
 */
export const formatDate = (date) => {
    return new Intl.DateTimeFormat('de-DE', {
        year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'
    }).format(new Date(date));
 };
 