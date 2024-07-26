import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layout';
import { useGlobalContex } from '../../context/globalContext';
import IncomeItem from '../IncomeItem/IncomeItem';
import ExpenseForm from './ExpenseForm';

function Expenses() {
  const {addExpense, expenses, getExpense, deleteExpense, totalExpenses} = useGlobalContex()

  useEffect(() => {
    getExpense()
  },[])
  return (
    <ExpenseStyled>
      <InnerLayout>
        <h1>Expenses</h1>
        <h2 className='total-expense'>Total Expense: <span><i class="fa-solid fa-indian-rupee-sign"></i> {totalExpenses()} </span>
        </h2>
        <div className="expense-content">
          <div className="form-container">
            <ExpenseForm />
          </div>
          <div className="expenses">
            {expenses.map((expense) => {
              const {_id, title, amount, date, category, description} = expense;
              return <IncomeItem
                key={_id}
                id={_id}
                title={title}
                description={description}
                amount={amount}
                date={date}
                category={category}
                indicatorColor= "var(--color-green)"
                deleteItem={deleteExpense}                
              />
            })}
          </div>
        </div>
      </InnerLayout>
    </ExpenseStyled>
  )
}

const ExpenseStyled = styled.div`
  display: flex;
  overflow: auto;
    .total-expense{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        width: 128%;
        span{
            font-size: 2.5rem;
            font-weight: 800;
            color: #FF0000;
        }
    }
    .expense-content{
        display: flex;
        gap: 2rem;
        padding: 0.5rem;
        .expenses{
            flex: 1;
            font-size: 1rem;
        }
    }
`;

export default Expenses