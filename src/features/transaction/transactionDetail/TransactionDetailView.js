import React from 'react'
import { useParams } from 'react-router-dom'
import useTransactionDetail from './UseTransactionDetail'

const TransactionDetailView = () => {
  const {trxId} = useParams()
  const {} = useTransactionDetail(trxId)
  return (
    <div>TransactionDetailView</div>
  )
}

export default TransactionDetailView