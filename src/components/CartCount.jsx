import PropTypes from 'prop-types';

const CartCount = ({ size, count }) => {
    return (
        <div className={`absolute bg-red-600 text-white text-[18px] ${size} -right-2 -top-2 rounded-full text-center`}>
            {count}
        </div>
    );
};

CartCount.propTypes = {
    size: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
};

export default CartCount;
