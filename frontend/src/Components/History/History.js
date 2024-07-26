import React from 'react'
import styled from 'styled-components'
import { useGlobalContex } from '../../context/globalContext';

function History() {
    const {transactionHistory} = useGlobalContex()

    const [...history] = transactionHistory()
    return (
        <HistoryStyled>
            <h2>Recent History</h2>
            {history.map((item) => {
                const {_id, title, amount, type} = item
                return (
                    <div key={_id} className="history-item">
                        <p style={{
                            color: type === 'Expense' ? '#FF0000' : 'var(--color-green)'
                        }}>
                            {title}
                        </p>
                        <p style={{
                            color: type === 'Expense' ? '#FF0000' : 'var(--color-green)'
                        }}>
                            {
                                type === 'Expense' ? `- ${Math.abs(amount)}` : `+ ${amount}`
                            }
                        </p>
                    </div>
                )
            })}
        </HistoryStyled>
    )
}

const HistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 210%;
    margin: 0 auto;
    .history-item{
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export default History;