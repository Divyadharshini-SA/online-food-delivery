import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OrderCheckout.css';

const OrderCheckout = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [deliveryTime, setDeliveryTime] = useState('ASAP');
    const [specialInstructions, setSpecialInstructions] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('cash');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [orders, setOrders] = useState([]); // State to store orders
    const [editingOrder, setEditingOrder] = useState(null);

    const apiUrl = 'http://localhost:8080/orders'; // URL for json-server

    // Fetch existing orders when component mounts
    useEffect(() => {
        fetchOrders();
    }, []);

    // Fetch all orders
    const fetchOrders = async () => {
        try {
            const response = await axios.get(apiUrl);
            setOrders(response.data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    // Handle form submission (create a new order)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        const orderData = {
            name,
            address,
            phone,
            deliveryTime,
            specialInstructions,
            paymentMethod,
        };

        try {
            const response = await axios.post(apiUrl, orderData, {
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.status === 201) {
                setSuccess('Order placed successfully!');
                setOrders([...orders, response.data]); // Add the new order to the list
                localStorage.removeItem('cart'); // Clear the cart
            } else {
                throw new Error('Failed to place the order. Please try again.');
            }
        } catch (err) {
            setError(err.response ? err.response.data.message : 'Failed to place the order.');
        } finally {
            setLoading(false);
        }
    };

    // Update an existing order
    const updateOrder = async (id) => {
        try {
            const response = await axios.put(`${apiUrl}/${id}`, editingOrder, {
                headers: { 'Content-Type': 'application/json' },
            });
            setOrders(orders.map(order => (order.id === id ? response.data : order)));
            setEditingOrder(null); // Reset editing mode
        } catch (error) {
            console.error('Error updating order:', error);
        }
    };

    // Delete an order
    const deleteOrder = async (id) => {
        try {
            await axios.delete(`${apiUrl}/${id}`);
            setOrders(orders.filter(order => order.id !== id)); // Remove order from list
        } catch (error) {
            console.error('Error deleting order:', error);
        }
    };

    return (
        <div className="order-checkout-container">
            <h2>Order Checkout</h2>
            {loading && <p>Processing your order...</p>}
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}

            <form className="order-checkout-form" onSubmit={handleSubmit}>
                <h3>Delivery Information</h3>
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Delivery Address</label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        pattern="[0-9]{10}"
                        placeholder="e.g. 1234567890"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="deliveryTime">Preferred Delivery Time</label>
                    <select
                        id="deliveryTime"
                        value={deliveryTime}
                        onChange={(e) => setDeliveryTime(e.target.value)}
                    >
                        <option value="ASAP">ASAP</option>
                        <option value="in 30 minutes">In 30 minutes</option>
                        <option value="in 1 hour">In 1 hour</option>
                    </select>
                </div>

                <h3>Special Instructions</h3>
                <textarea
                    id="specialInstructions"
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                    placeholder="Add any additional instructions"
                />

                <h3>Payment Method</h3>
                <div className="form-group">
                    <label>
                        <input
                            type="radio"
                            name="payment"
                            value="cash"
                            checked={paymentMethod === 'cash'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        Cash on Delivery
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="payment"
                            value="card"
                            checked={paymentMethod === 'card'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        Card Payment
                    </label>
                </div>
                <button type="submit" className="order-checkout-btn" disabled={loading}>
                    Place Order
                </button>
            </form>

            <div className="order-list">
                <h3>Your Orders</h3>
                <ul>
                    {orders.map(order => (
                        <li key={order.id}>
                            {order.name} - {order.deliveryTime}
                            <button onClick={() => setEditingOrder(order)}>Edit</button>
                            <button onClick={() => deleteOrder(order.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>

            {editingOrder && (
                <div className="edit-order-form">
                    <h3>Edit Order</h3>
                    <input
                        type="text"
                        value={editingOrder.name}
                        onChange={(e) => setEditingOrder({ ...editingOrder, name: e.target.value })}
                    />
                    <input
                        type="text"
                        value={editingOrder.deliveryTime}
                        onChange={(e) => setEditingOrder({ ...editingOrder, deliveryTime: e.target.value })}
                    />
                    <button onClick={() => updateOrder(editingOrder.id)}>Update Order</button>
                </div>
            )}
        </div>
    );
};

export default OrderCheckout;
   
   
   
   
   
 
