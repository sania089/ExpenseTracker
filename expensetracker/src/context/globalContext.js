import React, { useContext, useState } from "react"
import axios from 'axios'
import { clothing } from "../utils/Icons";



const BASE_URL = "http://localhost:5000/api/v1/";


const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)
    const [signtry, setDetail] =useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    //calculate incomes
    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}add-income`, income)
            .catch((err) =>{
                setError(err.response.data.message)
            })
        getIncomes()
    }

    const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}get-incomes`)
        setIncomes(response.data)
        console.log(response.data)
    }

    const deleteIncome = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-income/${id}`)
        getIncomes()
    }

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }

    const addExpense = async (income) => {
        const response = await axios.post(`${BASE_URL}add-expense`, income)
            .catch((err) =>{
                setError(err.response.data.message)
            })
        getExpenses()
    }

    const getExpenses = async () => {
        const response = await axios.get(`${BASE_URL}get-expenses`)
        setExpenses(response.data)
        console.log(response.data)
    }

    const deleteExpense = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-expense/${id}`)
        getExpenses()
    }

    const totalExpenses = () => {
        let totalIncome = 0;
        expenses.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    } 

    const totalBalance = () => {
        return totalIncome() - totalExpenses()
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) =>{
            return new Date(b.createdAt) - new Date(a.createdAt)
        })
        return history
    }
    
    const addDetails = async (detail) => {
        const response = await axios.post(`${BASE_URL}add-details`, detail)
            .catch((err) =>{
                setError(err.response.data.message)
            })
        // getDetails()
    }
    const getDetails= async () => {
        const response = await axios.get(`${BASE_URL}get-details`)
        setDetail(response.data)
        console.log(response.data)
        }
    const loginUser = async (username,password)=>{
        try {
            const response = await axios.post(`${BASE_URL}login`, {
              username,
              password,
            });
            // setIsLoggedIn(true);
            setDetail(response.data)
            console.log(response.data)
            const token = response.data.token;
      
          } catch (error) {
            setError(error.response.data.message);
            
          }
          
        };
    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            expenses,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpenses,
            totalBalance,
            transactionHistory,
            addDetails,
            getDetails,
            loginUser,
            isLoggedIn,
            setIsLoggedIn,


        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}