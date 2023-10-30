import {dashboard, expenses, transactions, trend, login,card} from '../utils/Icons'

export const menuItems = [
    
    {
        id: 2,
        title: 'Dashboard',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id: 3,
        title: "View Transactions",
        icon: transactions,
        link: "/Transaction",
    },
    {
        id: 4,
        title: "Incomes",
        icon: trend,
        link: "/incomes",
    },
    {
        id: 5,
        title: "Expenses",
        icon: expenses,
        link: "/expense",
    },
    
    {
        id:6,
    title:"Payment",
    icon: card,
    link:"/payment",
    }

   
]