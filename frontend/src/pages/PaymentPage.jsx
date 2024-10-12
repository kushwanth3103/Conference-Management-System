import { useEffect, useState } from "react";
import classes from './PaymentPage.module.css'; // Import CSS module

const PaymentPage = () => {
    const [paymentInfo, setPaymentInfo] = useState({
        fee: '',
        cid: '',
        type: '',
        name: '',
        email: '',
        occupation: '',
    });

    const [paymentName, setPaymentName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [discountCode, setDiscountCode] = useState('');
    const [showDialog, setShowDialog] = useState(false);
    const [dialogMessage, setDialogMessage] = useState('');

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setPaymentInfo({
            fee: params.get('fee') || '',
            cid: params.get('cid') || '',
            type: params.get('type') || '',
            name: params.get('name') || '',
            email: params.get('email') || '',
            occupation: params.get('occupation') || '',
        });
    }, []);

    const handlePayment = async (e) => {
        
    };

    return (
        <main className={classes.main}>
            <div className={classes.paymentInfo}>
                <h1 className={classes.header}>Conference 2024</h1>
                <p className={classes.description}>
                    To submit a paper or register as a virtual attendee, input your card details to make
                    payment. You will be redirected to your bank&apos;s authorization page.
                </p>
            </div>
            <div className={classes.paymentContainer}>
                <div className={classes.formContainer}>
                    <form className={classes.form} onSubmit={handlePayment}>
                        <div>
                            <label className={classes.formLabel}>Cardholder&apos;s Name</label>
                            <input
                                type="text"
                                onChange={(e) => setPaymentName(e.target.value)}
                                className={classes.inputField}
                            />
                        </div>
                        <div>
                            <label className={classes.formLabel}>Card Number</label>
                            <input
                                type="text"
                                onChange={(e) => setCardNumber(e.target.value)}
                                className={classes.inputField}
                            />
                        </div>
                        <div className={classes.gridContainer}>
                            <div>
                                <label className={classes.formLabel}>Expiry</label>
                                <input
                                    type="text"
                                    placeholder="12/24"
                                    onChange={(e) => setExpiry(e.target.value)}
                                    className={classes.inputField}
                                />
                            </div>
                            <div>
                                <label className={classes.formLabel}>CVC</label>
                                <input
                                    type="text"
                                    onChange={(e) => setCvc(e.target.value)}
                                    className={classes.inputField}
                                />
                            </div>
                        </div>
                        <div className={classes.relative}>
                            <label className={classes.formLabel}>Discount Code</label>
                            <input
                                type="text"
                                onChange={(e) => setDiscountCode(e.target.value)}
                                className={classes.inputField}
                            />
                            <div className={classes.applyDiscount}>Apply</div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className={classes.payButton}
                            >
                                Pay
                            </button>
                        </div>
                    </form>
                </div>
                <div className={classes.amountContainer}>
                    {/* <div className={classes.circleBackground}></div> */}
                    <div className={classes.amountBox}>
                        <h2 className={classes.paymentHeader}>You&apos;re paying,</h2>
                        <p className={classes.paymentAmount}>${paymentInfo.fee}.00</p>
                        <div className={classes.paymentDetails}>
                            <div className={classes.flexContainer}>
                                Conference charge: <span className={classes.flexNormal}>${paymentInfo.fee}.00</span>
                            </div>
                            <div className={classes.categoryText}>Registeree category: Virtual Attendee</div>
                            <div className={classes.divider}></div>
                            <div className={classes.flexContainer}>
                                Tax: <span className={classes.flexBold}>$0.00</span>
                            </div>
                            <div className={classes.flexContainer}>
                                Total: <span className={classes.flexBold}>${paymentInfo.fee}.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showDialog && (
                <dialog className={classes.modal} open={true}>
                    <div className={classes.modalBox}>
                        <h3 className={classes.modalHeader}>
                            Hello {localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).name : ''}
                        </h3>
                        <p className={classes.modalMessage}>{dialogMessage}</p>
                        <div className={classes.modalAction}>
                            <button className={classes.modalButton} onClick={() => setShowDialog(false)}>Close</button>
                        </div>
                    </div>
                </dialog>
            )}
        </main>
    );
};

export default PaymentPage;
