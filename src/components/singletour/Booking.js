import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import KhaltiCheckout from "khalti-checkout-web";
import config from '../../khalti/khaltiConfig';

const Booking = ({ tourdetails }) => {
	const [ adult, setAdult ] = useState(1);
    const [ child, setChild] = useState(0);
    const [ totalPrice, setTotalPrice ] = useState()

	let checkout = new KhaltiCheckout(config);

	const afterdiscount = () => {
		const discountAmount = tourdetails.discount / 100 * tourdetails.price;
		return tourdetails.price - discountAmount;
	};

	const handleIncrement = () => {
		setAdult(adult + 1);
	};

	const handleDecrement = () => {
		if (adult <= 1) {
			return;
		} else {
			setAdult(adult - 1);
		}
	};

    const handleChildInc = () => {
		setChild(child + 1);
	};

	const handleChildDec = () => {
		if (child <= 0) {
			return;
		} else {
			setChild(child - 1);
		}
	};

    const total = () => {
        const adultPrice = adult * afterdiscount();
        const childPrice = child * tourdetails.children;
        const totalPrice = adultPrice + childPrice;
        setTotalPrice(totalPrice)
    }
    
    useEffect(()=>{
        total()
    },[adult,child])

	return (
		<section className="booking__card py-5 px-4">
			<div className="heading text-center mb-4">
				<h3>Book The Tour</h3>
			</div>
			<div className="check__con d-flex justify-content-between align-items-center pb-4">
				<div className="check">
					<p>Check In</p>
					<p>{tourdetails.month.checkin}</p>
				</div>
				<i class="bi bi-arrow-right d-none d-sm-block" />
				<div className="check">
					<p>Check Out</p>
					<p>{tourdetails.month.checkout}</p>
				</div>
			</div>
            <div className='price__main'>
			<div className="price__con d-flex justify-content-between py-4 align-items-center">
				<div className='price'>
					<p>
						Adult:  Rs.{afterdiscount()}/<del>Rs.{tourdetails.price}</del>
					</p>
				</div>
				<div className='counter'>
					<div className='d-flex gap-3 align-items-center'>
						<a onClick={handleIncrement}>
							<i class="bi bi-plus-circle" />
						</a>
						<p>{adult}</p>
						<a onClick={handleDecrement}>
							<i class="bi bi-dash-circle" />
						</a>
					</div>
				</div>
			</div>
            <div className="price__con d-flex justify-content-between pb-4 align-items-center">
				<div className='price'>
					<p>
						Children:  Rs.{tourdetails.children}
					</p>
				</div>
				<div className='counter'>
					<div className='d-flex gap-3 align-items-center'>
						<a onClick={handleChildInc}>
							<i class="bi bi-plus-circle" />
						</a>
						<p>{child}</p>
						<a onClick={handleChildDec}>
							<i class="bi bi-dash-circle" />
						</a>
					</div>
				</div>
			</div>
            </div>
            <div className='total__con text-center pt-4'>
                <p>Total Price: <span>Rs.{totalPrice}</span></p>
            </div>
            <div className='d-flex justify-content-center pt-4'>
            <Button className='find__now' onClick={()=>checkout.show({amount: totalPrice * 100 })}>
					<div>
						<span className="transition" />
						<span className="label">Book Now</span>
					</div>
				</Button>
            </div>
		</section>
	);
};

export default Booking;
