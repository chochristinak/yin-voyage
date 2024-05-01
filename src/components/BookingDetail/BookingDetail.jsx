import RetreatsListItem from "../RetreatsListItem/RetreatsListItem";

export default function BookingDetail({ booking, handleChangeQty, handleCheckout }) {
  if (!booking) return null;

  const retreatListItem = booking.retreatListItem.map(retreat =>
    <RetreatsListItem
      retreatListItem={retreat}
      isPaid={booking.isPaid}
      handleChangeQty={handleChangeQty}
      key={retreat._id}
    />
  );

  return (
    <div className="BookingDetails">
      <div className="section-heading">
        {booking.isPaid ?
          <span>BOOK THIS RETREAT<span className="smaller">{booking.bookingId}</span></span>
          :
          <span>EXPLORE OTHERS</span>
        }
        <span>{new Date(booking.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className="RetreatListItem-wrapper">
        {retreatListItem.length ?
          <>
            {retreatListItem}
            <section className="total">
              {booking.isPaid ?
                <span className="right">TOTAL&nbsp;&nbsp;</span>
                :
                <button
                  className="btn-sm"
                  onClick={handleCheckout}
                  disabled={!retreatListItem.length}
                >CHECKOUT</button>
              }
              <span>{booking.totalQty}</span>
              <span className="right">${booking.bookingTotal.toFixed(2)}</span>
            </section>
          </>
          :
          <div className="plan-retreat">Plan your blissful retreat</div>
        }
      </div>
    </div>
  );
}