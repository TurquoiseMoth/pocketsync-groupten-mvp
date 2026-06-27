import { useState, useEffect } from 'react';
import './PayBills.css';
import electricitySvg from '../assets/icons/electricity.svg';
import internetSvg from '../assets/icons/internet.svg';
import airtimeSvg from '../assets/icons/airtime.svg';
import subscriptionSvg from '../assets/icons/subscription.svg';
import transferSvg from '../assets/icons/transfer.svg';
import { budgetService } from '../services';
import type { BillCategory, Bill } from '../types';

const PayBills = () => {
  const [categories, setCategories] = useState<BillCategory[]>([]);
  const [bills, setBills] = useState<Bill[]>([]);
  const [catLoading, setCatLoading] = useState(true);
  const [billsLoading, setBillsLoading] = useState(true);

  useEffect(() => {
    budgetService.getCategories().then((data) => {
      setCategories(data);
      setCatLoading(false);
    });
    budgetService.getBills().then((data) => {
      setBills(data);
      setBillsLoading(false);
    });
  }, []);

  const totalDue = bills.reduce((s, b) => s + b.amount, 0);

  return (
    <div className="pay-bills-container">
      <header className="pay-bills-header">
        <h1>Pay Bills</h1>
        <p>Settle your bills directly from PocketSync.</p>
      </header>

      <div className="bills-balance-card">
        <p className="bills-balance-label">Wallet Balance</p>
        <p className="bills-balance-amount">₦{totalDue.toLocaleString()}.00</p>
        <p className="bills-balance-sub">Sufficient for all upcoming bills</p>
      </div>

      <div className="bills-category-grid">
        {catLoading ? (
          <p className="state-message loading" style={{ gridColumn: '1 / -1' }}>Loading categories...</p>
        ) : categories.map((cat) => (
          <div key={cat.name} className="bill-category-card">
            <div className="bill-cat-icon">
              {cat.name === 'Electricity' ? (
                <img src={electricitySvg} alt="" width="24" height="24" />
              ) : cat.name === 'Internet' ? (
                <img src={internetSvg} alt="" width="50" height="50" />
              ) : cat.name === 'Airtime' ? (
                <img src={airtimeSvg} alt="" width="50" height="50" />
              ) : cat.name === 'TV Subscription' ? (
                <img src={subscriptionSvg} alt="" width="24" height="24" />
              ) : (
                cat.icon
              )}
            </div>
            <p className="bill-cat-name">{cat.name}</p>
          </div>
        ))}
        <div className="bill-category-card">
          <div className="bill-cat-icon">
            <img src={transferSvg} alt="" width="24" height="24" />
          </div>
          <p className="bill-cat-name">Transfer</p>
        </div>
      </div>

      <section className="upcoming-bills">
        <h2>Upcoming Bills</h2>
        {billsLoading ? (
          <p className="state-message loading">Loading bills...</p>
        ) : bills.length === 0 ? (
          <p className="state-message empty">No upcoming bills</p>
        ) : bills.map((bill, i) => (
          <div key={i} className="bill-item">
            <div className="bill-icon">
              {bill.category === 'Electricity' ? (
                <img src={electricitySvg} alt="" width="20" height="20" />
              ) : bill.category === 'Airtime' ? (
                <img src={airtimeSvg} alt="" width="34" height="34" />
              ) : (
                <img src={subscriptionSvg} alt="" width="20" height="20" />
              )}
            </div>
            <div className="bill-info">
              <p className="bill-name">{bill.name}</p>
              <p className={`bill-due${bill.overdue ? ' overdue' : ''}`}>
                {bill.overdue ? '⚠ Overdue — ' : 'Due '}{bill.due}
              </p>
            </div>
            <div className="bill-right">
              <p className="bill-amount">₦{bill.amount.toLocaleString()}</p>
              <button className="pay-now-btn">Pay Now</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PayBills;
