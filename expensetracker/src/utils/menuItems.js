import {dashboard, expenses, transactions, trend, login} from '../utils/Icons'

export const menuItems = [
    {
        id: 1,
        title: "Sign Up",
        icon: login,
        link: "/dashboard",
    },
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
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Incomes",
        icon: trend,
        link: "/dashboard",
    },
    {
        id: 5,
        title: "Expenses",
        icon: expenses,
        link: "/dashboard",
    },
    {
        id:6,
        title:"Login",
        icon: login,
        link: "/dashboard",
    }
   
]