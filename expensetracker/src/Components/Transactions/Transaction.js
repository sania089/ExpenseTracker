
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { InnerLayout } from '../../styles/Layouts';
import { rupee } from '../../utils/Icons';
import { PieChart } from 'react-minimal-pie-chart';
import React, { useState , useEffect} from 'react';
import Chart from '../Chart/Chart';
const Transaction = () => {
  const {
    totalExpenses,
    incomes,
    expenses,
    totalIncome,
    totalBalance,
    getIncomes,
    getExpenses,
  } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);

  const getCategories = (expenses) => {
    const categories = new Set();
    expenses.forEach((expense) => {
      categories.add(expense.category);
    });
    return [...categories];
  };

  const getTotalSpentPerCategory = (expenses) => {
    const totalSpentPerCategory = {};
    expenses.forEach((expense) => {
      const category = expense.category;
      if (!totalSpentPerCategory[category]) {
        totalSpentPerCategory[category] = 0;
      }
      totalSpentPerCategory[category] += expense.amount;
    });
    return totalSpentPerCategory;
  };

  const categories = getCategories(expenses);

  const categoryColors = [
    '#8A2BE2',
    '#FF0000',
    '#FFFFFF',
    '#000000',
    '#800000',
    '#800000',
    '#000080',
    '#87CEEB',
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [popupData, setPopupData] = useState(null);

  const handleMouseOver = (event, index) => {
    setHoveredIndex(index);
    setPopupData(pieChartData[index]);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
    setPopupData(null);
  };

  const dataStyle = (index) => {
    const highlight = hoveredIndex === index ? 0.2 : 0;
    return {
      transform: `scale(${1 + highlight})`,
      transition: 'transform 0.2s',
    };
  };
  const pieChartData = categories.map((category, index) => {
    const totalSpent = getTotalSpentPerCategory(expenses)[category];
    return {
      title: `${category} - ${totalSpent}`,
      value: totalSpent,
      color: categoryColors[index % categoryColors.length],
      radius: hoveredIndex === index ? 1.1 : 1,
    };
  });
  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>Visualize your expenses</h1>
        <div className="stats-con">
          <div className="chart-con">
            <PieChart
              data={pieChartData}
              // label={({ dataEntry }) => dataEntry.title}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              dataStyle={dataStyle}
              />
           {popupData && (
              <div className="popup">
                <p>
                  Category: {popupData.title.split(' - ')[0]} <br />
                  Amount: {popupData.title.split(' - ')[1]}
                </p>
              </div>
            )}
            
          </div>
          <div className="chart-con">
                        <Chart />
                        <div className="amount-con">
                            <div className="income">
                                <h2>Total Income</h2>
                                <p>
                                    {rupee} {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h2>Total Expense</h2>
                                <p>
                                    {rupee} {totalExpenses()}
                                </p>
                            </div>
                            <div className="balance">
                                <h2>Total Balance</h2>
                                <p>
                                    {rupee} {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>
          
                 </div>
             </InnerLayout>
         </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
    .stats-con{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        overflow: auto;
        .chart-con{
            grid-column: 1 / 4;
            height: 300px;
            .amount-con{
              position: absolute;
              top: 25%;
              right: 4%;
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;
                margin-top: 2rem;
                
                
                .income,
                .expense {
                  grid-column: span 2;
                }
                
                .income, .expense{
                  
                    grid-column: span 2;
                }
                .income, .expense, .balance{
                  overflow:auto;
                    background: #FCF6F9;
                    border: 2px solid #FFFFFF;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding: 1rem;
                    p{
                        font-size: 3rem;
                        font-weight: 700;
                    }
                }

                .balance{
                    grid-column: 2 / 4;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    p{
                        color: var(--color-green);
                        opacity: 0.6;
                        font-size: 4rem;
                    }
                }
            }
        }

        .history-con{
            grid-column: 4 / -1;
            h2{
                margin: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .salary-title{
                font-size: 1.2rem;
                span{
                    font-size: 1.8rem;
                }
            }
            .popup {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: rgba(0, 0, 0, 0.5);
              color: white;
              padding: 1rem;
              font-size: 1.4rem;
              z-index: 10;
            }
            .salary-item{
                background: #FCF6F9;
                border: 2px solid #FFFFFF;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    font-weight: 600;
                    font-size: 1.6rem;
                }
            }
        }
    }
`;

export default Transaction

