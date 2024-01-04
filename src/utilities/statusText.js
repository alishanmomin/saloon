export const statusText = (status) =>
{
    if (status === 0) return 'Pending'
    if (status === 1) return 'Approved'
    if (status === 2) return 'Reject'
    return 'Cancelled'
}

export const statusClass = (status) =>
{
    if (status === 0) return 'tables_remove'
    if (status === 1) return 'tables_green'
    if (status === 2) return 'tables_remove'
    return 'tables_remove'
}